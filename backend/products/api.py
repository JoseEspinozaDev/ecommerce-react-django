from ninja import NinjaAPI
from ninja.security import HttpBearer
from django.contrib.auth. models import User
from django.contrib.auth import authenticate
from .schemas import ProductSchema , ProductInSchema, ContactInSchema , UserSchema, TokenSchema
from .utilities import create_jwt_token , decode_jwt_token
from .jwt_decorators import jwt_required

from ninja.security import HttpBearer
from .models import Products, Contacts
from django.shortcuts import get_object_or_404

app = NinjaAPI(title='Ecommerce-React')


# endopints to get all products
@app.get('/products', response=list[ProductSchema])
def list_products(request):
    productos = Products.objects.all()
    return productos

#Endpoint to get product byID
@app.get('/products/{product_id}', response=ProductSchema)
def list_products_by_id(request, product_id: int):
    productos = get_object_or_404(Products, id= product_id)
    return productos
    

#Endpoint to create products
@app.post('/products', response=ProductSchema)
def create_product(request, data: ProductInSchema):
    producto = Products.objects.create(**data.dict())
    return producto


#Endopint to update products
@app.put('/products/{product_id}', response=ProductSchema)
def update_product(request, product_id: int,  data: ProductInSchema):
    producto = get_object_or_404(Products, id=product_id)
    for attr , value in data.dict().items():
        setattr(producto,attr,value)
    producto.save()
    return producto

#Endpoint to delete products
@app.delete('/products/{product_id}', description='Endpoint to delete products')
def delete_product(request,product_id: int, data: ProductInSchema ):
    producto = get_object_or_404(Products, id=product_id)
    producto.delete() 
    return {'success': True}



## Contact API
#Register client
@app.post('/contact')
def create_client(request, data: ContactInSchema):
    client= Contacts.objects.create(**data.dict())
    return {'success': True, 'data': data.dict()}



##Autenticacion

#Registro
@app.post('/register',response=TokenSchema)
def register(request, data: UserSchema):
    if User.objects.filter(username=data.username).exists():
        return {'access': 'El usuario ya existe'}
    
    user = User.objects.create_user(username=data.username, password=data.password)
    token = create_jwt_token(user.id)
    return{'access': token}

#Login
@app.post('/login', response=TokenSchema)
def login(request, data: UserSchema):
    user = authenticate(username= data.username, password= data.password)
    if not user:
        return {'access': 'usuario o contraseña incorrecta'}
    
    token = create_jwt_token(user.id)
    return {'access': token}


# Endpoint protegido
@app.get("/protected")
@jwt_required
def protected(request):
    user = request.user
    return {"message": f"Hola {user.username}, estás autenticado!"}

# Otro endpoint protegido
@app.get("/dashboard")
@jwt_required
def dashboard(request):
    user = request.user
    return {
        "username": user.username, 
        "email": user.email,
        "msg": "Bienvenido al dashboard protegido"
    }