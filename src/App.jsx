// src/App.jsx
import React, { useState, useEffect } from 'react'; 
import { Layout, Drawer, Button, Typography, Input } from 'antd'; 
import { MenuOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './sidebar'; 
import ShoppingCart from './pages/ShoppingCart';
import ProductList from './ProductList'; // Import ProductList for displaying all products
import './App.css'; 
import Checkout from './pages/Checkout';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const showDrawer = () => setVisible(true); 
  const closeDrawer = () => setVisible(false);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header style={headerStyle}>
          <div style={titleStyle}>
            <Title level={1} style={{ color: 'white', margin: 0, fontSize: '36px' }}>GROCERYFY</Title>
          </div>
          <div style={searchContainerStyle}>
            <Input 
              placeholder="Search products..." 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
              style={searchInputStyle} 
            />
          </div>
          <Button 
            type="primary" 
            icon={<MenuOutlined />} 
            onClick={showDrawer} 
            style={menuButtonStyle} 
          />
        </Header>

        <Drawer
          title="Categories"
          placement="left"
          closable={true}
          onClose={closeDrawer}
          visible={visible}
        >
          <Sidebar />
        </Drawer>
        
        <Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<ProductList />} /> {/* Show all products */}
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/vegetables" element={<ProductList category="vegetables" />} />
            <Route path="/fruits" element={<ProductList category="fruits" />} />
            <Route path="/dairy" element={<ProductList category="dairy" />} />
            <Route path="/beverages" element={<ProductList category="beverages" />} />
            <Route path="/all-products" element={<ProductList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Groceryfy ©2024 Created by Your Name</Footer>
      </Layout>
    </Router>
  );
}

const headerStyle = {
  backgroundColor: '#1890ff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
};

const titleStyle = {
  flex: 1,
};

const searchContainerStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center', // Center the search bar horizontally
};

const searchInputStyle = {
  width: '400px', // Set a width for the search input
};

const menuButtonStyle = {
  marginLeft: 'auto',
};

const contentStyle = {
  padding: '20px',
  backgroundColor: '#f0f2f5',
};

export default App;