from django.http import HttpResponse
import datetime
from django.http import JsonResponse


def current_datetime(request):
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    html = "<html><body>Time: %s.</body></html>" % now
    return HttpResponse(html)


def get_datetime(request):
    return JsonResponse({"datetime": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")})
