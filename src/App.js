import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import './App.css';

function App() {
  const [setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products with all products
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setFilteredProducts(products); // Reset filtered products when search term is empty
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const addToCart = (product) => {
    // Check if the product is already in the cart
    if (cartItems.find(item => item.id === product.id)) {
      console.log('Product already in cart:', product);
      return;
    }
    
    // Add the product to cart
    setCartItems(prevCartItems => [...prevCartItems, product]);
    console.log('Adding product to cart:', product);
  };

  const addToBookmark = (product) => {
    // Check if the product is already bookmarked
    if (bookmarks.find(item => item.id === product.id)) {
      console.log('Product already bookmarked:', product);
      return;
    }
    
    // Add the product to bookmarks
    setBookmarks(prevBookmarks => [...prevBookmarks, product]);
    console.log('Adding product to bookmarks:', product);
  };

  return (
    <Router>
      <div className='main-container'>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home products={filteredProducts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products addToCart={addToCart} addToBookmark={addToBookmark} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
