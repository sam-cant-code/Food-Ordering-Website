import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  const scrollToFoodDisplay = () => {
    const foodDisplaySection = document.getElementById('food-display');
    if (foodDisplaySection) {
      foodDisplaySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  const handleCategoryClick = (menuName) => {
    setCategory(prev => prev === menuName ? "all" : menuName);
    // Add a small delay to ensure the category change is processed before scrolling
    setTimeout(() => {
      scrollToFoodDisplay();
    }, 100);
  }

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our variety of pastries</h1>
      <p className="explore-menu-text">Choose from our diverse pastry options</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div 
              onClick={() => handleCategoryClick(item.menu_name)} 
              key={index} 
              className="explore-menu-list-item"
            >
              <img 
                className={category === item.menu_name ? "active" : ""} 
                src={item.menu_image} 
                alt={item.menu_name} 
              />
              <p className={category === item.menu_name ? "active" : ""}>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu