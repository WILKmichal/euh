from django.urls import include, re_path
from api import views

urlpatterns = [
    re_path(r'^api/users$', views.users_list),
    re_path(r'^api/register$', views.register),
    re_path(r'^api/login$', views.login),
    re_path(r'^api/categories$', views.categories_list),
    re_path(r'^api/products$', views.createProduct),
    re_path(r'^api/user/(?P<pk>[0-9]+)$', views.user_detail),
    re_path(r'^api/deleteProduct/(?P<pk>[0-9]+)$', views.delete_product),
    re_path(r'^api/product$', views.products_by_user_id),
    re_path(r'^api/productByCatego/(?P<pk>.*)$', views.products_by_categorie),
    re_path(r'^api/productByCode/(?P<pk>.*)$', views.products_by_code),
]
