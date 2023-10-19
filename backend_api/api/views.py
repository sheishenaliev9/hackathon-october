from rest_framework import viewsets, generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

from .models import Profile, Idea
from .serializers import ProfileSerializer, IdeaSerializer, UserSerializer


class ViewSetProfile(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = (IsAuthenticated, )

class ViewSetIdea(viewsets.ModelViewSet):
    queryset = Idea.objects.all().order_by('-views', '-create')
    serializer_class = IdeaSerializer
    # permission_classes = (IsAuthenticated, )

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
