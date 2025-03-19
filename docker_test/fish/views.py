from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Fish, Category
from .serializers import FishSerializer, CategorySerializer

class FishViewSet(viewsets.ModelViewSet):
    queryset = Fish.objects.all()
    serializer_class = FishSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
