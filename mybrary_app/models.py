from django.db import models
from django.core.validators import *

class User(models.Model):
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=25)

class Library(models.Model):
    owner = models.ForeignKey(User, related_name='library', on_delete=models.CASCADE, blank=False)
    name = models.CharField(max_length=100, blank=False)
    public = models.BooleanField(default=False)

class Loan(models.Model):
    isLoan = models.BooleanField(default=False)
    loanedToName = models.CharField(max_length=100)
    loanedToUser = models.ForeignKey(User, related_name='loan', on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(User, related_name='loan', on_delete=models.CASCADE, blank=False)

class Book(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    description = models.CharField(max_length=255)
    author = models.CharField(max_length=100)
    library = models.OneToOneField(Library, related_name='book', on_delete=models.CASCADE, blank=False)
    location = models.CharField(max_length=255)
    loaned = models.ForeignKey(Loan, related_name='book', on_delete=models.CASCADE, blank=False)
    copies = models.IntegerField
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])

class Post(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(null=True, blank=True)
    book = models.ManyToManyField(Book, related_name='post', on_delete=models.CASCADE, blank=True)
    poster = models.ForeignKey(User, related_name='post', on_delete=models.CASCADE, blank=False)

class Comment(models.Model):
    commenter = models.ForeignKey(User, related_name='comment', on_delete=models.CASCADE, blank=False)
    post = models.ForeignKey(Post, related_name='comment', on_delete=models.CASCADE, blank=False)


    
    