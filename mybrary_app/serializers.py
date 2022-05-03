from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import Library, Book, Post, Comment, WishList, User, SocialGroup, Friend

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'password', 'library', 'wishList', 'post', 'comment', 'social_group', 'request_from', 'request_to', 'book', 'friends')

    library = serializers.CharField(default=None, source='library.name', allow_null=True, read_only=True)
    wishList = serializers.PrimaryKeyRelatedField(default=None, source='wishList.name', allow_null=True, read_only=True)
    password = serializers.CharField(write_only=True)
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

class LibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Library
        fields = Library.get_field_names()

class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = WishList.get_field_names()

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = Book.get_field_names()

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = Post.get_field_names()

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = Comment.get_field_names()

class SocialGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialGroup
        fields = SocialGroup.get_field_names()

class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = Friend.get_field_names()

