from pydantic import BaseModel

secretTokenKey = 'mh_7467523337433945BBJJ'

DBhost = "localhost"
DBuser = "root"
DBpassword = "password"
DBname = "medihack"


class User(BaseModel):
    username: str
    email: str
    password: str
    age: str


class UserLogin(BaseModel):
    email: str
    password: str


class Cat(BaseModel):
    name: str


class Token(BaseModel):
    token: str
