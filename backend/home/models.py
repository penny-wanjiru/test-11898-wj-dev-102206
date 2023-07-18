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
        print("nam")
