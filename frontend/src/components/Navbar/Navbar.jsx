import React, { useState, useContext, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const location = useLocation();
  const { getTotalCartItems } = useContext(StoreContext);

  // Scroll to section smoothly
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home and let browser scroll to anchor
      window.location.href = `/#${sectionId}`;
    } else {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  };

  // Handle menu click
  const handleMenuClick = (menuItem, sectionId = null) => {
    setMenu(menuItem);
    if (sectionId) scrollToSection(sectionId);
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={() => setMenu('home')}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <li
          onClick={() => handleMenuClick('home', 'header')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </li>
        <li
          onClick={() => handleMenuClick('menu', 'explore-menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          Menu
        </li>
        <li
          onClick={() => handleMenuClick('contact', 'footer')}
          className={menu === 'contact' ? 'active' : ''}
        >
          Contact
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="bag-icon">
          <Link to="/cart">
            <img src={assets.bag_icon} alt="Cart" />
          </Link>
          {getTotalCartItems() > 0 && (
            <div className="bag-dot">{getTotalCartItems()}</div>
          )}
        </div>
        <button onClick={() => setShowLogin(true)} className="navbar-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
