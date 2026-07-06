from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.cart import CartItem
from app.schemas.cart import CartItemCreate
from app.core.dependencies import customer_required

router = APIRouter(
    prefix="/cart",
    tags=["Cart"]
)


@router.post("/")
def add_to_cart(
    item: CartItemCreate,
    db: Session = Depends(get_db),
    current_user=Depends(customer_required)
):
    cart_item = CartItem(
        user_id=current_user["user_id"],
        product_id=item.product_id,
        quantity=item.quantity
    )

    db.add(cart_item)
    db.commit()
    db.refresh(cart_item)

    return cart_item


@router.get("/")
def view_cart(
    db: Session = Depends(get_db),
    current_user=Depends(customer_required)
):
    return db.query(CartItem).filter(
        CartItem.user_id == current_user["user_id"]
    ).all()