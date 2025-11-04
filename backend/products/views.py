from django.shortcuts import render

# Create your views here.
def index(request):
    context = {'title': 'Ecommerce React-Django'}
    return render(request, 'index.html', context)