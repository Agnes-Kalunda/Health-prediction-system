from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import KidneyPredictionViewSet

router = DefaultRouter()
router.register(r'kidney-predictions', KidneyPredictionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]