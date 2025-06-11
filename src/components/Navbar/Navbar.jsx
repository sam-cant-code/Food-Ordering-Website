import React from 'react'
import './Navbar.css'
import { useState } from "react";
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <u1 className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":"" }>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li>
        </u1>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="basket-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="basket-dot">.</div>
            </div>
            <button className="navbar-button">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
