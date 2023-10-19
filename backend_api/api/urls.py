from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'profiles', views.ViewSetProfile)
router.register(r'ideas', views.ViewSetIdea)

urlpatterns = [
    path('', include(router.urls)),
    path('userprofile/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
]
