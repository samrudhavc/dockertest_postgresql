from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'fish', views.FishViewSet)
router.register(r'categories', views.CategoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
