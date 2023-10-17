from rest_framework import generics, permissions
from .models import Idea
from .serializers import IdeaSerializer

class IdeaListViewByCreate(generics.ListAPIView):
    serializer_class = IdeaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Idea.objects.filter(user=user).order_by('-create')
    
class IdeaListViewByViews(generics.ListAPIView):
    serializer_class = IdeaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Idea.objects.filter(user=user).order_by('-views')
    
    