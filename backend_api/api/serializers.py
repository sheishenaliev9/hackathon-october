from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Profile, Idea, Comment, Category, Voice


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'profile']
        ref_name = 'YourUniqueRefName'


class CommentSerializer(serializers.ModelSerializer):
    userprofile = UserSerializer(read_only=True, source='user')

    class Meta:
        model = Comment
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class IdeaSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True, source='cat')

    class Meta:
        model = Idea
        fields = '__all__'


class VoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voice
        fields = '__all__'
