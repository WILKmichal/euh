import jwt
from api.models import Users
from passlib.context import CryptContext
from api.serializers import UserSerializer


pwd_context = CryptContext(
    default="django_pbkdf2_sha256",
    schemes=["django_argon2", "django_bcrypt", "django_bcrypt_sha256",
             "django_pbkdf2_sha256", "django_pbkdf2_sha1",
             "django_disabled"])


def isLogedIn(request):
    token = request.META.get('HTTP_AUTHORIZATION')
    data = jwt.decode(token.split()[1], 'naruto4life')
    user_obj = None
    flag = False
    user = Users.objects.get(pk=data['id'])
    if user:
        flag = True
        api_serializer = UserSerializer(user)
        user_obj = api_serializer.data
    return flag, user_obj
