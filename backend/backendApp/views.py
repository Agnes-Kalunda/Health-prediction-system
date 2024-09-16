from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import KidneyPrediction
from .serializers import KidneyPredictionSerializer
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
            
            model = joblib.load('backend/backendApp/notebooks/kidney.pkl')
            scaler = joblib.load('backend/backendApp/notebooks/kidney_scaler.pkl')

            # input data
            feature_order = ['age', 'bp', 'sg', 'al', 'su', 'rbc', 'pc', 'pcc', 'ba', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']
            input_data = np.array([serializer.validated_data[feature] for feature in feature_order]).reshape(1, -1)

            # Encode categorical variables
            categorical_cols = ['rbc', 'pc', 'pcc', 'ba', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']
            label_encoder = LabelEncoder()
            for i, col in enumerate(categorical_cols):
                col_index = feature_order.index(col)
                input_data[0, col_index] = label_encoder.fit_transform([input_data[0, col_index]])[0]

            # Scale the input data
            input_data_scaled = scaler.transform(input_data)

            prediction = model.predict(input_data_scaled)[0]
            probability = model.predict_proba(input_data_scaled)[0][1]


            instance = serializer.save(
                prediction=bool(prediction),
                prediction_result='Kidney Disease' if prediction else 'No Kidney Disease',
                prediction_probability=probability
            )

            return Response({
                'prediction_result': instance.prediction_result,
                'prediction_probability': instance.prediction_probability,
                **serializer.data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)