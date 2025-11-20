from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.course_model import Course
from app.schemas.course_schema import CourseCreate, CourseResponse

router = APIRouter(prefix="/courses", tags=["Courses"])

@router.post("/", response_model=CourseResponse)
def create_course(data: CourseCreate, db: Session = Depends(get_db)):
    existing = db.query(Course).filter(Course.course_name == data.course_name).first()
    if existing:
        raise HTTPException(status_code=400, detail="Course already exists")
    
    new_course = Course(course_name=data.course_name)
    db.add(new_course)
    db.commit()
    db.refresh(new_course)
    return new_course

@router.get("/", response_model=list[CourseResponse])
def get_all_courses(db: Session = Depends(get_db)):
    return db.query(Course).all()
