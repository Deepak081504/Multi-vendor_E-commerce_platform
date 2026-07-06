from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.order import Order
from app.core.dependencies import customer_required
from app.models.cart import CartItem

router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)


@router.post("/")
def create_order(
    db: Session = Depends(get_db),
    current_user=Depends(customer_required)
):
    order = Order(
        customer_id=current_user["user_id"],
        total_amount=0,
        status="PENDING"
    )

    db.add(order)
    db.commit()
    db.refresh(order)

    return order


@router.get("/")
def get_orders(
    db: Session = Depends(get_db),
    current_user=Depends(customer_required)
):
    return db.query(Order).filter(
        Order.customer_id == current_user["user_id"]
    ).all()

@router.post("/checkout")
def checkout(
    user_id: int,
    db: Session = Depends(get_db)
):
    cart_items = db.query(CartItem).filter(
        CartItem.user_id == user_id
    ).all()

    vendor_orders = {}

    for item in cart_items:
        vendor_id = item.product.vendor_id

        if vendor_id not in vendor_orders:
            vendor_orders[vendor_id] = []

        vendor_orders[vendor_id].append(item)

    return {
        "vendors": len(vendor_orders),
        "orders_created": list(vendor_orders.keys())
    }