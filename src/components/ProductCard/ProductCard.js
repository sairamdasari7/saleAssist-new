import React from 'react';
import { BsBookmark } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import './ProductCard.css';

const ProductCard = ({ product, addToCart, addToBookmark }) => {
  const { title, price, category, image } = product;

  const handleBookmarkClick = () => {
    addToBookmark(product);
  };
  
  const handleCartClick = () => {
    addToCart(product);
  };

  return (
    <div className="card-container">
      <img className="card-image-size" src={image} alt={title} />
      <div className="button-container">
        <button onClick={handleBookmarkClick}><BsBookmark /></button>
      </div>
      <div className="card-image-description-container">
        <div className="card-image-description">Title: {title}</div>
        <div className="card-image-category">Category: {category}</div>
      </div>
      <div className="price-container">
        <div className="card-product-price">Price: ${price}</div>
        <button onClick={handleCartClick} className="card-cart-icon"><FaCartPlus /></button>
      </div>
    </div>
  );
};

export default ProductCard;
