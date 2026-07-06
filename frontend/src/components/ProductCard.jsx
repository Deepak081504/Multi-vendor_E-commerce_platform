import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="custom-card product-card">
      <div className="product-image-container">
        <img 
          src={product.image || 'https://via.placeholder.com/150'} 
          alt={product.name} 
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-footer">
          <span className="price">₹{product.price}</span>
          <button 
            className="btn-primary"
            onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;