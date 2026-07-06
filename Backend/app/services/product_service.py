from sqlalchemy.orm import Session
from app.models.product import Product


def create_product(
    db: Session,
    vendor_id: int,
    product_data
):
    product = Product(
        vendor_id=vendor_id,
        category_id=product_data.category_id,
        name=product_data.name,
        description=product_data.description,
        price=product_data.price,
        stock=product_data.stock
    )

    db.add(product)
    db.commit()
    db.refresh(product)

    return product


def get_all_products(db: Session):
    return db.query(Product).all()


def get_product(
    db: Session,
    product_id: int
):
    return db.query(Product).filter(
        Product.id == product_id
    ).first()