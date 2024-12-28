import React from 'react';
import { Card } from 'antd';
import './ProductCard.css'; // Import the CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <Card
      title={product.name}
      style={{ width: 240, margin: '16px', height: '350px' }} // Fixed height for the card
    >
      <div className="image-container"> {/* Fixed size container for the image */}
        <img alt={product.name} src={product.image} className="product-image" />
      </div>
      <div className="card-content"> {/* Flex container for content */}
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Category: {product.category}</p>
      </div>
    </Card>
  );
};

export default ProductCard;