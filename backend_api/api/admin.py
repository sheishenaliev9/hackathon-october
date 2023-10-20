from django.contrib import admin

from .models import Profile, Idea, Category, Comment

class IdeaAdmin(admin.ModelAdmin):
    readonly_fields = ('update', 'views', 'like', 'dislike')     
    search_fields = ('title', 'user__username', 'id')

class ProfileAdmin(admin.ModelAdmin):
    search_fields = ('user__username', 'email', 'id')

class CategoryAdmin(admin.ModelAdmin):
    search_fields = ('category', 'id')

class CommentAdmin(admin.ModelAdmin):
    search_fields = ('user__username', 'idea__title', 'id')

admin.site.register(Profile, ProfileAdmin)
admin.site.register(Idea, IdeaAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Comment, CommentAdmin)
