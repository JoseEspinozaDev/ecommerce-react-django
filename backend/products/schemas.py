from ninja import ModelSchema
from .models import Products

class ProductSchema(ModelSchema):
    class Meta:
        model = Products
        fields = ['id','name','description','price','created_at']
 
 
class ProductInSchema(ModelSchema):
    class Meta:
        model = Products
        fields = ['name','description','price','created_at'] 
 
