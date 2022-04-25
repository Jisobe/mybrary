from django.contrib import admin
from mybrary_app.models import Library, WishList, Book, Post, Comment, User, SocialGroup, Friend
from mybrary_app.models import User

admin.site.register(Library)
admin.site.register(WishList)
admin.site.register(Book)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(User)
admin.site.register(SocialGroup)
admin.site.register(Friend)