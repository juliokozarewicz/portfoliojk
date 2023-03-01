from django.shortcuts import render
from django.http import HttpResponse


def base(request):
    template_name = 'core/base.html'
    return render(request, template_name)