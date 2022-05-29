from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

import datetime as dt

from .utils import DateInput

current_date = str(dt.datetime.now().date())

class LoginForm(forms.Form):
    username = forms.CharField(
        label='Username', 
        widget=forms.TextInput(
            attrs={'class': 'form-control', 'placeholder': 'Username', 'for': 'form2Example11'}
        )
    )
    password = forms.CharField(
        label='Password', 
        widget=forms.PasswordInput(
            attrs={'class': 'form-control', 'placeholder': 'Password', 'for': 'form2Example22'}
        )
    )


class RegistrationForm(LoginForm):
    birthday = forms.DateField(
        label='Birthday', 
        widget=DateInput(
            attrs={'max': current_date}
        )
    )
    confirm_password = forms.CharField(
        label='Confirm Password', 
        widget=forms.PasswordInput(
            attrs={'class': 'form-control', 'placeholder': 'Password again', 'for': 'form2Example22'}
        )
    )

    def clean(self):
        cleaned_data = super().clean()
        password = self.cleaned_data['password']
        confirm_password = self.cleaned_data['confirm_password']
        validate_password(password)

        if password != confirm_password:
            raise ValidationError("Your passwords does not match")
        
        username = self.cleaned_data['username']
        user = User.objects.filter(username=username)
        if len(username) < 5:
            raise ValidationError("Your username is too short")
        if user:
            raise ValidationError("User with this username already exists")
