from rest_framework import serializers
from api.models import Users, Categories, Products
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id',
                  'username',
                  'email',
                  'password')


class CategorieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categories
        fields = ('id_catego',
                  'name',
                  'products',
                  'url')


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        fields = ('code',
                  'brands',
                  'keywords',
                  'categories_tags',
                  'countries',
                  'image_url',
                  'ingredients_text',
                  'user_id',
                  'sub_code'
                  )
