import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <u1 className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </u1>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="basket-icon">
                <img src={assets.basket_icon} alt="" />
            </div>
            <button className="navbar-button">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
