from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'profiles', views.ViewSetProfile)
router.register(r'ideas', views.ViewSetIdea)

urlpatterns = [
    path('', include(router.urls)),
    path('drf-auth/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
]
