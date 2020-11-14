from django.shortcuts import render

from django.http import JsonResponse
from django.http import HttpResponse



def home(response):
    return render(response, "main/home.html", {})

def spt(response):
    return render(response, "main/spt.html", {})

def spt_data_transfer(request):
    result = request.GET.get('result', None)

    # Any process

    data = {
            # Data that need to send to javascript function
    }
    return JsonResponse(data)