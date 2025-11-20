from fastapi import APIRouter, Depends, HTTPException, status, Form
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.user_model import User
from app.schemas.user_schema import UserCreate, UserResponse
from app.core.security import hash_password, verify_password, create_access_token

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/signup", response_model=UserResponse)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.username == user.username).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already taken")

    hashed_pwd = hash_password(user.password)
    new_user = User(username=user.username, email=user.email, password=hashed_pwd, role=user.role)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post("/login")
def login(username: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_access_token({"sub": user.username, "role": user.role})

    return {
        "access_token": token,
        "token_type": "bearer",
        "role": user.role,
        "username": user.username
    }
