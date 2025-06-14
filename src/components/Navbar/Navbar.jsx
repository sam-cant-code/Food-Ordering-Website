import React from 'react'
import './Navbar.css'
import { useState, useContext } from "react";
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();
  const { getTotalCartItems } = useContext(StoreContext);

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle menu clicks
  const handleMenuClick = (menuItem, sectionId = null) => {
    setMenu(menuItem);
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className='navbar'>
        <Link to="/" onClick={() => setMenu("home")}>
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
            <li 
              onClick={() => handleMenuClick("home", "header")} 
              className={menu === "home" ? "active" : ""}
            >
              Home
            </li>
            <li 
              onClick={() => handleMenuClick("menu", "explore-menu")} 
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </li>
            <li 
              onClick={() => handleMenuClick("contact", "footer")} 
              className={menu === "contact" ? "active" : ""}
            >
              Contact
            </li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="bag-icon">
                <Link to="/cart"><img src={assets.bag_icon} alt="" /></Link>
                {getTotalCartItems() > 0 && (
                  <div className="bag-dot">{getTotalCartItems()}</div>
                )}
            </div>
            <button onClick={()=>setShowLogin(true)} className="navbar-button">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar