from ninja import NinjaAPI
from .schemas import ProductSchema , ProductInSchema, ContactSchema, ContactInSchema
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
