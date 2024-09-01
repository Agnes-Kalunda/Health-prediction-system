from django.shortcuts import render
from rest_framework import viewsets
from .models import HealthData
from .serializers import HealthDataSerializer

# Create your views here.

class HealthDataViewSet(viewsets.ModelViewSet):
    queryset = HealthData.objects.all()
    serializer_class = HealthDataSerializer