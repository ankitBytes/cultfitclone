import React from 'react';
import './addtocart.css'
const AddToCartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="add-to-cart-button">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;