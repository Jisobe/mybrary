from rest_framework import viewsets, permissions
from .serializers import *
from .models import User, Library, WishList, Book, Post, Comment, SocialGroup, Friend
from .views_auth import *
class UserViewSet(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer  

   def get_permissions(self):
      if self.request.method == 'POST':
         return (permissions.AllowAny(),)
      return (permissions.IsAdminUser(),)
class LibraryViewSet(viewsets.ModelViewSet):
   queryset = Library.objects.all()
   serializer_class = LibrarySerializer  

   def perfrom_create(self, serializer):
      serializer.save(owner=self.request.user)
class WishListViewSet(viewsets.ModelViewSet):
   queryset = WishList.objects.all()
   serializer_class = WishListSerializer 

   def perfrom_create(self, serializer):
      serializer.save(owner=self.request.user) 
class BookViewSet(viewsets.ModelViewSet):
   queryset = Book.objects.all()
   serializer_class = BookSerializer  
class PostViewSet(viewsets.ModelViewSet):
   queryset = Post.objects.all()
   serializer_class = PostSerializer 

   def perfrom_create(self, serializer):
      serializer.save(poster=self.request.user) 
class CommentViewSet(viewsets.ModelViewSet):
   queryset = Comment.objects.all()
   serializer_class = CommentSerializer  

   def perfrom_create(self, serializer):
      serializer.save(commenter=self.request.user) 
class SocialGroupViewSet(viewsets.ModelViewSet):
   queryset = SocialGroup.objects.all()
   serializer_class = SocialGroupSerializer  
class FriendViewSet(viewsets.ModelViewSet):
   queryset = Friend.objects.all()
   serializer_class = FriendSerializer  

   def perfrom_create(self, serializer):
      serializer.save(from_user=self.request.user) 