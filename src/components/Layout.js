import React from 'react';
import './Layout.css';
import Hero from './Hero.js';
import Footer from './Footer.js';
import "./Footer.css"
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="hero-container">
        {/* Include your Hero component here */}
        <Hero></Hero>
      </div>
      <div className="content">
        {children}
      </div>
      <div className="footer-container">
        {/* Include your Footer component here */}
       <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
