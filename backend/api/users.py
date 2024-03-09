from typing import Optional, List
from fastapi import Path, Query, HTTPException, APIRouter, Depends

from api.utils.users import get_user, get_users, get_user_by_email, create_user
from db.db_setup import get_db
from pydantic_schemas.user import User, UserCreate, UserBase
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/users", response_model=List[User])
async def get_users(skip: int = 0, limit: int =100, db: Session = Depends(get_db)) -> List[User]:
    users = await get_users(db, skip=skip, limit=limit)
    return users

