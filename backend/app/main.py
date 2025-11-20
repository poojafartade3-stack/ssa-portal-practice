from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import engine
from app.db.base import Base
from app.core.config import settings

# Import your models so tables get created
from app.models import user_model
from app.models.gender import Gender

# Import your routers
from app.api import auth_routes
from app.api.academic_session_routes import router as session_router
from app.api.gender_routes import router as gender_router
from app.api.class_routes import router as class_router
from app.api.course_routes import router as course_router
from app.api.subject_routes import router as subject_router

print("Loaded DATABASE_URL:", settings.DATABASE_URL)

app = FastAPI(title="Success Science Academy API")

# Create tables
Base.metadata.create_all(bind=engine)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(auth_routes.router)
app.include_router(session_router)
app.include_router(gender_router)  
app.include_router(class_router)
app.include_router(course_router)
app.include_router(subject_router)

@app.get("/")
def root():
    return {"message": "Backend connected successfully!"}
