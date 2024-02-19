from typing import Optional
from pydantic import BaseModel
from uuid import UUID, uuid4


class UserDTO(BaseModel):
    id: Optional[UUID] = uuid4()
    fullname: str
    username: str
    email: str
    password: str
    address: str
