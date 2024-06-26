from sqlalchemy.orm import Session

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from Schemas import UserCreate, UserLogin
from db import get_db, get_password_hash, verify_password, db_dependency
from models import User

app = FastAPI()


@app.post("/signup/", response_model=None)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.correo == user.correo).first()
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
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"message": "User registered successfully"}


@app.post("/login/", response_model=None)
def login_user(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.correo == user.correo).first()
    if not db_user or not verify_password(user.clave, db_user.clave):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"message": "Login successful", "user_id": db_user.id}


origins = [
    "http://localhost",
    "http://localhost:81",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)