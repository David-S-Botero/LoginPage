from datetime import date

from pydantic.v1 import BaseModel


class UserCreate(BaseModel):
    nombre: str
    apellido: str
    numero_documento: int
    celular: int
    fecha_nacimiento: date
    correo: str
    clave: str
    id_rol: int


class UserLogin(BaseModel):
    correo: str
    clave: str
