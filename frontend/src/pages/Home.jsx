import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Multi Vendor E-Commerce</h1>

      <p>
        Buy and sell products from multiple vendors
      </p>

      <div className="hero-buttons">
        <Link to="/login">
          <button className="primary-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="secondary-btn">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;