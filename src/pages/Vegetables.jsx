// src/pages/Vegetables.jsx
import React from 'react';
import ProductList from '../ProductList';

const Vegetables = () => {
  return (
    <div>
      <h1>Vegetables</h1>
      <ProductList category="vegetables" />
    </div>
  );
};

export default Vegetables;