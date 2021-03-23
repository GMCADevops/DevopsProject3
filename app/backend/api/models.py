from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, BLOB
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean(), default=True)
    first_name = Column(String)
    last_name = Column(String)
    gender = Column(String)
    created_at = Column(String)
    is_active_email = Column(Boolean(), default=False)
    userType = Column(String, default="free")
    userImage = Column(String)


    movies = relationship("Movie", back_populates="owner")


class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    rating = Column(Integer)
    genre = Column(String)
    release = Column(Integer)
    movie_created_at = Column(String)
    owner_id = Column(String, ForeignKey("users.id"))
    movieImage = Column(String)

    owner = relationship("User", back_populates="movies")