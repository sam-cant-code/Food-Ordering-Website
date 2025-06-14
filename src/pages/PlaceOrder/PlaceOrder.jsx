import React from 'react';
import './PlaceOrder.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Delivery Information</h2>
        <form className="delivery-form">
          <div className="form-row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="form-row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="tel" placeholder="Phone" />
        </form>
      </div>

      <div className="checkout-right">
        <h2>Cart Totals</h2>
        <div className="cart-total-row">
          <span>Subtotal</span>
          <span>₹0</span>
        </div>
        <div className="cart-total-row">
          <span>Delivery Fee</span>
          <span>₹2</span>
        </div>
        <div className="cart-total-row total">
          <strong>Total</strong>
          <strong>₹2</strong>
        </div>
        <button className="checkout-btn">PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default Checkout;
