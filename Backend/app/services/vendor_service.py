from sqlalchemy.orm import Session
from app.models.vendor import Vendor


def create_vendor(
    db: Session,
    user_id: int,
    shop_name: str
):
    vendor = Vendor(
        user_id=user_id,
        shop_name=shop_name
    )

    db.add(vendor)
    db.commit()
    db.refresh(vendor)

    return vendor


def get_all_vendors(db: Session):
    return db.query(Vendor).all()