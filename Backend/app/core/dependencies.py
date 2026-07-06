from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

from app.core.security import verify_token

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)


def get_current_user(
    token: str = Depends(oauth2_scheme)
):
    payload = verify_token(token)

    if not payload:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    return payload


def admin_required(
    current_user=Depends(get_current_user)
):
    if current_user["role"].lower() != "admin":
        raise HTTPException(
            status_code=403,
            detail="Admin access required"
        )

    return current_user


def vendor_required(
    current_user=Depends(get_current_user)
):
    if current_user["role"].upper() != "VENDOR":
        raise HTTPException(
            status_code=403,
            detail="Vendor access required"
        )

    return current_user


def customer_required(
    current_user=Depends(get_current_user)
):
    if current_user["role"].upper() != "CUSTOMER":
        raise HTTPException(
            status_code=403,
            detail="Customer access required"
        )

    return current_user