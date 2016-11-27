# Задача-2: Дана дата в формате dd.mm.yyyy, например: 02.11.2013.
# Ваша задача вывести дату в текстовом виде, например: второе ноября 2013 года.
# Склонением пренебречь (2000 года, 2010 года)

date1 = '01.01.2000'

day_wording = {'01': 'первое','02': 'второе','03': 'третье','04': 'четвертое','05': 'пятое','06': 'шестое','07': 'седьмое','08': 'восьмое','09': 'девятое','10': 'десятое','11': 'одиннадцатое','12': 'двенадцатое','13': 'тринадцатое','14': 'четырнадцатое','15': 'пятнадцатое','16': 'шестнадцатое','17': 'семнадцатое','18': 'восемнадцатое'}

#day_wording = {'01': 'первое','02': 'второе','03': 'третье','04': 'четвертое','05': 'пятое','06': 'шестое','07': 'седьмое','08': 'восьмое','09': 'девятое','10': 'десятое','11': 'одиннадцатое','12': 'двенадцатое','13': 'тринадцатое','14': 'четырнадцатое','15': 'пятнадцатое','16': 'шестнадцатое','17': 'семнадцатое','18': 'восемнадцатое','19': 'девятнадцатое','20': 'двадцатое','21': 'двадцать первое','22': 'двадцать первое','23': 'двадцать первое','24': 'двадцать первое','25': 'двадцать первое','26': 'двадцать первое','27': 'двадцать первое','28': 'двадцать первое','29': 'двадцать первое','30': 'тридцатое','31': 'тридцать первое'}

month_wording = {'01': 'января','02': 'февраля','03': 'марта','04': 'апреля','05': 'мая','06': 'июня','07': 'июля','08': 'августа','09': 'сентября','10': 'октября','11': 'ноября','12': 'декабря'}

date1 = date1.split('.')
day = date1[0]
month = date1[1]
print('{0} {1} {2}'.format(day_wording[day], month_wording[month], date1[2]), 'года')