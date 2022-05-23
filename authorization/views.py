from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import PBKDF2PasswordHasher
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render, reverse, redirect
from django.views import View

from . import forms
from . import models


class LoginView(View):
    def get(self, request):   
        form = forms.LoginForm()
        return render(request, 'authorization/login.html', {'form': form})

    def post(self, request):
        form = forms.LoginForm(request.POST)

        if form.is_valid():
            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            if user:
                login(request, user)
                return redirect(reverse('age'))
            else:
                return HttpResponse(status=401)
        else:
            message = "Sike! That's the wrong form!"

        return HttpResponse(message)


class RegistrationView(View):
    def get(self, request):   
        form = forms.RegistrationForm()
        return render(request, 'authorization/registration.html', {'form': form})

    def post(self, request):
        form = forms.RegistrationForm(request.POST)

        if form.is_valid():
            user = User.objects.create_user(form.cleaned_data['username'], '', form.cleaned_data['password'])

            extend_user = models.ExtendUser(
                birthday=form.cleaned_data['birthday'],
                user=user
            )
            
            user.save()
            extend_user.save()
            message = 'You are registered!'
            return HttpResponse(message)
        else:
            return render(request, 'authorization/registration.html', {'form': form})
