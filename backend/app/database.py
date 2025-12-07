from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Base
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./marketplace.db")

# SQLite специфика
connect_args = {"check_same_thread": False} if "sqlite" in DATABASE_URL else {}

engine = create_engine(DATABASE_URL, connect_args=connect_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Пересоздаём таблицы при запуске (разработка)
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
print("✅ SQLite таблицы пересозданы!")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
