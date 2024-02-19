from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uuid import UUID
from App.Models.UserDTO import UserDTO
from Core.Controller import Controller
from App.Controllers.UserController import UserController
from dotenv import load_dotenv
load_dotenv()

# CORS
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["OPTIONS", "GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"]
)

user_controller = UserController()


@app.get("/")
async def health_check():
    return Controller.health_check()


@app.get("/users")
async def get_users():
    return await user_controller.get_users()


@app.get("/users/{user_id}")
async def get_user(user_id: UUID):
    return await user_controller.get_user(user_id)


@app.post("/users", status_code=201)
async def add_user(user_to_add: UserDTO):
    return await user_controller.add_user(user_to_add)


@app.put("/users/{user_id}")
async def save_user(user_id: UUID, user_to_save: UserDTO):
    return await user_controller.save_user(user_id, user_to_save)


@app.delete("/users/{user_id}", status_code=204)
async def delete_user(user_id: UUID):
    return await user_controller.remove_user(user_id)
