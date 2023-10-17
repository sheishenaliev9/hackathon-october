from django.contrib import admin
from .models import *

admin.site.register(Idea)
admin.site.register(Category)
admin.site.register(Status)
admin.site.register(Profile)