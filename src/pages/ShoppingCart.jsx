// src/pages/ShoppingCart.jsx
import React from 'react';
import { useCart } from '../CartContext'; // Adjusted import path
import { List, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={containerStyle}>
      <Typography.Title level={2}>Shopping Cart</Typography.Title>
      {cart.length === 0 ? (
        <Typography.Paragraph>Your cart is empty.</Typography.Paragraph>
      ) : (
        <List
          bordered
          dataSource={cart}
          renderItem={item => (
            <List.Item>
              <Typography.Text>{item.name} - Quantity: {item.quantity} - Price: ${(item.price * item.quantity).toFixed(2)}</Typography.Text>
            </List.Item>
          )}
        />
      )}
      <Typography.Title level={4}>Total Price: ${totalPrice.toFixed(2)}</Typography.Title>
      <Button type="primary" onClick={() => navigate('/')}>
        Continue Shopping
      </Button>
      {cart.length > 0 && ( // Only show the button if there are items in the cart
        <Button type="primary" onClick={() => navigate('/checkout')} style={{ marginTop: '10px' }}>
          Proceed to Checkout
        </Button>
      )}
    </div>
  );
};

// Styles for centering the content
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  maxWidth: '600px', // Set a max width for the container
  margin: '0 auto', // Center the container horizontally
};

export default ShoppingCart;