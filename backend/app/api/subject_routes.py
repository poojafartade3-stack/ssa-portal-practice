from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.subject_model import Subject
from app.schemas.subject_schema import SubjectCreate, SubjectResponse

router = APIRouter(prefix="/subjects", tags=["Subjects"])

@router.post("/", response_model=SubjectResponse)
def create_subject(data: SubjectCreate, db: Session = Depends(get_db)):
    existing = db.query(Subject).filter(Subject.subject_name == data.subject_name).first()
    if existing:
        raise HTTPException(status_code=400, detail="Subject already exists")
    
    new_subject = Subject(subject_name=data.subject_name)
    db.add(new_subject)
    db.commit()
    db.refresh(new_subject)
    return new_subject

@router.get("/", response_model=list[SubjectResponse])
def get_all_subjects(db: Session = Depends(get_db)):
    return db.query(Subject).all()

@router.put("/{id}", response_model=SubjectResponse)
def update_subject(id: int, data: SubjectCreate, db: Session = Depends(get_db)):
    subject = db.query(Subject).filter(Subject.id == id).first()
    if not subject:
        raise HTTPException(status_code=404, detail="Subject not found")

    # Check duplicate name
    duplicate = db.query(Subject).filter(
        Subject.subject_name == data.subject_name,
        Subject.id != id
    ).first()
    if duplicate:
        raise HTTPException(status_code=400, detail="Subject already exists")

    subject.subject_name = data.subject_name
    db.commit()
    db.refresh(subject)
    return subject


@router.delete("/{id}")
def delete_subject(id: int, db: Session = Depends(get_db)):
    subject = db.query(Subject).filter(Subject.id == id).first()
    if not subject:
        raise HTTPException(status_code=404, detail="Subject not found")

    db.delete(subject)
    db.commit()
    return {"message": "Subject deleted successfully"}
