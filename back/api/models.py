from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    mail = models.CharField(max_length=200, blank=False, default='')
    password = models.CharField(max_length=200, blank=False, default='')


class Categories(models.Model):
    id_catego = models.CharField(
        max_length=70, blank=False, default='', unique=False)
    name = models.CharField(max_length=200, blank=False,
                            default='', unique=False)
    products = models.CharField(
        max_length=200, blank=False, default='', unique=False)
    url = models.CharField(max_length=200, blank=False,
                           default='', unique=False)
    SameAs = models.CharField(
        max_length=200, blank=False, default='', unique=False)


class Products(models.Model):
    code = models.CharField(
        max_length=70, blank=False, default='', unique=False)
    
    brands = models.CharField(
        max_length=70, blank=False, default='', unique=False)
        
    keywords = models.CharField(max_length=200, blank=False,
                                default='', unique=False)
    categories_tags = models.CharField(
        max_length=200, blank=False, default='', unique=False)

    countries = models.CharField(max_length=200, blank=False,
                                 default='', unique=False)
    image_url = models.CharField(
        max_length=200, blank=False, default='', unique=False)

    ingredients_text = models.CharField(
        max_length=200, blank=False, default='', unique=False)

    user_id = models.CharField(
        max_length=200, blank=False, default='', unique=False)
    
    sub_code = models.CharField(
        max_length=200, blank=False, default='', unique=False)
