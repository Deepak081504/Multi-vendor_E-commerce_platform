import { useEffect, useState } from "react";

import axiosInstance from "../services/axiosInstance";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import "../styles/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        "/products"
      );

      setProducts(response.data);

    } catch (error) {
      console.error(
        "Failed to fetch products",
        error
      );

    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Products</h2>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <br />
      <br />

      {filteredProducts.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      )}
    </div>
  );
}

export default Products;