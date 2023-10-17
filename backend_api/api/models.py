from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    description = models.TextField(max_length=300, null=True, blank=True)
    phone = models.CharField(max_length=30, null=True, blank=True)
    avatar = models.ImageField(upload_to='avatar/', null=True, blank=True)
    background = models.ImageField(upload_to='background/', null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class Idea(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField(max_length=500)
    photo_1 = models.ImageField(upload_to='idea/')
    photo_2 = models.ImageField(upload_to='idea/', blank=True, null=True)
    photo_3 = models.ImageField(upload_to='idea/', blank=True, null=True)
    photo_4 = models.ImageField(upload_to='idea/', blank=True, null=True)
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    views = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
