from rest_framework import viewsets, permissions
from .serializers import *
from .models import User, Library, WishList, Book, Post, Comment, SocialGroup, Friend
from .views_auth import *
from django.db.models import Q
class UserViewSet(viewsets.ModelViewSet):
   serializer_class = UserSerializer  

   def get_permissions(self):
      if self.request.method == 'POST':
         return (permissions.AllowAny(),)
      elif self.request.method == 'PATCH':
         return (permissions.IsAuthenticated(),)
      elif self.request.method == 'PUT':
         return (permissions.IsAuthenticated(),)
      elif self.request.method == 'GET':
         return (permissions.IsAuthenticated(),)
      return (permissions.IsAdminUser(),)

   def get_queryset(self):
      if self.request.user.is_superuser:
         return User.objects.all()
      return User.objects.filter(username=self.request.user.username)
     
class LibraryViewSet(viewsets.ModelViewSet):
   serializer_class = LibrarySerializer  

   def perfrom_create(self, serializer):
      serializer.save(owner=self.request.user)
      return super().perfrom_create(serializer)

   def get_queryset(self):
      if self.request.user.is_superuser:
         return Library.objects.all()
      return Library.objects.all()
class WishListViewSet(viewsets.ModelViewSet):
   serializer_class = WishListSerializer 

   def perfrom_create(self, serializer):
      serializer.save(owner=self.request.user)
      return super().perfrom_create(serializer) 

   def get_queryset(self):
      if self.request.user.is_superuser:
         return  WishList.objects.all()
      return WishList.objects.filter(owner=self.request.user)
class BookViewSet(viewsets.ModelViewSet):
   queryset = Book.objects.all()
   serializer_class = BookSerializer  

   def perfrom_create(self, serializer):
      serializer.save(owner=self.request.user)
      serializer.save(library=self.request.user.library)
      serializer.save(wishlist=self.request.user.wishlist)
      return super().perfrom_create(serializer)
class PostViewSet(viewsets.ModelViewSet):
   queryset = Post.objects.all()
   serializer_class = PostSerializer 

   def perfrom_create(self, serializer):
      serializer.save(poster=self.request.user)
      return super().perfrom_create(serializer) 
class CommentViewSet(viewsets.ModelViewSet):
   queryset = Comment.objects.all()
   serializer_class = CommentSerializer  

   def perfrom_create(self, serializer):
      serializer.save(commenter=self.request.user)
      return super().perfrom_create(serializer) 
class SocialGroupViewSet(viewsets.ModelViewSet):
   queryset = SocialGroup.objects.all()
   serializer_class = SocialGroupSerializer  
class FriendViewSet(viewsets.ModelViewSet):
   serializer_class = FriendSerializer  

   def perfrom_create(self, serializer):
      serializer.save(from_user=self.request.user)
      return super().perfrom_create(serializer) 

   def get_queryset(self):
      if self.request.user.is_superuser:
         return Friend.objects.all()
      return Friend.objects.filter(owner=self.request.user)
