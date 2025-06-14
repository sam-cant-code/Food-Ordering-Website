import React from 'react'
import './Navbar.css'
import { useState } from "react";
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":"" }>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="bag-icon">
                <Link to="/cart"><img src={assets.bag_icon} alt="" /></Link>
                <div className="bag-dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className="navbar-button">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
