import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Welcome to MQ Pastries!</h2>
        <p>Order your favourite items from the menu below</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
