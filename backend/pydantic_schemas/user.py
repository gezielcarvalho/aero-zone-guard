from datetime import datetime
from enum import Enum

from pydantic import BaseModel

from db.models.user import Role


class UserBase(BaseModel):
    email: str
    username: str
    password: str
    role: Enum(Role)


class UserCreate(UserBase):
    ...


class User(UserBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
