from django.db import models

class KidneyPrediction(models.Model):
    age = models.FloatField()
    bp = models.FloatField()
    sg = models.FloatField()
    al = models.FloatField()
    su = models.FloatField()
    rbc = models.CharField(max_length=10)
    pc = models.CharField(max_length=10)
    pcc = models.CharField(max_length=10)
    ba = models.CharField(max_length=10)
    bgr = models.FloatField()
    bu = models.FloatField()
    sc = models.FloatField()
    sod = models.FloatField()
    pot = models.FloatField()
    hemo = models.FloatField()
    pcv = models.FloatField()
    wc = models.FloatField()
    rc = models.FloatField()
    htn = models.CharField(max_length=10)
    dm = models.CharField(max_length=10)
    cad = models.CharField(max_length=10)
    appet = models.CharField(max_length=10)
    pe = models.CharField(max_length=10)
    ane = models.CharField(max_length=10)
    prediction = models.BooleanField(null=True)
    prediction_result = models.CharField(max_length=20, null=True)
    prediction_probability = models.FloatField(null=True)

    def __str__(self):
        return f"Prediction for patient {self.id}"