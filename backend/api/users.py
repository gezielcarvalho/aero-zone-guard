from typing import Optional, List
from fastapi import Path, Query, HTTPException, APIRouter
from pydantic import BaseModel

router = APIRouter()
users = []


class User(BaseModel):
    email: str
    is_active: bool
    bio: Optional[str]


@router.get("/users", response_model=List[User])
async def get_users():
    return users


@router.post("/users")
async def create_user(user: User):
    users.append(user)
    return "Success!!"


@router.get("/users/{user_id}")
async def read_user(
        user_id: int = Path(..., description="The ID of the user you want to read"),
        is_active: bool = Query(None)):
    if users[user_id].is_active != is_active:
        raise HTTPException(status_code=403, detail="User is "+("", " not ")[is_active]+" active")
    return {"user": users[user_id], "is_active": is_active}
