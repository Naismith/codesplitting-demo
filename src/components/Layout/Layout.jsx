import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => (
  <div className="layout">
    <Nav />
    {children}
  </div>
);

export default Layout;
