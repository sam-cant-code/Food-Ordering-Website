import React, { useContext } from 'react';
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

  if (!food_list || !Array.isArray(food_list)) {
    return <div>Loading...</div>;
  }

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-items-section">
          <div className="cart-items-header">
            <div className="header-item hide-mobile">Items</div>
            <div className="header-title">Title</div>
            <div className="header-price hide-mobile">Price</div>
            <div className="header-quantity">Quantity</div>
            <div className="header-total">Total</div>
            <div className="header-remove">Remove</div>
          </div>

          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index} className="cart-item-row">
                  <div className="item-image hide-mobile">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-title">{item.name}</div>
                  <div className="item-price hide-mobile">₹{item.price}</div>
                  <div className="item-quantity quantity-toggle">
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
                  <div className="item-total">
                    ₹{item.price * cartItems[item._id]}
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
              );
            }
            return null;
          })}
        </div>

        <div className="cart-summary-section">
          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <div className="total-row">
              <span>Subtotal</span>
              <span>₹{getTotalCartAmount()}</span>
            </div>
            <div className="total-row">
              <span>Delivery Fee</span>
              <span>₹{getTotalCartAmount() === 0 ? 0 : 2}</span>
            </div>
            <div className="total-row total-final">
              <strong>Total</strong>
              <strong>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
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
            <button onClick={()=>navigate('/order')} className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
