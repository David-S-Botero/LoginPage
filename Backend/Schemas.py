from datetime import date

from pydantic import EmailStr, BaseModel
from typing import Optional


class UserCreate(BaseModel):
    nombre: str
    apellido: str
    numero_documento: str
    celular: str
    fecha_nacimiento: date
    correo: EmailStr
    clave: str


class UserLogin(BaseModel):
    correo: EmailStr
    clave: str
