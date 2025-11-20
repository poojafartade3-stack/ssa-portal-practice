from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.gender import Gender
from app.schemas.gender_schema import GenderCreate, GenderResponse

router = APIRouter(prefix="/genders", tags=["Genders"])

@router.post("/", response_model=GenderResponse, status_code=status.HTTP_201_CREATED)
def create_gender(gender_data: GenderCreate, db: Session = Depends(get_db)):
    # Check duplicate
    existing = db.query(Gender).filter(Gender.gender == gender_data.gender).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Gender already exists"
        )

    new_gender = Gender(gender=gender_data.gender)
    db.add(new_gender)
    db.commit()
    db.refresh(new_gender)
    return new_gender

@router.get("/", response_model=list[GenderResponse])
def get_all_genders(db: Session = Depends(get_db)):
    genders = db.query(Gender).all()
    return genders

@router.get("/{gender_id}", response_model=GenderResponse)
def get_gender_by_id(gender_id: int, db: Session = Depends(get_db)):
    gender = db.query(Gender).filter(Gender.id == gender_id).first()

    if not gender:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Gender not found"
        )

    return gender
