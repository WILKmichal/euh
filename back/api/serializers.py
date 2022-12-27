from rest_framework import serializers
from api.models import Users, Categories


class ApiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('id',
                  'name',
                  'mail',
                  'password')
        model = Categories
        fields = ('id',
                  'id_catego',
                  'name',
                  'products',
                  'url',
                  'SameAs'
                  )
