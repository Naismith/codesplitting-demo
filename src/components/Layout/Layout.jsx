import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from '@reach/router';

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/northot">NorthOT</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/slow">Slow Page</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      NorthOT ©2019 Created by Chris Naismith
    </Footer>
  </Layout>
);

export default MainLayout;
