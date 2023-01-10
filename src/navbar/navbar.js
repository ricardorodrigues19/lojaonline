import './navbar.css';
import React from 'react';

const Navbar = () => {
  
  return (
    <div className="bg">
      <header className="header">
        <h1>Loja Online</h1>
        <button>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </header>
    </div>
  );
};

export default Navbar;