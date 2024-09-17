from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import KidneyPrediction
from .serializers import KidneyPredictionSerializer, PredictionResponseSerializer
import joblib
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler

class KidneyPredictionViewSet(viewsets.ModelViewSet):
    queryset = KidneyPrediction.objects.all()
    serializer_class = KidneyPredictionSerializer

    @action(detail=False, methods=['post'])
    def predict(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Load the model and scaler
            model = joblib.load('backend/backendApp/notebooks/kidneyy.pkl')
            scaler = joblib.load('backend/backendApp/notebooks/kidneyy_scaler.pkl')

            # Define feature order
            feature_order = ['age', 'bp', 'sg', 'al', 'su', 'rbc', 'pc', 'pcc', 'ba', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']

            # Create input data array
            input_data = np.array([serializer.validated_data[feature] for feature in feature_order]).reshape(1, -1)

            # Load predefined label encoders
            categorical_cols = ['rbc', 'pc', 'pcc', 'ba', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']
            label_encoders = {col: joblib.load(f'backend/backendApp/notebooks/{col}_label_encoder.pkl') for col in categorical_cols}

            # Encode categorical variables
            for col in categorical_cols:
                col_index = feature_order.index(col)
                input_data[0, col_index] = label_encoders[col].transform([input_data[0, col_index]])[0]

            # Scale the input data
            input_data_scaled = scaler.transform(input_data)

            # Make prediction
            prediction = model.predict(input_data_scaled)[0]
            probability = model.predict_proba(input_data_scaled)[0][1]

            # Create and save KidneyPrediction instance
            kidney_prediction = KidneyPrediction.objects.create(
                **serializer.validated_data,
                prediction=prediction,
                prediction_result='Kidney Disease' if prediction else 'No Kidney Disease',
                prediction_probability=probability
            )

            # Prepare response
            prediction_response_serializer = PredictionResponseSerializer({
                'prediction_result': kidney_prediction.prediction_result,
                'prediction_probability': kidney_prediction.prediction_probability,
                'message': f"Based on the input values, the prediction is: {kidney_prediction.prediction_result} with a probability of {kidney_prediction.prediction_probability:.2f}"
            })

            return Response(prediction_response_serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)