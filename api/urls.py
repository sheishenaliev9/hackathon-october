from django.urls import path
from . import views

urlpatterns = [
    path('idealist-create/', views.IdeaListViewByCreate.as_view()),
    path('idealist-views/', views.IdeaListViewByViews.as_view()),
    path('idea-create/', views.IdeaCreate.as_view()),
    path('category-create/', views.CategoryCreate.as_view()),
    path('profile-create/', views.ProfileCreate.as_view()),
    path('profile-view/', views.ProfileView.as_view()),
    path('status-create/', views.StatusCreate.as_view()),
    path('comment-create/', views.CommentCreate.as_view()),
]