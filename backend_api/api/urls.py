from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'profiles', views.ViewSetProfile)
router.register(r'ideas', views.ViewSetIdea)
router.register(r'comments', views.ViewSetComment)
router.register(r'categories', views.ViewSetCategory)

urlpatterns = [
    path('', include(router.urls)),
    path('userprofile/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
    path('ideaview/<int:pk>/', views.ViewSetIdea.as_view({'post': 'post_view'})),
]
