from pydantic import BaseModel

class VendorCreate(BaseModel):
    shop_name: str

class VendorResponse(BaseModel):
    id: int
    user_id: int
    shop_name: str
    status: str

    class Config:
        from_attributes = True