import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !price || !description) {
      message.error('Please fill out all fields');
      return;
    }

    const newProduct = {
      id: Date.now(), // Generate unique ID
      name,
      price: parseFloat(price),
      description,
      image: 'https://via.placeholder.com/150',
      category: 'others', // Default category for new products
    };

    // Add the new product to the product list (simulated)
    message.success('Product created successfully');
    navigate('/');
  };

  return (
    <div>
      <h1>Create a New Product</h1>
      <Input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginBottom: '10px' }}
        type="number"
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" onClick={handleSubmit}>Create Product</Button>
    </div>
  );
};

export default CreateProduct;
