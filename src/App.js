import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import Login from './login/login.js';
import Products from './products/products.js';

export const LS_AUTH_TOKEN = 'AUTH_TOKEN';

const App = () => {

  return (
    <div>
      <Login />
    </div>
  );
};

export default App;