import React, { useContext } from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreContext'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display" id='food-display'>
      <h2>Pastry List</h2>
      <div className="food-display-list">
        {food_list.map((item, index)=>{
            // Add this condition to filter items
            if(category === "all" || category === item.category) {
                return(
                  <div key={index} className="food-item">
                    <div className="food-item-image-container">
                      <img className="food-item-image" src={item.image} alt="" />
                    </div>
                    <div className="food-item-info">
                      <div className="food-item-name">
                        <p>{item.name}</p>
                      </div>
                      <p className="food-item-description">{item.description}</p>
                      <p className="food-item-price">₹{item.price}</p>
                    </div>
                  </div>
                )
            }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay