from django.shortcuts import render
from django.views import View
from django.http import HttpResponse

import datetime as dt


class AgeView(View):
    def get(self, request):
        current_year = dt.date.today().year
        birthday = dt.datetime(1996, 3, 20)
        prev_birthday = dt.datetime(current_year - 1, 3, 20)
        next_birthday = dt.datetime(current_year, 3, 20)

        now = dt.datetime.now()
        age = now.year - birthday.year - ((now.month, now.day) < (birthday.month, birthday.day))
        past_from_bd = (now - prev_birthday).total_seconds()/(next_birthday - prev_birthday).total_seconds() #{age}.{str(past_from_bd)[2:]}
            
        return render(request, 'age/age.html')