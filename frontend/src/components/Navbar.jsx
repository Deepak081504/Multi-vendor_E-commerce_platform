import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav>
      <h2>Multi Vendor E-Commerce</h2>

      <Link to="/">Home</Link>{" "}
      <Link to="/products">Products</Link>{" "}
      <Link to="/cart">Cart</Link>{" "}
      <Link to="/orders">Orders</Link>{" "}

      {!token ? (
        <>
          <Link to="/login">Login</Link>{" "}
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;