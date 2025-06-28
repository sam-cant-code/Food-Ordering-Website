import React, { useContext, useEffect } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
    decreaseQuantity
  } = useContext(StoreContext);

  const navigate = useNavigate();

  // ✅ Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  if (!food_list || !Array.isArray(food_list)) {
    return <div className="loading">Loading...</div>;
  }

  const handleContinueShopping = () => {
    navigate('/');
  };

  // ✅ Check if cart is empty
  const isCartEmpty = Object.keys(cartItems).length === 0 || 
    Object.values(cartItems).every(quantity => quantity === 0);

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-items-section">
          {/* ✅ Show empty cart message if no items */}
          {isCartEmpty ? (
            <div className="empty-cart-message">
              <p>Your cart is empty</p>
              <button onClick={handleContinueShopping} className="continue-shopping-btn">
                Start Shopping
              </button>
            </div>
          ) : (
            food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index} className="cart-item-row">
                    <div className="item-content">
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      
                      <div className="item-details">
                        <div className="item-title">{item.name}</div>
                        <div className="item-subtitle">
                          {item.category || "Regular"} | {item.description || "New Hand Tossed"}
                        </div>
                        
                        <div className="item-controls">
                          <div className="quantity-price-section">
                            <div className="quantity-toggle">
                              <button
                                className="qty-btn"
                                onClick={() => decreaseQuantity(item._id)}
                              >
                                −
                              </button>
                              <span>{cartItems[item._id]}</span>
                              <button
                                className="qty-btn"
                                onClick={() => addToCart(item._id)}
                              >
                                +
                              </button>
                            </div>
                            
                            <div className="price-section">
                              <div className="item-price">₹{Math.round(item.price * 1.25)}</div>
                              <div className="item-total">₹{item.price * cartItems[item._id]}</div>
                            </div>
                          </div>
                          
                          <div className="item-remove">
                            <button
                              onClick={() => removeFromCart(item._id)}
                              className="remove-btn"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })
          )}
        </div>

        {/* ✅ Only show cart summary if cart has items */}
        {!isCartEmpty && (
          <div className="cart-summary-section">
            <div className="cart-totals">
              <h2>Cart Totals</h2>
              <div className="total-row">
                <span>Subtotal</span>
                <span>₹{getTotalCartAmount()}</span>
              </div>
              <div className="total-row">
                <span>Delivery Fee</span>
                <span>₹{getTotalCartAmount() === 0 ? 0 : 50}</span>
              </div>
              <div className="total-row total-final">
                <strong>Total</strong>
                <strong>
                  ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}
                </strong>
              </div>
            </div>

            <div className="action-buttons">
              <button
                onClick={handleContinueShopping}
                className="continue-shopping-btn"
              >
                Continue Shopping
              </button>
              <button 
                onClick={() => navigate('/order')} 
                className="checkout-btn"
                disabled={getTotalCartAmount() === 0}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;