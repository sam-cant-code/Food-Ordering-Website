import React from 'react'
import { useState } from 'react';
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {

const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required/>
        </div>
        <button>{currState==="Sign Up"?"CreateAccount":"Login"}</button>
      </form>
    </div>
  )
}

export default LoginPopUp
