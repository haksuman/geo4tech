# urls.py
from django.urls import path, re_path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("spt/", views.spt, name="spt"),

    # re_path yerine url koymayı dene normalde öyleydi
    re_path(r'^spt_data_transfer$', views.spt_data_transfer, name='spt_data_transfer'),
]
