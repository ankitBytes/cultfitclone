import React from 'react';
import './buynow.css'
const BuyNowButton = ({ product, onBuyNow }) => {
  const handleBuyNow = () => {
    onBuyNow(product); // Implement the "Buy Now" functionality here
  };

  return (
    <div className="button-container">
      <button className="buy-now-button" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default BuyNowButton;
