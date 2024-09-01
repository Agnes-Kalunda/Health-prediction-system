from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HealthDataViewSet

router = DefaultRouter()
router.register(r'health-data', HealthDataViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
