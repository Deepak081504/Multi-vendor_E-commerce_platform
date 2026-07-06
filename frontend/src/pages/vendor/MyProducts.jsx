import { useEffect, useState } from "react";

import axiosInstance from "../../services/axiosInstance";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

function MyProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    try {
      const response = await axiosInstance.get(
        "/products/vendor/my-products"
      );

      setProducts(response.data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>My Products</h2>

      {products.length === 0 ? (
        <p>No Products Available</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      )}
    </div>
  );
}

export default MyProducts;