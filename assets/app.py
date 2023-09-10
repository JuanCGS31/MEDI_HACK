from fastapi import FastAPI
from registerAPI import router as register_router
from loginAPI import router as login_router
from catAPI import router as cat_router

app = FastAPI()

app.include_router(register_router, prefix='/register')
app.include_router(login_router, prefix="/login")
app.include_router(cat_router, prefix="/cat")