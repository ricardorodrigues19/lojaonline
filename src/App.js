import './App.css';
import React from 'react';
import Navbar from './navbar/navbar.js';
import Login from './login/login.js';
import Products from './products/products.js';
import Cart from './cart/cart.js';

export const LS_AUTH_TOKEN = 'AUTH_TOKEN';

const App = () => {

  return (
    <div class="bg">
      <Navbar />
      <Login />
      <Products />
      <Cart />
    </div>
  );
};

export default App;