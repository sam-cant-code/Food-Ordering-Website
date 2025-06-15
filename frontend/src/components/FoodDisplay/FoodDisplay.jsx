import React, { useContext, useState, useEffect } from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreContext'

const FoodDisplay = ({category}) => {
    const {food_list, cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    const [showBackButton, setShowBackButton] = useState(false);

    // Safety check to ensure food_list exists
    if(!food_list || !Array.isArray(food_list)) {
        return <div className='food-display'>Loading...</div>;
    }

    // Function to get display title based on category
    const getDisplayTitle = () => {
        if (category === "all") {
            return "All Pastries";
        }
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    // Function to scroll back to menu
    const scrollToMenu = () => {
        const menuSection = document.getElementById('explore-menu');
        if (menuSection) {
            const offsetTop = menuSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Check if user has scrolled near the bottom of the page
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            const isNearBottom = scrollTop + windowHeight >= documentHeight - 200;
            setShowBackButton(isNearBottom);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='food-display' id='food-display'>
            <div className="food-display-header">
                <h2>{getDisplayTitle()}</h2>
            </div>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    if(category === "all" || category === item.category) {
                        if(!item._id) {
                            console.warn(`Item at index ${index} missing _id:`, item);
                        }
                        
                        const currentCount = cartItems[item._id] || 0;
                        return(
                            <div key={item._id || index} className='food-item'>
                                <div className='food-item-img-container'>
                                    <img 
                                        className='food-item-image' 
                                        src={item.image} 
                                        alt={item.name || 'Food item'}
                                        loading="lazy"
                                    />
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
            
            <button 
                className={`back-button-scroll ${showBackButton ? 'show' : ''}`} 
                onClick={scrollToMenu}
            >
                Back to Menu
            </button>
        </div>
    )
}

export default FoodDisplay