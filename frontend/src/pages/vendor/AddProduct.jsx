import { useState } from "react";
import { createProduct } from "../../api/productApi";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct(product);

      alert("Product Added Successfully");

    } catch (error) {
      alert("Failed To Add Product");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="category_id"
          placeholder="Category ID"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;