import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Link, NavLink } from 'react-router-dom';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4242/api/Produtos')
      .then(response => {
        console.log(response.data.Produtos);
        setItems(response.data.Produtos);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [cart, setCart] = useState([]);


  function LoginButton() {
    return (
      <button>Login</button>
    );
  }


  const addToCart = (item) => {
    const existingItem = cart.find((i) => i.title === item.title);
    if (existingItem) {
      existingItem.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, {...item, quantity: 1}]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find((i) => i.title === item.title);
    if (existingItem.quantity > 1) {
      existingItem.quantity--;
      setCart([...cart]);
    } else {
      setCart(cart.filter((i) => i !== item));
    }
  };

  return (
    <div className="bg">
      <header className="header">
        <h1>Loja Online</h1>
      </header>
      <div className='login-btn' end>
        <LoginButton />
        </div>
      <div>
        <h2 className='products'>Produtos</h2>
        <div class="container">
          {items.map((item) => (
            <div class="product" key={item.title}>
              <h3>{item.title}</h3>
              <img className='img' alt={item.description} src={item.image}></img>
              <p class="product-description">Descrição: {item.description}</p>
              <p class="product-price">Preço: {item.price}€</p>
              <button onClick={() => addToCart(item)}>Comprar</button>
            </div>
          ))}
        </div>
        <h2>Carrinho de compras</h2>
        <div class="container">
          {cart.map((item) => (
            <div class="cart" key={item.title}>
              <h3>{item.title}</h3>
              <img className='img' alt={item.description} src={item.image}></img>
              <p class="cart-description">Descrição: {item.description}</p>
              <p class="cart-price">Preço: {item.price}€</p>
              <p class="cart-quantity">Quantidade: {item.quantity}</p>
              <button onClick={() => removeFromCart(item)}>Remover do carrinho</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;