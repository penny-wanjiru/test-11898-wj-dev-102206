from django.conf import settings
from django.db import models
class Book(models.Model):
    'Generated Model'
    trial = models.CharField(max_length=255,)
    def trial(self):
        print("hello");
