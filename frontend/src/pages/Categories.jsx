import { useEffect, useState } from "react";

import { getCategories } from "../api/categoryApi";
import CategoryCard from "../components/CategoryCard";
import Loader from "../components/Loader";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();

      setCategories(response.data);

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
      <h2>Categories</h2>

      {categories.length === 0 ? (
        <p>No Categories Found</p>
      ) : (
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))
      )}
    </div>
  );
}

export default Categories;