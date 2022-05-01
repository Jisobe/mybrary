# Generated by Django 4.0.4 on 2022-04-26 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mybrary_app', '0003_remove_library_public_remove_wishlist_public_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='library',
            field=models.ManyToManyField(blank=True, related_name='book', to='mybrary_app.library'),
        ),
        migrations.AlterField(
            model_name='book',
            name='wishList',
            field=models.ManyToManyField(blank=True, related_name='book', to='mybrary_app.wishlist'),
        ),
    ]
