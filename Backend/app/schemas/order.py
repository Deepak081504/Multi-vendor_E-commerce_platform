from pydantic import BaseModel

class OrderCreate(BaseModel):
    pass

class OrderResponse(BaseModel):
    id: int
    customer_id: int
    total_amount: float
    status: str

    class Config:
        from_attributes = True