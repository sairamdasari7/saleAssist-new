import React, { useState } from 'react';

const Cart = () => {
  const [cartItems] = useState([]);

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
