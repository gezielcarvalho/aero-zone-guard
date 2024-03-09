import enum

from sqlalchemy import Column, Boolean, ForeignKey, Integer, String, Enum, Text
from sqlalchemy.orm import relationship
from ..db_setup import Base
from .mixins import TimestampMixin


class Role(enum.Enum):
    ADMIN = 1
    USER = 2
    DEVELOPER = 3
    STAFF = 4


class User(TimestampMixin, Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    role = Column(Enum(Role))
    is_active = Column(Boolean, default=True)
    profile = relationship("Profile", back_populates="owner", uselist=False)


class Profile(TimestampMixin, Base):
    __tablename__ = 'profiles'

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    bio = Column(Text, nullable=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)

    owner = relationship('User', back_populates='profiles', uselist=False)
