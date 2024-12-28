import React from 'react';
import { useCart } from './CartContext.jsx';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/checkout'); // Redirect to Checkout page
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart} style={buttonStyle}>
        Add to Cart
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#1890ff',
  color: 'white',
};

export default ProductDetail;