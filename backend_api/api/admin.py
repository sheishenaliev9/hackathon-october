from django.contrib import admin

from .models import Profile, Idea, Category, Comment, Voice

admin.site.register(Profile)
admin.site.register(Idea)
admin.site.register(Category)
admin.site.register(Comment)
admin.site.register(Voice)
