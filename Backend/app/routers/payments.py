from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.payment import Payment
from app.schemas.payment import PaymentCreate

router = APIRouter(
    prefix="/payments",
    tags=["Payments"]
)


@router.post("/")
def make_payment(
    payment: PaymentCreate,
    db: Session = Depends(get_db)
):
    new_payment = Payment(
        order_id=payment.order_id,
        amount=payment.amount,
        payment_status="SUCCESS"
    )

    db.add(new_payment)
    db.commit()
    db.refresh(new_payment)

    return new_payment

@router.patch("/{payment_id}/status")
def update_payment_status(
    payment_id: int,
    status: str,
    db: Session = Depends(get_db)
):
    payment = db.query(Payment).filter(
        Payment.id == payment_id
    ).first()

    if not payment:
        raise HTTPException(
            status_code=404,
            detail="Payment not found"
        )

    payment.payment_status = status

    db.commit()
    db.refresh(payment)

    return {
        "message": "Payment status updated successfully",
        "payment_id": payment.id,
        "payment_status": payment.payment_status
    }