from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from api.models import Users
from api.serializers import UserSerializer
from rest_framework.decorators import api_view
import re
import hashlib


@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    user = Users.objects.get(pk=pk)
    if request.method == 'GET':
        api_serializer = UserSerializer(user)
        return JsonResponse(api_serializer.data)


@api_view(['GET', 'POST', 'DELETE'])
def users_list(request):
    if request.method == 'GET':
        users = Users.objects.all()
        title = request.GET.get('mail', None)
        if title is not None:
            users = users.filter(title__icontains=title)

        api_serializer = UserSerializer(users, many=True)
        return JsonResponse(api_serializer.data, safe=False)
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        api_serializer = UserSerializer(data=user_data)

        if api_serializer.is_valid():
            data = api_serializer.validated_data
            mail = data['mail']
            if  not is_valid_email(mail):
                    response_data = {}
                    response_data['success'] = False
                    response_data['message'] = "bad mail"
                    return JsonResponse(response_data, status=status.HTTP_400_BAD_REQUEST)
            hashedPassword = hash_password(data["password"])
            # api_serializer.update(api_serializer,{'password': hashedPassword})
            api_serializer.save()
            response_data = {}
            response_data['success'] = True
            response_data['message'] = 'compte crée'
            return JsonResponse(response_data, status=status.HTTP_201_CREATED)

        response_data = {}
        response_data['success'] = False
        response_data['message'] = api_serializer.errors
        return JsonResponse(response_data, status=status.HTTP_400_BAD_REQUEST)


def is_valid_email(email):
    regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if re.match(regex, email):
        return True
    else:
        return False

def hash_password(password):
    password_hash = hashlib.sha256(password.encode('utf-8')).hexdigest()
    return password_hash