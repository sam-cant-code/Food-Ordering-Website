import React, { useContext } from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreContext'

const FoodDisplay = ({category}) => {
    const {food_list, cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    // Safety check to ensure food_list exists
    if(!food_list || !Array.isArray(food_list)) {
        return <div className='food-display'>Loading...</div>;
    }

    return (
        <div className='food-display' id='food-display'>
            <h2>Pastry List</h2>
            <div className='food-display-list'>
                {food_list.map((item, index)=>{
                    // Add this condition to filter items
                    if(category === "all" || category === item.category) {
                        // Debug: Check if item has proper _id
                        if(!item._id) {
                            console.warn(`Item at index ${index} missing _id:`, item);
                        }
                        
                        const currentCount = cartItems[item._id] || 0;
                        return(
                            <div key={item._id || index} className='food-item'>
                                <div className='food-item-img-container'>
                                    <img className='food-item-image' src={item.image} alt={item.name || 'Food item'} />
                                    {
                                        currentCount === 0 ?
                                        <div className='add' onClick={() => {
                                            console.log('Adding item:', item._id, item.name);
                                            addToCart(item._id);
                                        }}>
                                            Add +
                                        </div>
                                        :
                                        <div className='food-item-counter'>
                                            <div onClick={() => {
                                                console.log('Removing item:', item._id);
                                                removeFromCart(item._id);
                                            }}>
                                                −
                                            </div>
                                            <p>{currentCount}</p>
                                            <div onClick={() => {
                                                console.log('Adding item:', item._id);
                                                addToCart(item._id);
                                            }}>
                                                +
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className='food-item-info'>
                                    <div className='food-item-name-rating'>
                                        <p>{item.name || 'Unknown Item'}</p>
                                    </div>
                                    <p className='food-item-desc'>{item.description || 'No description'}</p>
                                    <p className='food-item-price'>₹{item.price || 0}</p>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default FoodDisplay