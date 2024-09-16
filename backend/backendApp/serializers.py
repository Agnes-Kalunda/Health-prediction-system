from rest_framework import serializers
from .models import KidneyPrediction

class KidneyPredictionSerializer(serializers.Serializer):
    age = serializers.FloatField()
    bp = serializers.FloatField()
    sg = serializers.FloatField()
    al = serializers.FloatField()
    su = serializers.FloatField()
    rbc = serializers.CharField(max_length=10)
    pc = serializers.CharField(max_length=10)
    pcc = serializers.CharField(max_length=10)
    ba = serializers.CharField(max_length=10)
    bgr = serializers.FloatField()
    bu = serializers.FloatField()
    sc = serializers.FloatField()
    sod = serializers.FloatField()
    pot = serializers.FloatField()
    hemo = serializers.FloatField()
    pcv = serializers.FloatField()
    wc = serializers.FloatField()
    rc = serializers.FloatField()
    htn = serializers.CharField(max_length=10)
    dm = serializers.CharField(max_length=10)
    cad = serializers.CharField(max_length=10)
    appet = serializers.CharField(max_length=10)
    pe = serializers.CharField(max_length=10)
    ane = serializers.CharField(max_length=10)

    prediction_result = serializers.CharField(read_only=True)
    prediction_probability = serializers.FloatField(read_only=True)

    def create(self, validated_data):
        return KidneyPrediction.objects.create(**validated_data)