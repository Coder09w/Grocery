import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Import useCart
import axios from 'axios'; // Import axios for making HTTP requests

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Adjust the URL if needed
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on category if provided
  const filteredProducts = category ? products.filter(product => product.category === category) : products;

  return (
    <div>
      <Row gutter={16}>
        {filteredProducts.map(product => (
          <Col span={8} key={product.id}>
            <Card
              title={product.name}
              cover={<img alt={product.name} src={product.imageUrl} />}
              actions={[
                <Button 
                  type="primary" 
                  icon={<ShoppingCartOutlined />} 
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              ]}
            >
              <p>{product.description}</p>
              <p>Price: ${(Number(product.price) || 0).toFixed(2)}</p> {/* Ensure price is a number */}
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <Badge count={cart.length} offset={[10, 0]}>
          <Button 
            type="primary" 
            icon={<ShoppingCartOutlined />} 
            onClick={() => navigate('/shopping-cart')} 
          />
        </Badge>
      </div>
    </div>
  );
};

export default ProductList;