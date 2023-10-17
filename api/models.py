from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Profile(models.Model):
    description = models.TextField(max_length=300, null=True, blank=True)
    contact = models.CharField(max_length=500, null=True, blank=True)
    number = models.CharField(max_length=30, null=True, blank=True)
    avatar = models.ImageField(upload_to='avatar/', null=True, blank=True)
    background = models.ImageField(upload_to='background/', null=True, blank=True)
    status = models.ForeignKey('Status', on_delete=models.PROTECT, null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class Idea(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField(max_length=500)
    photo_1 = models.ImageField(upload_to='idea/', blank=True, null=True)
    photo_2 = models.ImageField(upload_to='idea/', blank=True, null=True)
    photo_3 = models.ImageField(upload_to='idea/', blank=True, null=True)
    photo_4 = models.ImageField(upload_to='idea/', blank=True, null=True)
    photo_5 = models.ImageField(upload_to='idea/', blank=True, null=True)
    photo_6 = models.ImageField(upload_to='idea/', blank=True, null=True)
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    views = models.IntegerField(null=True, blank=True)
    category = models.ForeignKey('Category', on_delete=models.PROTECT, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=150, db_index=True)

    def __str__(self):
        return self.name


class Status(models.Model):
    status = models.CharField(max_length=150, db_index=True)

    def __str__(self):
        return self.status
    
class Comment(models.Model):
    text = models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    idea = models.ForeignKey(Idea, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.idea} by {self.user}'
    