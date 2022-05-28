from django.urls import path
from . import views


urlpatterns = [
    path('', views.AgeView.as_view(), name='age'),
]