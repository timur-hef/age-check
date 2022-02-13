from django.urls import path
from .views import AgeView


urlpatterns = [
    path('', AgeView.as_view(), name='age'),
]