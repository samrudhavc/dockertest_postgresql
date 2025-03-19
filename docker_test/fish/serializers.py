from rest_framework import serializers
from fish.models import Fish, Category

# Serializer for Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'image']

# Serializer for Fish
class FishSerializer(serializers.ModelSerializer):
    category = CategorySerializer()  # Nested Category data

    class Meta:
        model = Fish
        fields = ['id', 'name', 'description', 'price', 'category', 'image', 'created_at']
