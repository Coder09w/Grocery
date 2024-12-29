// src/App.jsx
import React, { useState } from 'react';
import { Layout, Drawer, Button, Typography, Input } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
            <Title level={2} style={titleTextStyle}>GROCERYFY</Title>
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
          title={<span style={drawerTitleStyle}>Categories</span>}
          placement="left"
          closable={true}
          onClose={closeDrawer}
          visible={visible}
          bodyStyle={drawerBodyStyle}
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

        <Footer style={footerStyle}>Groceryfy ©2024 Created by Your Name</Footer>
      </Layout>
    </Router>
  );
}

const headerStyle = {
  background: 'linear-gradient(90deg, #1890ff 0%, #40a9ff 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  flex: 1,
};

const titleTextStyle = {
  color: 'white',
  margin: 0,
  fontSize: '28px',
  fontWeight: 'bold',
};

const searchContainerStyle = {
  flex: 2,
  display: 'flex',
  justifyContent: 'center', // Center the search bar horizontally
};

const searchInputStyle = {
  width: '100%',
  maxWidth: '400px',
  borderRadius: '8px',
  padding: '5px 10px',
};

const menuButtonStyle = {
  marginLeft: 'auto',
};

const drawerTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#1890ff',
};

const drawerBodyStyle = {
  padding: '0 15px',
};

const contentStyle = {
  padding: '20px',
  backgroundColor: '#f5f5f5',
};

const footerStyle = {
  textAlign: 'center',
  padding: '10px 20px',
  backgroundColor: '#001529',
  color: 'white',
  fontSize: '14px',
};

export default App;
