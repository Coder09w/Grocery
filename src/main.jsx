// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App is the main component
import { CartProvider } from './CartContext'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider> {/* Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);