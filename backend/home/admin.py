from django.contrib import admin
from .models import Book,Country,Home,Reads,Test,Trial
admin.site.register(Book)
admin.site.register(Home)
admin.site.register(Trial)
admin.site.register(Country)
admin.site.register(Reads)
admin.site.register(Test)

# Register your models here.
