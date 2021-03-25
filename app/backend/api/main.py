from typing import List, Optional, Any

from fastapi import Depends, FastAPI, HTTPException, status, Body, File, UploadFile
from sqlalchemy.orm import Session
from . import crud, models, schemas, deps, security
from .database import SessionLocal, engine
from fastapi.encoders import jsonable_encoder
import os
import shutil
from fastapi.responses import FileResponse

models.Base.metadata.create_all(bind=engine)


app = FastAPI()

##users
upload_folder = "/app/api/upload_folder"



@app.post("/uploadfile/{user_id}")
async def create_upload_file(user_id : str, db: Session = Depends(deps.get_db), file: UploadFile = File(...)):
    global upload_folder
    file_object = file.file
    upload_folder = open(os.path.join(upload_folder, file.filename), 'wb+')
    shutil.copyfileobj(file_object, upload_folder)
    upload_folder.close()
    upload_folder = "/app/api/upload_folder"
    imageUploaded = "/" + file.filename
    crud.update_user_image(db, user_id, imageUploaded)
    return {"filename": file.filename}  

@app.post("/users/", response_model=schemas.User)
async def create_user(user: schemas.UserCreate, db: Session = Depends(deps.get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@app.post("/profile/edit", response_model=schemas.User)
async def edit_profile(user: schemas.UserUpdate, db: Session = Depends(deps.get_db), current_user: models.User = Depends(deps.get_current_user)) -> Any:
    return crud.update_user(db=db, user=user, email=user.email)

@app.get("/users/", response_model=List[schemas.User])
async def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(deps.get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.get("/users/secure", response_model=schemas.User)
async def get_user_secure(
    email: str,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user)
    ) -> Any:

    db_user = crud.get_user_by_email1(db, email=email)
    if db_user != current_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.get("/users/{user_id}", response_model=schemas.User)
async def read_user(user_id: str, db: Session = Depends(deps.get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

##movies

@app.post("/users/{user_id}/movies/", response_model=schemas.Movie)
async def create_movie_for_user(
    user_id: str, movie: schemas.MovieCreate, db: Session = Depends(deps.get_db)
):
    return crud.create_user_movie(db=db, movie=movie, user_id=user_id)

@app.get("/movies/{user_id}/",response_model=List[schemas.Movie])
async def read_user_movies(user_id: str, db: Session = Depends(deps.get_db), current_user: models.User = Depends(deps.get_current_user)) -> Any:
    movies = crud.get_user_movies(db, user_id=user_id)
    return movies

@app.get("/movies/", response_model=List[schemas.Movie])
async def read_movies(db: Session = Depends(deps.get_db)):
    movies = crud.get_movies(db)
    return movies

##login

@app.post("/token", response_model=schemas.Token)
async def login_for_access_token(db : Session = Depends(deps.get_db), form_data: deps.OAuth2PasswordRequestForm = Depends()):
    user = crud.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = security.timedelta(minutes=deps.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = security.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token,"token_type": "bearer"}


@app.get("/profile", response_model=schemas.User)
async def get_profile(current_user: models.User = Depends(deps.get_current_user)) -> Any:
    @app.get("/{imageName}")
    async def get_image(imageName: str):
        return FileResponse(upload_folder + "/" + imageName)
    return current_user