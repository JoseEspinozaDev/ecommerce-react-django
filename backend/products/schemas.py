from ninja import ModelSchema, Schema
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
 

class UserSchema(Schema):
    username: str
    password: str

class TokenSchema(Schema):
    access: str
    
    
class RegisterSchema(Schema):
    username : str
    password: str
    confirm_password: str
    email: str
    
class RegisterResponse(Schema):
    success: bool
    message: str
    token: str | None = None