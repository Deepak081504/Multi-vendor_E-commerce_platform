from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine

from app.routers import (
    auth,
    users,
    products,
    vendors,
    cart,
    orders,
    payments,
    admin,
    categories
)

# Create all database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Multi Vendor Ecommerce API",
    description="Multi Vendor E-Commerce Platform using FastAPI",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(products.router)
app.include_router(vendors.router)
app.include_router(cart.router)
app.include_router(orders.router)
app.include_router(payments.router)
app.include_router(admin.router)
app.include_router(categories.router)

# Root Endpoint
@app.get("/")
def root():
    return {
        "message": "API Running Successfully"
    }