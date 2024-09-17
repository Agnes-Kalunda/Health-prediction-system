from rest_framework import serializers
from .models import KidneyPrediction

class KidneyPredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = KidneyPrediction
        fields = [
            'age', 'bp', 'sg', 'al', 'su', 'rbc', 'pc', 'pcc', 'ba', 
            'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc', 
            'htn', 'dm', 'cad', 'appet', 'pe', 'ane'
        ]

    def validate(self, data):
        for field in ['age', 'bp', 'sg', 'al', 'su', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc']:
            if data.get(field) is None:
                raise serializers.ValidationError({field: f'{field} cannot be null'})
        
        for field in ['rbc', 'pc', 'pcc', 'ba', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']:
            if not data.get(field):
                raise serializers.ValidationError({field: f'{field} cannot be empty'})
        
        return data

class PredictionResponseSerializer(serializers.Serializer):
    prediction_result = serializers.CharField()
    prediction_probability = serializers.FloatField()
    message = serializers.CharField()