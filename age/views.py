from django.shortcuts import render
from django.views import View
from django.http import HttpResponse

import datetime as dt


class AgeView(View):
    def get(self, request):   
        return render(request, 'age/age.html')
