class Bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


# print(
#             f"{Bcolors.BOLD}{Bcolors.WARNING}{current_year}   [{'-'*50}]   {current_year + 1}{Bcolors.ENDC}",
#             f"{age + past_from_bd}",
#             end='\r'
#         )

    # current_year = dt.date.today().year

    # prev_new_year = dt.datetime(current_year, 1, 1)
    # new_year = dt.datetime(current_year + 1, 1, 1)

    # birthday = dt.datetime(1996, 3, 20)
    # prev_birthday = dt.datetime(current_year - 1, 3, 20)
    # next_birthday = dt.datetime(current_year, 3, 20)

    # while True:
    #     now = dt.datetime.now()
    #     age = now.year - birthday.year - ((now.month, now.day) < (birthday.month, birthday.day))
    #     past_from_bd = (now - prev_birthday).total_seconds()/(next_birthday - prev_birthday).total_seconds()
    #     past_from_ny = now - prev_new_year