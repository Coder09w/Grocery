// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email) {
      message.error('Please fill out all fields');
      return;
    }

    // Simulate saving user data (in a real app, you would send this to a server)
    localStorage.setItem('user', JSON.stringify({ name, email, id: Date.now(), preferences: ['vegetables'] }));
    message.success('Signup successful! Redirecting to login...');
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Signup</h1>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" onClick={handleSignup}>Create Account</Button>
    </div>
  );
};

export default Signup;