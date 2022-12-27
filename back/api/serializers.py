from rest_framework import serializers 
from api.models import Users
 
 
class ApiSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Users
        fields = ('id',
                  'name',
                  'mail',
                  'password')