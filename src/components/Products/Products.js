// Products.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

function Products({ addToCart, addToBookmark }) {
  const [products, setProducts] = useState([]);

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => {
      const start = index * size;
      const end = start + size;
      return arr.slice(start, end);
    });
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const chunkedProducts = chunkArray(products, 4);

  return (
    <div className="container">
      {chunkedProducts.map((chunk, index) => (
        <div key={index} className="row">
          {chunk.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              addToBookmark={addToBookmark}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Products;
