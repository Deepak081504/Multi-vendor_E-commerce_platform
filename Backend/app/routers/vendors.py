from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.product import Product
from app.models.order import Order
from app.models.vendor import Vendor
from app.schemas.vendor import VendorCreate
from app.core.dependencies import vendor_required

router = APIRouter(
    prefix="/vendors",
    tags=["Vendors"]
)


@router.post("/")
def create_vendor(
    vendor: VendorCreate,
    db: Session = Depends(get_db),
    current_user=Depends(vendor_required)
):
    new_vendor = Vendor(
        user_id=current_user["user_id"],
        shop_name=vendor.shop_name
    )

    db.add(new_vendor)
    db.commit()
    db.refresh(new_vendor)

    return new_vendor


@router.get("/")
def get_vendors(
    db: Session = Depends(get_db)
):
    return db.query(Vendor).all()

@router.get("/dashboard/{vendor_id}")
def vendor_dashboard(
    vendor_id: int,
    db: Session = Depends(get_db)
):
    vendor = db.query(Vendor).filter(
        Vendor.id == vendor_id
    ).first()

    if not vendor:
        return {
            "message": "Vendor not found"
        }

    total_products = db.query(Product).filter(
        Product.vendor_id == vendor_id
    ).count()

    total_orders = db.query(Order).filter(
        Order.vendor_id == vendor_id
    ).count()

    return {
        "vendor_id": vendor_id,
        "shop_name": vendor.shop_name,
        "total_products": total_products,
        "total_orders": total_orders
    }