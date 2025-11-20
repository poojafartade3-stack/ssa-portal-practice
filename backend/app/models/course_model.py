from sqlalchemy import Column, Integer, String
from app.db.base import Base

class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    course_name = Column(String(100), unique=True, nullable=False)
