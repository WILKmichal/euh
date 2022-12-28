from rest_framework import serializers
from api.models import Users, Categories


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('id',
                  'name',
                  'mail',
                  'password')


class CategorieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categories
        fields = ('id_catego',
                  'name',
                  'products',
                  'url')
