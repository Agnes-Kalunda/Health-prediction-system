# serializers.py
from rest_framework import serializers

class KidneyPredictionSerializer(serializers.Serializer):
    age = serializers.FloatField(required=True)
    bp = serializers.FloatField(required=True)
    sg = serializers.FloatField(required=True)
    al = serializers.FloatField(required=True)
    su = serializers.FloatField(required=True)
    rbc = serializers.CharField(required=True)
    pc = serializers.CharField(required=True)
    pcc = serializers.CharField(required=True)
    ba = serializers.CharField(required=True)
    bgr = serializers.FloatField(required=True)
    bu = serializers.FloatField(required=True)
    sc = serializers.FloatField(required=True)
    sod = serializers.FloatField(required=True)
    pot = serializers.FloatField(required=True)
    hemo = serializers.FloatField(required=True)
    pcv = serializers.FloatField(required=True)
    wc = serializers.FloatField(required=True)
    rc = serializers.FloatField(required=True)
    htn = serializers.CharField(required=True)
    dm = serializers.CharField(required=True)
    cad = serializers.CharField(required=True)
    appet = serializers.CharField(required=True)
    pe = serializers.CharField(required=True)
    ane = serializers.CharField(required=True)

    def validate(self, data):
        for field in ['age', 'bp', 'sg', 'al', 'su', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc']:
            if data.get(field) is None:
                raise serializers.ValidationError({field: f'{field} cannot be null'})
        
        for field in ['rbc', 'pc', 'pcc', 'ba', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']:
            if not data.get(field):
                raise serializers.ValidationError({field: f'{field} cannot be empty'})
        
        return data
