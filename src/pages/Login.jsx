// src/pages/Login.jsx
import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate 
= useNavigate();

  const handleLogin = () => {
    // Simulate a login process
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ email }));
      setIsLoggedIn(true);
      message.success('Login successful!');
      navigate('/vegetables'); // Redirect to vegetables page after login
    } else {
      message.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={loginStyle}>
      <h2>Login</h2>
      <Input 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        style={inputStyle} 
      />
      <Input.Password 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        style={inputStyle} 
      />
      <Button type="primary" onClick={handleLogin} style={buttonStyle}>
        Login
      </Button>
    </div>
  );
};

const loginStyle = {
  maxWidth: '300px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#fff',
};

const inputStyle = {
  marginBottom: '10px',
};

const buttonStyle = {
  width: '100%',
};

export default Login;