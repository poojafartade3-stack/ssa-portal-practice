from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.academic_session_schema import AcademicSessionCreate, AcademicSessionResponse
from app.db.database import get_db
from app.models.academic_session_model import AcademicSession

router = APIRouter(prefix="/sessions", tags=["Academic Sessions"])


@router.post("/", response_model=AcademicSessionResponse)
def create_session(session_data: AcademicSessionCreate, db: Session = Depends(get_db)):
    exists = db.query(AcademicSession).filter(AcademicSession.name == session_data.name).first()

    if exists:
        raise HTTPException(status_code=400, detail="Session already exists")

    new_session = AcademicSession(name=session_data.name)
    db.add(new_session)
    db.commit()
    db.refresh(new_session)

    return new_session


@router.get("/", response_model=list[AcademicSessionResponse])
def get_sessions(db: Session = Depends(get_db)):
    return db.query(AcademicSession).all()


@router.put("/{session_id}", response_model=AcademicSessionResponse)
def update_session(session_id: int, session_data: AcademicSessionCreate, db: Session = Depends(get_db)):
    session = db.query(AcademicSession).filter(AcademicSession.id == session_id).first()

    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    duplicate = db.query(AcademicSession).filter(
        AcademicSession.name == session_data.name,
        AcademicSession.id != session_id
    ).first()

    if duplicate:
        raise HTTPException(status_code=400, detail="Session name already exists")

    session.name = session_data.name
    db.commit()
    db.refresh(session)

    return session


@router.delete("/{session_id}")
def delete_session(session_id: int, db: Session = Depends(get_db)):
    session = db.query(AcademicSession).filter(AcademicSession.id == session_id).first()

    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    db.delete(session)
    db.commit()

    return {"message": "Session deleted successfully"}
