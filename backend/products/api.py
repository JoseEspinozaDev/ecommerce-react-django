from ninja import NinjaAPI
from .schemas import ProductSchema
from .models import Products

app = NinjaAPI(title='Ecommerce-React')


# endopints to get all products
@app.get('/products', response=list[ProductSchema}])
def list_products(request):
    productos = Products.objects.all()
    return productos