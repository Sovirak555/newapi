from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return HttpResponse('Home_Page')

def products(request):
    return HttpResponse('Products_Page')

def customer(request):
    return HttpResponse('Customer_Page')
def contact(request):
    return HttpResponse('Contact_Page')
def about(request):
    return render(request, 'accounts/index.html')

