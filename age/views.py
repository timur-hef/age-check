from django.shortcuts import render, redirect, reverse
from django.views import View
from django.http import HttpResponse

import datetime as dt


class AgeView(View):
    def get(self, request):   
        if request.user.is_authenticated:
            return render(request, 'age/age.html')
        else:
            return redirect(reverse("login"))
