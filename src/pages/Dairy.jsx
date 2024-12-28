// src/pages/Dairy.jsx
import React from 'react';
import ProductList from '../ProductList';

const Dairy = () => {
  return (
    <div>
      <h1>Dairy</h1>
      <ProductList category="dairy" /> {/* Change "Dairy" to "dairy" */}
    </div>
  );
};

export default Dairy;
