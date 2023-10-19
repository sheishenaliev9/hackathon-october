from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from django.dispatch import receiver
from rest_framework.response import Response
from django.db.models.signals import post_save
from rest_framework.permissions import IsAuthenticated

from .models import Profile, Idea, Comment, Category
from .serializers import ProfileSerializer, IdeaSerializer, UserSerializer, CommentSerializer, CategorySerializer


class ViewSetProfile(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = (IsAuthenticated, )


class ViewSetCategory(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ViewSetComment(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class ViewSetIdea(viewsets.ModelViewSet):
    queryset = Idea.objects.all().order_by('-views', '-create')
    serializer_class = IdeaSerializer

    def post_view(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views += 1  # Increase the views value by 1
        instance.save()  # Saving the Idea object with updated views

        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        idea = self.get_object()
        idea_serializer = IdeaSerializer(idea)

        comments = Comment.objects.filter(idea=idea)
        comment_serializer = CommentSerializer(comments, many=True)

        category = idea.cat
        category_serializer = CategorySerializer(category)

        idea_data = idea_serializer.data
        idea_data['comments'] = comment_serializer.data
        idea_data['category'] = category_serializer.data

        return Response(idea_data)


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
