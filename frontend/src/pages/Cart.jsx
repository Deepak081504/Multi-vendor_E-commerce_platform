import { useEffect, useState } from "react";
import { getCart } from "../api/cartApi";
import "../styles/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCartItems(response.data);
    } catch (error) {
      console.error("Cart Fetch Error:", error);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your Cart is Empty</h3>
          <p>Add products to continue shopping.</p>
        </div>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <h3>
                {item.product?.name || "Product"}
              </h3>

              <p>
                Quantity: <strong>{item.quantity}</strong>
              </p>

              <p>
                Price: ₹{item.product?.price || 0}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;