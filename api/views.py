from rest_framework import generics, permissions
from .models import Idea
from .serializers import IdeaSerializer

class IdeaListView(generics.ListAPIView):
    serializer_class = IdeaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Idea.objects.filter(user=user)
    
