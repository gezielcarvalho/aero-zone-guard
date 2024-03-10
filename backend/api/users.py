from typing import Optional, List
from fastapi import Path, Query, HTTPException, APIRouter, Depends

from api.utils.users import get_user, get_users, get_user_by_email, create_user
from db.db_setup import get_db
from pydantic_schemas.user import User, UserCreate, UserBase
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/users", response_model=List[User])
async def read_users(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    users = get_users(db, skip=skip, limit=limit)
    return users


@router.post("/users")
async def add_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db=db, user=user)


@router.get("/users/{user_id}", response_model=User)
async def read_user(user_id: int, db: Session = Depends(get_db)):
    return get_user(db=db, user_id=user_id)

