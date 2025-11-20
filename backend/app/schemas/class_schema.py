from pydantic import BaseModel

class ClassCreate(BaseModel):
    class_name: str

class ClassResponse(BaseModel):
    id: int
    class_name: str

    class Config:
        orm_mode = True
