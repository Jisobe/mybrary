from django.db import models
from django.core.validators import *
from django.contrib.auth.models import User
class FieldNamesMixin: 
    @classmethod
    def get_field_names(cls):
        return [field.name for field in cls._meta.get_fields()]
class User(User):
    friends = models.ManyToManyField(User, related_name="friends", blank=True)

    def __str__(self):
        return self.username
class Library(models.Model, FieldNamesMixin):
    owner = models.OneToOneField(User, related_name='library', on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=100, blank=False)
    # public = models.BooleanField(default=False)
class WishList(models.Model, FieldNamesMixin):
    owner = models.OneToOneField(User, related_name='wishList', on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=100, blank=False)
    # public = models.BooleanField(default=False)
class Book(models.Model, FieldNamesMixin):
    title = models.CharField(max_length=255, blank=False, null=False)
    description = models.CharField(max_length=255)
    author = models.CharField(max_length=100)
    owner = models.ForeignKey(User, related_name='book', on_delete=models.CASCADE, blank=True, null=True)
    library = models.ForeignKey(Library, related_name='book', on_delete=models.CASCADE, blank=True, null=True)
    wishList = models.ForeignKey(WishList, related_name='book', on_delete=models.CASCADE, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    isLoaned = models.BooleanField(default=False)
    copies = models.IntegerField(default=1)
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)], blank=True, null=True)
    # image = models.ImageField( blank=True, null=True, upload_to='covers')
class Post(models.Model, FieldNamesMixin):
    title = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(null=True, blank=True)
    book = models.ManyToManyField(Book, related_name='post', blank=True)
    poster = models.ForeignKey(User, related_name='post', on_delete=models.CASCADE, blank=False)
class Comment(models.Model, FieldNamesMixin):
    commenter = models.ForeignKey(User, related_name='comment', on_delete=models.CASCADE, blank=False)
    post = models.ForeignKey(Post, related_name='comment', on_delete=models.CASCADE, blank=False)
    description = models.TextField(null=True, blank=True)
class SocialGroup(models.Model, FieldNamesMixin):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    members = models.ManyToManyField(User, related_name='social_group', blank=True)
class Friend(models.Model, FieldNamesMixin):
    from_user = models.ForeignKey(User, related_name='request_from', on_delete=models.CASCADE, blank=False)
    to_user = models.ForeignKey(User, related_name='request_to', on_delete=models.CASCADE, blank=False)