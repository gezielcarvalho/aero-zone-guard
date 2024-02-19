import motor.motor_asyncio
import os


class Model:

    def __init__(self, collection_name: str = "users_collection"):
        db_url = os.environ.get('DATABASE_CONN_STRING')
        self.client = motor.motor_asyncio.AsyncIOMotorClient(
            db_url)
        # declare the database
        self.database = self.client.fastapidb
        self.collection = self.database.get_collection(collection_name)
