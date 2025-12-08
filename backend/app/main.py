from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from .database import get_db
from .models import User, Product
from .schemas import UserCreate, UserResponse, ProductCreate, ProductResponse
from fastapi.security import HTTPBearer
from .auth import create_access_token

app = FastAPI(title="Marketplace API")

@app.get("/")
def read_root():
    return {"message": "Backend готов"}

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    db.query(User).filter(User.email == "test@example.com").delete()
    db.commit()
    user = User(email="test@example.com", password_hash="pass123", role="seller")
    db.add(user)
    db.commit()
    db.refresh(user)
    return UserResponse(**user.__dict__)

@app.post("/auth/register", response_model=UserResponse)
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user_data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email уже зарегистрирован")
    user = User(email=user_data.email, password_hash=user_data.password, role="buyer")
    db.add(user)
    db.commit()
    db.refresh(user)
    return UserResponse(**user.__dict__)

@app.post("/auth/login")  # ← ЭТОТ ЭНДПОИНТ!
def login(user_data: UserCreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == user_data.email).first()
    if not user or user.password_hash != user_data.password:
        raise HTTPException(status_code=401, detail="Неверный email или пароль")
    token = create_access_token(data={"sub": user.email, "role": user.role})
    return {"access_token": token, "token_type": "bearer", "role": user.role}

@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    return UserResponse(**user.__dict__)

@app.get("/products/", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db), skip: int = 0, limit: int = 10):
    products = db.query(Product).offset(skip).limit(limit).all()
    return [ProductResponse(**p.__dict__) for p in products]

@app.post("/products/", response_model=ProductResponse)
def create_product(product_data: ProductCreate, db: Session = Depends(get_db)):
    product = Product(**product_data.dict(), seller_id=1)
    db.add(product)
    db.commit()
    db.refresh(product)
    return ProductResponse(**product.__dict__)

@app.get("/products/{product_id}", response_model=ProductResponse)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Товар не найден")
    return ProductResponse(**product.__dict__)
