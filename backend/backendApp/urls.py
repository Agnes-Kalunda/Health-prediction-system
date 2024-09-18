# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import KidneyPredictionViewSet, HeartDiseasePredictionViewSet

router = DefaultRouter()
router.register(r'kidney-predictions', KidneyPredictionViewSet)
router.register(r'heart-disease-predictions', HeartDiseasePredictionViewSet, basename='heart-disease-prediction')

urlpatterns = [
    path('', include(router.urls)),
]
