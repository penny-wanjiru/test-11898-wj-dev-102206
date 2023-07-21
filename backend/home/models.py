from django.conf import settings
from django.db import models
class Book(models.Model):
    'Generated Model'
    trial = models.CharField(max_length=255,)
    def trial(self):
        print('hello')
class Home(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    def full_name(self):
        print('nam')
class Trial(models.Model):
    'Generated Model'
    fasf = models.BigIntegerField()
    faefa = models.BigIntegerField()
    geg = models.BigIntegerField()
    hrthrhg = models.BigIntegerField()
    hrth = models.BigIntegerField()
    hrh = models.BigIntegerField()
    rhrhjt = models.BigIntegerField()
    hree = models.BigIntegerField()
    rgee = models.BigIntegerField()
    jtyj = models.BigIntegerField()
    def last_name(self):
        print('hello wrld')
class Country(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
class Reads(models.Model):
    'Generated Model'
    pub_date = models.DateField()
    front_page = models.ImageField(upload_to="Reads/front_page/images/",)
