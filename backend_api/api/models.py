from datetime import datetime
from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    description = models.TextField(max_length=300, null=True, blank=True)
    phone = models.CharField(max_length=30, null=True, blank=True)
    email = models.CharField(max_length=150)
    avatar = models.ImageField(upload_to='avatar/', null=True, blank=True)
    background = models.ImageField(upload_to='background/', null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
    
    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'


class Idea(models.Model):
    title = models.CharField(max_length=150, help_text='Write here title of your idea')
    content = models.TextField(max_length=500, help_text='Write here content of your idea')
    photo = models.ImageField(upload_to='idea/', help_text='Put here image of your idea')
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(default=datetime.now())
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cat = models.ForeignKey('Category', on_delete=models.PROTECT)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Idea'
        verbose_name_plural = 'Ideas'


class Comment(models.Model):
    idea = models.ForeignKey(Idea, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(help_text='Write your comment on idea')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"comment: {self.pk}, user: {self.user}"
    
    class Meta:
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'


class Category(models.Model):
    category = models.CharField(max_length=150, db_index=True)

    def __str__(self):
        return self.category
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Voice(models.Model):
    choice = models.BooleanField(null=True)
    idea = models.OneToOneField(Idea, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.idea.title}: {self.idea}"
    
    class Meta:
        verbose_name = 'Voice'
        verbose_name_plural = 'Voices'
