from pydantic import BaseModel

class GenderCreate(BaseModel):
    gender: str

class GenderResponse(BaseModel):
    id: int
    gender: str

    class Config:
        orm_mode = True
