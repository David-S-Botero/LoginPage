from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey, Date, BigInteger

from db import Base


class User(Base):
    __tablename__ = "USUARIOS"
    id = Column(BigInteger, primary_key=True, index=True)
    nombre = Column(String(255), index=True)
    apellido = Column(String(255), index=True)
    numero_documento = Column(String(20), unique=True, index=True)
    celular = Column(String(10))
    fecha_nacimiento = Column(Date)
    correo = Column(String(255), unique=True, index=True)
    clave = Column(String(255))
