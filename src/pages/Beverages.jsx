// src/pages/Beverages.jsx
import React from 'react';
import ProductList from '../ProductList';

const Beverages = () => {
  return (
    <div>
      <h1>Beverages</h1>
      <ProductList category="beverages" />
    </div>
  );
};

export default Beverages;