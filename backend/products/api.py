from ninja import NinjaAPI
from .schemas import ProductSchema , ProductCreateSchema
from .models import Products
from django.shortcuts import get_object_or_404

app = NinjaAPI(title='Ecommerce-React')


# endopints to get all products
@app.get('/products', response=list[ProductSchema])
def list_products(request):
    productos = Products.objects.all()
    return productos


#Endpoint to create products
@app.post('/products', response=ProductSchema)
def create_product(request, data: ProductCreateSchema):
    producto = Products.objects.create(**data.dict())
    return producto


#Endopint to update products
@app.put('/products/{product_id}', response=ProductSchema)
def update_product(request, product_id: int,  data: ProductSchema):
    producto = get_object_or_404(Products, id=product_id)
    for attr , value in data.dict().itmes():
            setattr(producto,attr,value)
    producto.save()
    return {'success': True}