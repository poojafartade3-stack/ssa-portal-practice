from sqlalchemy import Column, Integer, String
from app.db.base import Base

class Gender(Base):
    __tablename__ = "genders"

    id = Column(Integer, primary_key=True, index=True)
    gender = Column(String(50), unique=True, nullable=False)
