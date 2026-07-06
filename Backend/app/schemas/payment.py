from pydantic import BaseModel

class PaymentCreate(BaseModel):
    order_id: int
    amount: float

class PaymentResponse(BaseModel):
    id: int
    order_id: int
    amount: float
    payment_status: str

    class Config:
        from_attributes = True