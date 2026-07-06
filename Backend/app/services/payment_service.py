from sqlalchemy.orm import Session

from app.models.payment import Payment


def create_payment(
    db: Session,
    order_id: int,
    amount: float
):
    payment = Payment(
        order_id=order_id,
        amount=amount,
        payment_status="SUCCESS"
    )

    db.add(payment)
    db.commit()
    db.refresh(payment)

    return payment


def get_payment(
    db: Session,
    payment_id: int
):
    return db.query(Payment).filter(
        Payment.id == payment_id
    ).first()