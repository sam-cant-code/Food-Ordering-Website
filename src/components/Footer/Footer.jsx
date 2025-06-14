import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-logo" src={assets.logo} alt="" />
            <p> Freshly homebaked goodies at budget friendly prices!</p>
            <div className="footer-social-icons">
                <img src={assets.instagram_icon} alt="" />
                <img src={assets.youtube_icon} alt="" />
                <img src="" alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>MQ PASTRIES</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>email@gmail.com</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
