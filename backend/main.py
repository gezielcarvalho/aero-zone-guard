from typing import Optional, List
from fastapi import FastAPI, Path, Query, HTTPException
from pydantic import BaseModel
from starlette.responses import RedirectResponse

app = FastAPI(
    title="Aero-Zone Guard",
    description="Analysis of construction projects impact on Aviation Safety",
    version="1.0.0",
    terms_of_service="https://gezielcarvalho.info/terms/",
    contact={"name": "Geziel Carvalho", "email": "geziel.natal@gmail.com"},
    license_info={
        "name": "MIT",
    }
)

users = []


class User(BaseModel):
    email: str
    is_active: bool
    bio: Optional[str]


@app.get("/", include_in_schema=False)
def read_root():
    return RedirectResponse(url='/docs')


@app.get("/users", response_model=List[User])
async def get_users():
    return users


@app.post("/users")
async def create_user(user: User):
    users.append(user)
    return "Success!!"


@app.get("/users/{user_id}")
async def read_user(
        user_id: int = Path(..., description="The ID of the user you want to read"),
        is_active: bool = Query(None)):
    if users[user_id].is_active != is_active:
        raise HTTPException(status_code=403, detail="User is "+("", " not ")[is_active]+" active")
    return {"user": users[user_id], "is_active": is_active}
