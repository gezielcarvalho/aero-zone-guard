from uuid import UUID

from fastapi import HTTPException

from App.Models.User import User
from Core.Controller import Controller


class UserController(Controller):

    def __init__(self):
        user = User()
        super().__init__(user)

    async def get_users(self):
        users = await self.model.fetch_all_users()
        return users

    async def get_user(self, user_id: UUID):
        response = await self.model.fetch_one_user(user_id)
        if response:
            return response
        raise HTTPException(status_code=404, detail="Users not found")

    async def add_user(self, user_to_add):
        response = await self.model.create_user(user_to_add)
        if response:
            return user_to_add
        raise HTTPException(status_code=400, detail="Bad request")

    async def save_user(self, user_id, user_to_save):
        response = await self.model.fetch_one_user(user_id)
        if response:
            update_data = user_to_save.dict(exclude_unset=True)
            updated_user = await self.model.update_user(user_id, update_data)
            return updated_user
        raise HTTPException(status_code=404, detail="User not found")

    async def remove_user(self, user_id: UUID):
        response = await self.model.fetch_one_user(user_id)
        if response:
            await self.model.remove_user(user_id)
            return {"status": "OK"}
        raise HTTPException(status_code=404, detail="Users not found")
