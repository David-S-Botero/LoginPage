from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey, Date, BigInteger

from db import Base


class User(Base):
    __tablename__ = "usuarios"
    id = Column(BigInteger, primary_key=True, index=True)
    nombre = Column(String, index=True)
    apellido = Column(String, index=True)
    numero_documento = Column(Integer, unique=True, index=True)
    celular = Column(Integer)
    fecha_nacimiento = Column(Date)
    correo = Column(String, unique=True, index=True)
    clave = Column(String)
