// src/pages/Fruits.jsx
import React from 'react';
import ProductList from '../ProductList';

const Fruits = () => {
  return (
    <div>
      <h1>Fruits</h1>
      <ProductList category="fruits" />
    </div>
  );
};

export default Fruits;