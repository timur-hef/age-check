from django.contrib.auth import logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect, reverse
from django.views import View
from django.http import HttpResponse, JsonResponse

import datetime as dt


class AgeView(View):
    def get(self, request):   
        if request.user.is_authenticated:
            return render(request, 'age/age.html')
        else:
            return redirect(reverse("login"))

    def post(self, request):
        logout(request)
        return redirect(reverse("login"))


def get_user_bday(request):
    user = User.objects.filter(username=request.user.username).get()
    return JsonResponse({'birthday': str(user.extenduser.birthday)})
