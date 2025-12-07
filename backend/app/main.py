from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from .database import get_db
from .models import User

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend готов"}

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    try:
        # Очищаем старого тестового юзера
        db.query(User).filter(User.email == "test@example.com").delete()
        db.commit()
        
        # Создаём нового
        user = User(
            email="test@example.com",
            password_hash="hash123",
            role="seller"
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        
        return {
            "status": "БД работает!", 
            "user_id": user.id,
            "email": user.email,
            "role": user.role
        }
    except SQLAlchemyError as e:
        db.rollback()
        return {"error": "БД ошибка", "details": str(e)}
    except Exception as e:
        return {"error": "Общая ошибка", "details": str(e)}
