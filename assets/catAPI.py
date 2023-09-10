from fastapi import APIRouter
from config import Cat
from DBconnection import mycursor, db
from uuid import uuid4 as uuid

router = APIRouter()


@router.post('')
def create_cat(cat: Cat):
    cat_id = str(uuid())

    cat_data = (cat_id, cat.name)

    mycursor.execute("INSERT INTO Cat (cat_id, name) VALUES (%s, %s)", cat_data)
    db.commit()

    return "cat named"

