import re
import jwt
import json
import datetime
import requests
from api.utils import pwd_context
from rest_framework import status
from django.contrib.auth.models import User
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from django.shortcuts import HttpResponse, render
from api.permessions import AuthenticatedOnly
from api.models import Users, Categories, Products
from rest_framework.decorators import permission_classes
from api.serializers import UserSerializer, CategorieSerializer, ProductSerializer
from rest_framework import permissions



def getProductsByCode(code):
    r = requests.get(
        f'https://world.openfoodfacts.org/api/v2/product/{code}&fields=code,_keywords,brands,categories_tags,countries,name_fr,image_url,stores,ingredients_text,compared_to_category').json()
    return r


def getProductsByCategorie(categorie):
    FinalArray = []
    page = 1
    pagecount = 1
    while page <= pagecount:
        print(page)
        r = requests.get(
            f'https://world.openfoodfacts.org/?json=true&categories_tags={categorie}&page={page}&fields=code,_keywords,brands,categories_tags,countries,name_fr,image_url,stores,ingredients_text').json()
        FinalArray.append(r['products'])
        pagecount = r['page_count']
        page = page + 1
    return FinalArray


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AuthenticatedOnly])
def products_by_categorie(request, pk):
    if request.method == 'GET':
        result = getProductsByCategorie(pk)
        return JsonResponse(result, status=status.HTTP_201_CREATED, safe=False)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AuthenticatedOnly])
def products_by_code(request, pk):
    if request.method == 'GET':
        result = getProductsByCode(pk)
        result['success'] = True
        return JsonResponse(result, status=status.HTTP_201_CREATED, safe=False)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AuthenticatedOnly])
def user_detail(request, pk):
    user = Users.objects.get(pk=pk)
    if request.method == 'GET':
        api_serializer = UserSerializer(user)
        return JsonResponse(api_serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AuthenticatedOnly])
def categories_list(request):
    if request.method == 'GET':
        categories = Categories.objects.all()
        title = request.GET.get('mail', None)
        if title is not None:
            categories = categories.filter(title__icontains=title)
        api_serializer = CategorieSerializer(categories, many=True)
        return JsonResponse(api_serializer.data, safe=False)


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
            user_data = JSONParser().parse(request)
            try:
                user = Users.objects.get(mail=user_data['mail'])
                response_data = {}
                response_data['success'] = False
                response_data['message'] = 'user already exists you fool'
                return JsonResponse(response_data, status=status.HTTP_400_BAD_REQUEST)
            except Users.DoesNotExist:
                user_data['password'] = pwd_context.hash(
                    user_data["password"])
                api_serializer = UserSerializer(data=user_data)
                if api_serializer.is_valid():
                    data = api_serializer.validated_data
                    mail = data['mail']
                    if not is_valid_email(mail):
                        response_data = {}
                        response_data['success'] = False
                        response_data['message'] = "bad mail"
                        return JsonResponse(response_data, status=status.HTTP_400_BAD_REQUEST)
                    api_serializer.save()
                    print(api_serializer.data['id'])
                    token = jwt.encode({'id': api_serializer.data['id'],
                                        'exp': datetime.datetime.now() + datetime.timedelta(
                        days=1)},
                        'naruto4life', algorithm='HS256').decode('utf-8')
                    response_data = api_serializer.data
                    response_data['token'] = token
                    response_data['success'] = True
                    response_data['message'] = 'compte crée'
                    return JsonResponse(response_data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([AuthenticatedOnly])
def users_list(request):
        if request.method == 'GET':
            users = Users.objects.all()
            title = request.GET.get('mail', None)
            if title is not None:
                users = users.filter(title__icontains=title)

            api_serializer = UserSerializer(users, many=True)
            return JsonResponse(api_serializer.data, safe=False)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        user_data = JSONParser().parse(request)
        try:
            user = Users.objects.get(mail=user_data['mail'])
            api_serializer = UserSerializer(user)
            password = api_serializer.data['password']
            if pwd_context.verify(user_data["password"], password):
                token = jwt.encode({'id': api_serializer.data['id'],
                                    'exp': datetime.datetime.now() + datetime.timedelta(
                    days=1)},
                    'naruto4life', algorithm='HS256').decode('utf-8')
                response_data = {}
                response_data['token'] = token
                response_data['success'] = True
                response_data['message'] = 'connectez avec success'
                return JsonResponse(response_data, status=status.HTTP_201_CREATED)
            else:
                response_data = {}
                response_data['success'] = False
                response_data['message'] = 'mauvais mot de passe'
                return JsonResponse(response_data, status=status.HTTP_400_BAD_REQUEST)
        except Users.DoesNotExist:
            response_data = {}
        response_data['success'] = False
        response_data['message'] = 'user does not exist'
        return JsonResponse(response_data, status=status.HTTP_400_BAD_REQUEST)


def is_valid_email(email):
    regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if re.match(regex, email):
        return True
    else:
        return False


@api_view(['POST'])
@permission_classes([AuthenticatedOnly])
def createProduct(request):
    if request.method == 'POST':
        product_data = JSONParser().parse(request)
        api_serializer = ProductSerializer(data=product_data)
        if api_serializer.is_valid():
            api_serializer.save()
            response_data = api_serializer.data
            response_data['success'] = True
            return JsonResponse(response_data, status=status.HTTP_201_CREATED)
        response_data = {}
        response_data['success'] = False
        response_data['message'] = api_serializer.errors
        return JsonResponse(response_data, status=status.HTTP_400_BAD_REQUEST)
