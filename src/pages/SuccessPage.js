import React from 'react';
import './SuccessPage.css';

function SuccessPage({ orderDetails, onBackToHome }) {
  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p className="success-message">
          Thank you for your order. We'll send you a confirmation email shortly.
        </p>
        
        <div className="order-details">
          <h2>Order Details</h2>
          <div className="detail-row">
            <span>Total Amount:</span>
            <span className="detail-value">${orderDetails.total.toFixed(2)}</span>
          </div>
          <div className="detail-row">
            <span>Payment Method:</span>
            <span className="detail-value">
              {orderDetails.paymentMethod === 'card' && 'Credit/Debit Card'}
              {orderDetails.paymentMethod === 'paypal' && 'PayPal'}
              {orderDetails.paymentMethod === 'cod' && 'Cash on Delivery'}
            </span>
          </div>
          <div className="detail-row">
            <span>Shipping Address:</span>
            <span className="detail-value">
              {orderDetails.shippingInfo.address}, {orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.state} {orderDetails.shippingInfo.zipCode}
            </span>
          </div>
        </div>

        <button className="back-home-btn" onClick={onBackToHome}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
