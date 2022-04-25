from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', UserViewSet, basename='user account')
router.register('library', LibraryViewSet, basename='library')
router.register('wishlist', WishListViewSet, basename='wihslist')
router.register('book', BookViewSet, basename='book')
router.register('post', PostViewSet, basename='post')
router.register('comment', CommentViewSet, basename='comment')
router.register('social-group', SocialGroupViewSet, basename='social-group')
router.register('friend', FriendViewSet, basename='friend')

urlpatterns = [
   path('', include(router.urls)),
   path('login/', handle_login),
   path('logout/', handle_logout)
]
