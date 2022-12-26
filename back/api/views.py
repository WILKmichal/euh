from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from api.models import Users
from api.serializers import ApiSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    user = Users.objects.get(pk=pk)
    if request.method == 'GET':
        api_serializer = ApiSerializer(user)
        return JsonResponse(api_serializer.data)


@api_view(['GET', 'POST', 'DELETE'])
def users_list(request):
    if request.method == 'GET':
        users = Users.objects.all()
        title = request.GET.get('mail', None)
        if title is not None:
            users = users.filter(title__icontains=title)

        api_serializer = ApiSerializer(users, many=True)
        return JsonResponse(api_serializer.data, safe=False)
