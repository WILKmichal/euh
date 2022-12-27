from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    mail = models.CharField(max_length=200,blank=False, default='')
    password = models.CharField(max_length=200,blank=False, default='')

class Categories(models.Model):
    id_catego = models.CharField(max_length=70, blank=False, default='')
    name = models.CharField(max_length=200,blank=False, default='')
    products = models.CharField(max_length=200,blank=False, default='')
    url = models.CharField(max_length=200,blank=False, default='')
    SameAs = models.CharField(max_length=200,blank=False, default='')