import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data=>({...data, [name]:value}))
  }

  const isSignUp = currentState === "Sign Up";
  const isLogin = currentState === "Login";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Form submitted:', formData);
  };

  const toggleState = () => {
    setCurrentState(isSignUp ? "Login" : "Sign Up");
    // Clear form when switching
    setFormData({ name: '', email: '', password: '' });
  };

  const closePopup = () => {
    setShowLogin(false);
  };

  return (
    <div className="login-popup">
      <div className="login-popup__overlay" onClick={closePopup} />
      
      <form className="login-popup__container" onSubmit={handleSubmit}>
        <header className="login-popup__header">
          <h2 className="login-popup__title">{currentState}</h2>
          <button 
            type="button" 
            className="login-popup__close-btn"
            onClick={closePopup}
            aria-label="Close popup"
          >
            <img src={assets.cross_icon} alt="Close" />
          </button>
        </header>

        <div className="login-popup__inputs">
          {isSignUp && (
            <input
              type="text"
              name="name"
              className="login-popup__input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          )}
          
          <input
            type="email"
            name="email"
            className="login-popup__input"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
          <input
            type="password"
            name="password"
            className="login-popup__input"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="login-popup__submit-btn">
          {isSignUp ? "Create Account" : "Login"}
        </button>

        <p className="login-popup__toggle">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button 
            type="button" 
            className="login-popup__toggle-btn"
            onClick={toggleState}
          >
            {isSignUp ? "Login here" : "Sign up here"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPopUp;