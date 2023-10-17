from rest_framework import serializers
from .models import *

class IdeaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Idea
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = '__all__'

class StatusSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Status
        fields = '__all__'

