from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, FishViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'fish', FishViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
