from django.db import models


# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    img_products = models.URLField(null=True)
     
    
    def __str__(self):
        return self.name  
    

class Contacts(models.Model):
    name = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    mensaje = models.CharField(max_length=100)

