from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import PBKDF2PasswordHasher
from django.contrib.auth.models import User
from django.forms.widgets import Input


class DateInput(Input):
    input_type = "date"
