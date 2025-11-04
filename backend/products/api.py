from ninja import NinjaAPI
from .schemas import ProductSchema, ProductCreateSchema
from .models import Products

app = NinjaAPI(title='Ecommerce React-Django',)


#endpoint to get all products
@app.get('/products', response=list[ProductSchema])
def list_products(request):
    productos = Products.objects.all()
    return productos


#Endpoint to create products
@app.post('/products', response=ProductSchema, description='Endopint to create products')
def create_product(request, data: ProductCreateSchema):
    producto = Products.objects.create(**data.dict)
    return producto 