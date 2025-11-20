from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.class_model import Class
from app.schemas.class_schema import ClassCreate, ClassResponse

router = APIRouter(prefix="/classes", tags=["Classes"])

@router.post("/", response_model=ClassResponse)
def create_class(data: ClassCreate, db: Session = Depends(get_db)):
    existing = db.query(Class).filter(Class.class_name == data.class_name).first()
    if existing:
        raise HTTPException(status_code=400, detail="Class already exists")
    
    new_class = Class(class_name=data.class_name)
    db.add(new_class)
    db.commit()
    db.refresh(new_class)
    return new_class

@router.get("/", response_model=list[ClassResponse])
def get_all_classes(db: Session = Depends(get_db)):
    return db.query(Class).all()
