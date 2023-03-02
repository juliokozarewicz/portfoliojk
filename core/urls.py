from django.urls import path
from .views import base, home


app_name = 'core'

urlpatterns = [
    path('', base, name='base'),
    path('home', home, name='home'),
]