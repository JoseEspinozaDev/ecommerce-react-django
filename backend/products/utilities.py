import jwt
from datetime import datetime, timedelta
from django.conf import settings


SECRET_KEY = settings.SECRET_KEY
JWT_ALGORITHM = settings.JWT_ALGORITHM
def create_jwt_token(user_id: int):
    payload ={
        'user_id': user_id,
        'exp': datetime.now() + timedelta(seconds=settings.JWT_EXP_DELTA_SECONDS),
        'iat': datetime.now()
    }
    
    token= jwt.encode(payload,SECRET_KEY, JWT_ALGORITHM)
    return token

def decode_jwt_token(token: str):
    try:
        payload = jwt.decode(token,SECRET_KEY, algorithms=[JWT_ALGORITHM])
        return payload.get('user_id')
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None
        