from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def home(response):
    return render(response, "main/home.html", {})

def spt(response):
    return render(response, "main/spt.html", {})
