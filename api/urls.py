from django.urls import path
from . import views

urlpatterns = [
    path('idealist/', views.IdeaListView.as_view())
]