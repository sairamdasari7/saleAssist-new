import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

import './Header.css';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Call onSearch callback with the search term
  };

  return (
    <div>
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <p  className="logo">TANN TRIM</p> 
        </Link>
      </div>
      <div className="navigation-container">
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Products"
          />
          <FiSearch className="search-icon" />
        </div>
          <Link to="/login" className="navigation-link"><BsPerson /></Link>
          <Link to="/bookmarks" className="navigation-link"><BsBookmark /></Link>
          <Link to="/cart" className="navigation-link"><BsCart /></Link>
          <Link to="/products" className="navigation-link">Products</Link>
          <Link to="/register" className="navigation-link">SignUp</Link>
        
      </div>
      
    </header>
    <div className='tabs-container'>
        <button type='button' className='tab'>Men</button>
        <button type='button' className='tab'>Women</button>
        <button type='button' className='tab'>Storage</button>
        <button type='button' className='tab'>Electronics</button>
        <button type='button' className='tab'>Ornaments</button>
    </div>
    
    </div>
  );
}

export default Header;
