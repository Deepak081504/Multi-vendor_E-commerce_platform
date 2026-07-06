from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.user import User
from app.models.vendor import Vendor
from app.models.product import Product
from app.core.dependencies import admin_required
from app.models.order import Order

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


@router.get("/users")
def get_users(
    db: Session = Depends(get_db),
    current_user=Depends(admin_required)
):
    return db.query(User).all()


@router.get("/vendors")
def get_vendors(
    db: Session = Depends(get_db),
    current_user=Depends(admin_required)
):
    return db.query(Vendor).all()


@router.get("/products")
def get_products(
    db: Session = Depends(get_db),
    current_user=Depends(admin_required)
):
    return db.query(Product).all()

@router.patch("/vendors/{vendor_id}/approve")
def approve_vendor(
    vendor_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(admin_required)
):
    vendor = db.query(Vendor).filter(
        Vendor.id == vendor_id
    ).first()

    if not vendor:
        raise HTTPException(
            status_code=404,
            detail="Vendor not found"
        )

    vendor.status = "APPROVED"

    db.commit()
    db.refresh(vendor)

    return {
        "message": "Vendor approved successfully",
        "vendor_id": vendor.id,
        "status": vendor.status
    }


@router.patch("/vendors/{vendor_id}/reject")
def reject_vendor(
    vendor_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(admin_required)
):
    vendor = db.query(Vendor).filter(
        Vendor.id == vendor_id
    ).first()

    if not vendor:
        raise HTTPException(
            status_code=404,
            detail="Vendor not found"
        )

    vendor.status = "REJECTED"

    db.commit()
    db.refresh(vendor)

    return {
        "message": "Vendor rejected successfully",
        "vendor_id": vendor.id,
        "status": vendor.status
    }

@router.get("/dashboard")
def admin_dashboard(
    db: Session = Depends(get_db)
):
    total_users = db.query(User).count()
    total_vendors = db.query(Vendor).count()
    total_products = db.query(Product).count()
    total_orders = db.query(Order).count()

    return {
        "total_users": total_users,
        "total_vendors": total_vendors,
        "total_products": total_products,
        "total_orders": total_orders
    }