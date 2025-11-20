from sqlalchemy import Column, Integer, String
from app.db.base import Base

class Class(Base):
    __tablename__ = "classes"

    id = Column(Integer, primary_key=True, index=True)
    class_name = Column(String(100), unique=True, nullable=False)
