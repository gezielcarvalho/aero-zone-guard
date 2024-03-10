from typing import Optional, List
from fastapi import Path, Query, HTTPException, APIRouter, Depends

from api.utils.users import get_user, get_users, get_user_by_email, create_user, delete_user, edit_user
from db.db_setup import get_db
from pydantic_schemas.user import User, UserCreate, UserBase
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/users", response_model=List[User])
async def read_users(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    users = get_users(db, skip=skip, limit=limit)
    return users


@router.post("/users", response_model=User, tags=["users"], status_code=201)
async def add_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = get_user_by_email(db=db, email=user.email)
    if existing_user:
        raise HTTPException(409, detail="Email already registered")
    return create_user(db=db, user=user)


@router.get("/users/{user_id}", response_model=User)
async def read_user(user_id: int, db: Session = Depends(get_db)):
    user = get_user(db, user_id=user_id)
    if user is None:
        raise HTTPException(404, detail="User not found")
    return get_user(db=db, user_id=user_id)


@router.delete("/users/{user_id}", tags=["users"], status_code=204)
async def remove_user(user_id: int, db: Session = Depends(get_db)):
    user = get_user(db, user_id=user_id)
    if user is None:
        raise HTTPException(404, detail="User not found")
    delete_user(db=db, user_id=user_id)


@router.patch("/users/{user_id}", tags=["users"], response_model=User, status_code=200)
async def update_user(user_id: int, user_data: list, db: Session = Depends(get_db)):
    user = get_user(db, user_id=user_id)
    if user is None:
        raise HTTPException(400, detail="User not found")
    return edit_user(db=db, user_id=user_id, user_data=user_data.dict())


