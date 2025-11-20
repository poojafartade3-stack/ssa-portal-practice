from pydantic import BaseModel

class AcademicSessionBase(BaseModel):
    name: str

class AcademicSessionCreate(AcademicSessionBase):
    pass

class AcademicSessionResponse(AcademicSessionBase):
    id: int

    class Config:
        orm_mode = True
