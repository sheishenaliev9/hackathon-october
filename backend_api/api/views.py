from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from django.dispatch import receiver
from rest_framework.response import Response
from django.db.models.signals import post_save
from rest_framework.permissions import IsAuthenticated

from .models import Profile, Idea, Comment, Category, Voice
from .serializers import ProfileSerializer, IdeaSerializer, UserSerializer, CommentSerializer, CategorySerializer, VoiceSerializer


class ViewSetProfile(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated, )


class ViewSetCategory(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAuthenticated, )


class ViewSetComment(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated, )


class ViewSetIdea(viewsets.ModelViewSet):
    queryset = Idea.objects.all().order_by('-views', '-create', '-like')
    serializer_class = IdeaSerializer
    permission_classes = (IsAuthenticated, )

    def retrieve(self, request, pk=None):
        idea = self.get_object()
        idea.views += 1  # Increase the views value by 1
        idea.save()  # Saving the Idea object with updated views
        idea_serializer = IdeaSerializer(idea, context={'request': request})

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
    permission_classes = (IsAuthenticated, )


class ViewSetVoice(viewsets.ModelViewSet):
    queryset = Voice.objects.all()
    serializer_class = VoiceSerializer
    permission_classes = (IsAuthenticated, )

    def evaluating_ideas(self, request, message_type):
        pk = request.data.get('idea')
        choice = request.data.get('choice')
        idea = Idea.objects.get(pk=pk)
        if message_type == "post":
            if choice == True:
                idea.like += 1
            else:
                idea.dislike += 1
        else:
            if choice == True:
                idea.like += 1
                idea.dislike -= 1
            else:
                idea.like -= 1
                idea.dislike += 1
        idea.save()

    def create(self, request, *args, **kwargs):
        serializer = VoiceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        self.evaluating_ideas(request, "post")

        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            instance = Voice.objects.get(pk=pk)
        except:
            return Response({'error': 'Not found.'})
        self.evaluating_ideas(request, "put")
        serializer = VoiceSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        print(request)
        pk = kwargs.get("pk", None)
        try:
            voice = Voice.objects.get(pk=pk)
        except Voice.DoesNotExist:
            return Response({'error': 'Voice not found.'})

        idea = Idea.objects.get(pk=voice.idea.id)
        print(voice.choice)
        if voice.choice == True:
            idea.like -= 1
        else:
            idea.dislike -= 1
        idea.save()

        voice.delete()

        return Response({'Destroy': f"{pk} voice"})


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
