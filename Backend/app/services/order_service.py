from sqlalchemy.orm import Session

from app.models.order import Order


def create_order(
    db: Session,
    customer_id: int,
    total_amount: float = 0
):
    order = Order(
        customer_id=customer_id,
        total_amount=total_amount,
        status="PENDING"
    )

    db.add(order)
    db.commit()
    db.refresh(order)

    return order


def get_orders(
    db: Session,
    customer_id: int
):
    return db.query(Order).filter(
        Order.customer_id == customer_id
    ).all()