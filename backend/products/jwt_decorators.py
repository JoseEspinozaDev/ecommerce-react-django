from functools import wraps
from django.http import JsonResponse
from .utilities import decode_jwt_token
from django.contrib.auth.models import User

def jwt_required(view_func):
    """
    Decorador para proteger endpoints con JWT.
    """
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        auth_header = request.headers.get("Authorization")
        if not auth_header or not auth_header.startswith("Bearer "):
            return JsonResponse({"detail": "Token missing"}, status=401)
        
        token = auth_header.split(" ")[1]
        user_id = decode_jwt_token(token)
        if not user_id:
            return JsonResponse({"detail": "Token inválido o expirado"}, status=401)
        
        try:
            request.user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({"detail": "Usuario no encontrado"}, status=401)
        
        return view_func(request, *args, **kwargs)
    
    return wrapper
