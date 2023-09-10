from fastapi import APIRouter
import datetime
from config import UserLogin, secretTokenKey
from DBconnection import mycursor, db
import bcrypt
import jwt

router = APIRouter()


@router.post('')
def login_user(user: UserLogin):
    mycursor.execute("SELECT password FROM Users WHERE email = %(email)s", {"email": user.email})

    values = mycursor.fetchone()
    if values is None:
        return "Incorrect Email"
    else:
        pswd = values[0].encode('UTF-8')
        if bcrypt.hashpw(user.password.encode('UTF-8'), pswd) == pswd:
            payload = {
                "sub": user.email,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=10)
            }
            token = jwt.encode(payload, secretTokenKey, algorithm='HS256')
            mycursor.reset()
            mycursor.execute("SELECT user_id FROM Users WHERE email = %(email)s", {"email": user.email})
            user = mycursor.fetchone()
            user_id = user[0]
            mycursor.reset()
            mycursor.execute("SELECT token FROM Users WHERE user_id = %(user_id)s", {"user_id": user_id})
            tokenCheck = mycursor.fetchone()
            if tokenCheck is not None:
                mycursor.reset()
                mycursor.execute("UPDATE Users SET token = %(token)s WHERE user_id = %(user_id)s",
                                 ({"token": token, "user_id": user_id}))
                db.commit()
                return token
            else:
                mycursor.execute("INSERT INTO Users (token) VALUES (%(token)s)", {"token": token})
                db.commit()
                return token
        else:
            return "incorrect password"
