from django.urls import path
from . import views

urlpatterns = [
    path('idealistcreate/', views.IdeaListViewByCreate.as_view()),
    path('idealistviews/', views.IdeaListViewByViews.as_view()),
    path('create/', views.IdeaCreate.as_view()),
]