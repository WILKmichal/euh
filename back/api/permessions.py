from rest_framework import permissions
from api.utils import isLogedIn


class AuthenticatedOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        try:
            flag, user_obj = isLogedIn(request)
            request.user = None
            if flag:
                request.user = user_obj
                return True
            else:
                return False
        except Exception as e:
            return False