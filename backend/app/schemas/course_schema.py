from pydantic import BaseModel

class CourseCreate(BaseModel):
    course_name: str

class CourseResponse(BaseModel):
    id: int
    course_name: str

    class Config:
        orm_mode = True
