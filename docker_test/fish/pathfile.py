from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, FishViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'fish', FishViewSet)
urlpatterns = [
    path('api/', include(router.urls)),
    path('media/', include('django.conf.urls.static')),  # Serve media files during development
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
