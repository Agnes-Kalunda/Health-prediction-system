from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import KidneyPrediction
from .serializers import KidneyPredictionSerializer, PredictionResponseSerializer
import joblib
import numpy as np
import os
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

class KidneyPredictionViewSet(viewsets.ModelViewSet):
    queryset = KidneyPrediction.objects.all()
    serializer_class = KidneyPredictionSerializer

    @action(detail=False, methods=['post'])
    def predict(self, request):
        logger.info(f"Received prediction request with data: {request.data}")
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                # Load the model and scaler
                model_path = os.path.join(settings.BASE_DIR, 'backendApp', 'notebooks', 'kidneyy.pkl')
                scaler_path = os.path.join(settings.BASE_DIR, 'backendApp', 'notebooks', 'kidneyy_scaler.pkl')
                model = joblib.load(model_path)
                scaler = joblib.load(scaler_path)

                

                # Define feature order (24 input features, excluding 'classification')
                feature_order = ['age', 'bp', 'sg', 'al', 'su', 'rbc', 'pc', 'pcc', 'ba', 
                                 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 
                                 'rc', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']

                # Create input data array
                input_data = np.array([serializer.validated_data[feature] for feature in feature_order]).reshape(1, -1)

                # Debugging: Log the shape and contents of input_data
                logger.info(f"Input data shape: {input_data.shape}")
                logger.info(f"Input data: {input_data}")

                # Ensure input_data has exactly 24 features
                if input_data.shape[1] != 24:
                    raise ValueError(f"Input data must have exactly 24 features. Found {input_data.shape[1]} features.")

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

                logger.info(f"Prediction made: {prediction_response_serializer.data}")
                return Response(prediction_response_serializer.data, status=status.HTTP_201_CREATED)

            except Exception as e:
                logger.error(f"Error during prediction: {str(e)}")
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        else:
            logger.error(f"Invalid input data: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
