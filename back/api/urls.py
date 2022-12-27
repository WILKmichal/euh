from django.urls import include, re_path
from api import views 
 
urlpatterns = [ 
    re_path(r'^api/users$', views.users_list),
    re_path(r'^api/categories$', views.categories_list),
    re_path(r'^api/user/(?P<pk>[0-9]+)$', views.user_detail),
]