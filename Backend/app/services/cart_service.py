from sqlalchemy.orm import Session
from app.models.cart import CartItem


def add_to_cart(
    db: Session,
    user_id: int,
    product_id: int,
    quantity: int
):
    item = CartItem(
        user_id=user_id,
        product_id=product_id,
        quantity=quantity
    )

    db.add(item)
    db.commit()
    db.refresh(item)

    return item


def get_cart_items(
    db: Session,
    user_id: int
):
    return db.query(CartItem).filter(
        CartItem.user_id == user_id
    ).all()