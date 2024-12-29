import React, { useState } from 'react';
import { Input, Button, Radio, message, Form, Card, Typography, Divider } from 'antd';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const { Title, Text } = Typography;

const Checkout = () => {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [location, setLocation] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState(''); // New state for name
  const [phone, setPhone] = useState(''); // New state for phone number

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    const itemTotal = price * quantity;
    return total + itemTotal;
  }, 0);

  const handleCheckout = () => {
    if (!location || !name || !phone) { // Check for name and phone
      message.error('Please enter your name, phone number, and location.');
      return;
    }

    // Simulate delivery time calculation
    const randomTime = Math.floor(Math.random() * 60) + 30; // Random time between 30 and 90 minutes
    setDeliveryTime(`Your order will be delivered in approximately ${randomTime} minutes.`);

    // Show confirmation message
    message.success('Thank you for your purchase! Proceeding to payment...');
  };

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Link to="/">
          <Button type="default" style={{ marginBottom: '20px', width: '100%' }}>
            Go to Home
          </Button>
        </Link>
        <Card style={{ marginBottom: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Title level={3} style={{ textAlign: 'center', color: '#1890ff' }}>Checkout</Title>
          <Divider />
          <Title level={4}>Your Cart</Title>
          {cart.length === 0 ? (
            <Text>Your cart is empty.</Text>
          ) : (
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {cart.map((item) => {
                const price = parseFloat(item.price) || 0;
                return (
                  <li key={item.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.name}</span>
                    <span>${price.toFixed(2)} x {item.quantity}</span>
                  </li>
                );
              })}
            </ul>
          )}
          <Divider />
          <Title level={4} style={{ textAlign: 'right' }}>Total: ${totalAmount.toFixed(2)}</Title>
        </Card>
        <Card style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Form layout="vertical" onFinish={handleCheckout}>
            <Form.Item label="Name" required>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </Form.Item>
            <Form.Item label="Phone Number" required>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </Form.Item>
            <Form.Item label="Payment Method">
              <Radio.Group onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
                <Radio value="cash">Cash</Radio>
                <Radio value="credit">Credit Card</Radio>
                <Radio value="debit">Debit Card</Radio>
                <Radio value="easypaisa">Easypaisa</Radio>
              </Radio.Group> 
            </Form.Item>
            <Form.Item label="Location" required>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your delivery location"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Checkout
              </Button>
            </Form.Item>
          </Form>
          {deliveryTime && <Text style={{ display: 'block', marginTop: '20px' }}>{deliveryTime}</Text>}
        </Card>
      </div>
    </div>
  );
};

export default Checkout;