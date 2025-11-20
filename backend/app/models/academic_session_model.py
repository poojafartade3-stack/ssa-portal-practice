from sqlalchemy import Column, Integer, String
from app.db.base import Base

class AcademicSession(Base):
    __tablename__ = "academic_sessions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)  # e.g. "2023-2024"
