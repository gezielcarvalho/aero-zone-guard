import enum

from sqlalchemy import Column, Boolean, Integer, String, Enum

from ..db_setup import Base
from .mixins import TimestampMixin


class Role(enum.IntEnum):
    ADMIN = 1
    USER = 2
    DEVELOPER = 3
    STAFF = 4


class User(TimestampMixin, Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    password = Column(String())
    role = Column(Integer)
    is_active = Column(Boolean, default=True)
