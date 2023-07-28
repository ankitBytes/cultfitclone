import React from 'react';
import "./style.css"
import AddToCartButton from './AddToCartButton';
import BuyNowButton from './BuynowButton';
import Navbar from '../navbar/storeNavbar';
import PrimaryFooter from "../../Components/Footer/primaryFooter"
const Singleproduct= () => {
  const product = {
    mname:'RPM FITNESS BY CULT.SPORT',
    name: 'RPM Active1100DC Motorised Treadmill, Maximum weight: 140 Kgs, 5HP Peak',
    description: ' The RPM Fitness by Cult.sport Active 1100DC Treadmill is a high-quality fitness equipment designed for intensive workouts. It features a powerful 5HP peak motor, ensuring a smooth and consistent performance. With a maximum weight capacity of 140kg, it accommodates a wide range of users. This treadmill provides 15 inclination levels that helps to personalize your workout. The treadmill being motorized helps in smooth workouts. The best feature is that it is foldable and so can be stored easily when not in use. Whether youre a beginner or a fitness enthusiast, this treadmill provides a reliable and convenient platform to enhance your cardiovascular endurance, burn calories, and improve overall fitness.',
      
    
    price: '₹ 53999',
    rating: 4.5,
    reviews: 25,
  };

  const handleAddToCart = () => {
    // Implement the cart functionality here
    console.log('Product added to cart:', product);
  };
  const handleBuyNow = (product) => {
    // Implement the "Buy Now" functionality here
    console.log('Product bought:', product);
  };
    
    
  return (
    <>
    <Navbar />
    <div className="image-gallery">
      <div className="row">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/8XW2NRkxF5tf42BaG8xZzy3U" alt=" 1"/>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/4oc7bchn1nZVft1C8bFhZQsd" alt=" 2" />
      </div>
      <div className="row">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/Uex2hq6U1VjyBk33uG9NpVWs" alt=" 3" />
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/qZbjnVUeqgjz14wiyBCQChRo" alt=" 4" />
      </div>
      <div className="row">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/91M1fLCcV7ixaF2xMH3gMmYN" alt=" 6" />
      </div>
      <div className="product-info">
        <h4>{product.mname}</h4>
        <h1>{product.name}</h1>
        <p>Price: {product.price}</p>
        
        <h3>Product Description</h3>
        <p>{product.description}</p>
        <p>Rating: {product.rating}</p>
        <p>Number of Reviews: {product.reviews}</p>
        <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      {/* Add other product details here */}
      <AddToCartButton onClick={handleAddToCart} />
    </div>
    <div>
      {/* Add other product details here */}
      <BuyNowButton product={product} onBuyNow={handleBuyNow} />
    </div>
        <hr></hr>
         <h3>PRODUCT DETAILS</h3>
        <ul>
        <li >MotorHorsepower:  5 HP, Warranty: 1 year on motor & manufacturing defects,3 years on frame</li>
        <li>Motor Type: DC Motorized, Speed: 1-18 Km/hr, Max Weight Support: 140 Kgs</li>
        <li>Foldable: Hydraulic, Lubrication: Manual</li>
        <li>Transportation Wheels: Present, Bluetooth Connectivity: Yes</li>
        <li>Toll-Free Number: 1800-572-6402 & 1800-5702-6303 </li>
     
      </ul >
      <hr></hr>
      

        
        <ul>
        <li>Free delivery by Wednesday, 2nd August</li>
        <li><b>No returns available</b></li>
        <li>10 days exchange available</li>
        <li><b>Pay on delivery available</b></li>
      </ul>

      </div>
    </div>
    <PrimaryFooter />
    </>
  
  );
};

export default Singleproduct;
