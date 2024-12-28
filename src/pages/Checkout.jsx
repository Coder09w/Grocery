import React, { useState } from 'react';
import { Input, Button, Radio, message, Form, Card, Typography } from 'antd';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css'; // Import CSS for styling

const { Title } = Typography;

const Checkout = () => {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [location, setLocation] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 0);
    return total + itemTotal;
  }, 0);

  const handleCheckout = () => {
    if (!location) {
      message.error('Please enter your location.');
      return;
    }

    // Simulate delivery time calculation
    const randomTime = Math.floor(Math.random() * 60) + 30; // Random time between 30 and 90 minutes
    setDeliveryTime(`Your order will be delivered in approximately ${randomTime} minutes.`);

    // Show confirmation message
    message.success('Thank you for your purchase! Proceeding to payment...');
  };

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Link to="/">
          <Button type="default" style={{ marginBottom: '20px', width: '100%' }}>
            Go to Home
          </Button>
        </Link>
        <Title level={2} style={{ textAlign: 'center' }}>Checkout</Title>
        <Card style={{ marginBottom: '20px' }}>
          <Title level={4}>Your Cart</Title>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          )}
          <Title level={4}>Total Amount: ${totalAmount.toFixed(2)}</Title>
        </Card>
        <Form layout="vertical" onFinish={handleCheckout}>
          <Form.Item label="Payment Method">
            <Radio.Group onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
              <Radio value="cash">Cash</Radio>
              <Radio value="credit">Credit Card</Radio>
              <Radio value="debit">Debit Card</Radio>
              <Radio value="easypaisa">Easypaisa</Radio>
            </Radio.Group>
          </Form.Item>
          {paymentMethod === 'credit' || paymentMethod === 'debit' ? (
            <Form.Item label="Card Number" required>
              <Input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter your card number"
              />
            </Form.Item>
          ) : null}
          <Form.Item label="Location" required>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your delivery location"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Confirm Order
          </Button>
        </Form>
        {deliveryTime && <p>{deliveryTime}</p>}
      </div>
    </div>
  );
};

export default Checkout;