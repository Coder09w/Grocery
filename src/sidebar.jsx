// src/sidebar.jsx
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
      <Menu.Item key="1">
        <Link to="/vegetables">Vegetables </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/fruits">Fruits</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/dairy">Dairy</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/beverages">Beverages</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/all-products">All Products</Link>
      </Menu.Item>
      {/* Remove any login/logout options here */}
    </Menu>
  );
};

export default Sidebar;