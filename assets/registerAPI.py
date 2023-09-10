from fastapi import APIRouter
from uuid import uuid4 as uuid
from config import User
from DBconnection import mycursor, db
import bcrypt

router = APIRouter()


@router.post('')
def register_user(user: User):
    user_id = str(uuid())

    hashed = bcrypt.hashpw(user.password.encode('UTF-8'), bcrypt.gensalt(4))

    user_data = (user_id, user.username, user.email, hashed, user.age)

    mycursor.execute("INSERT INTO Users (user_id, username, email, password, age) VALUES (%s, %s, %s, %s, %s)", user_data)
    db.commit()

    return "user registered"

