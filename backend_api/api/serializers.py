from rest_framework import serializers

from .models import Profile, Idea


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = '__all__'
