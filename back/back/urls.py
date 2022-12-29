
from api import views
from django.contrib import admin
from django.urls import include, re_path, path

urlpatterns = [
    path("admin/", admin.site.urls),
]

urlpatterns = [
    re_path(r'^', include('api.urls')),
]
