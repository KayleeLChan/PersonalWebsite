import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
  return (
    <div data-bs-theme="custom" className="page">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
