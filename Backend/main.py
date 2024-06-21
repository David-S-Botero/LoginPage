from sqlalchemy.orm import Session

from fastapi import FastAPI, Depends, HTTPException

from Schemas import UserCreate, UserLogin
from db import get_db, get_password_hash, verify_password, db_dependency
from models import User

app = FastAPI()


@app.post("/register/")
def register_user(user: UserCreate, db: db_dependency):
    db_user = db.query(User).filter(User.nombre == user.correo).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = get_password_hash(user.clave)
    db_user = User(
        nombre=user.nombre,
        apellido=user.apellido,
        numero_documento=user.numero_documento,
        celular=user.celular,
        fecha_nacimiento=user.fecha_nacimiento,
        correo=user.correo,
        clave=hashed_password,
        id_rol=user.id_rol,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"message": "User registered successfully"}


@app.post("/login/")
def login_user(user: UserLogin, db: db_dependency):
    db_user = db.query(User).filter(User.correo == user.correo).first()
    if not db_user or not verify_password(user.clave, db_user.clave):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"message": "Login successful", "user_id": db_user.id}
