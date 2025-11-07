from ninja import ModelSchema
from .models import Products, Contacts

class ProductSchema(ModelSchema):
    class Meta:
        model = Products
        fields = ['id','name','description','price','created_at','img_products']
 

class ContactSchema(ModelSchema):
     class Meta :
         model = Contacts
         fields= ['id','name','email','mensaje']

class ContactInSchema(ModelSchema):
     class Meta :
         model = Contacts
         fields= ['name','email','mensaje']

class ProductInSchema(ModelSchema):
    class Meta:
        model = Products
        fields = ['name','description','price','created_at','img_products'] 
 
