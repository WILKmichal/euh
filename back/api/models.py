from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    mail = models.CharField(max_length=200,blank=False, default='')
    password = models.CharField(max_length=200,blank=False, default='')