from django.db import models

# Create your models here.
class HealthData(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    age = models.IntegerField()
    weight=models.FloatField()
    height=models.FloatField()
    blood_pressure=models.CharField(max_length=10)
    heart_rate=models.IntegerField()
    activity_level=models.CharField(max_length=50)
    timestamp=models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.user.username} - {self.timestamp}"