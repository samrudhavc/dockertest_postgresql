from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Fish, Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'description']
    search_fields = ['name']

@admin.register(Fish)
class FishAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category', 'price', 'created_at']
    list_filter = ['category']
    search_fields = ['name']
