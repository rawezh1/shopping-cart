import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Homeus from './images/Homeus.png'
// A navbar made of a logo and three links to (home, shop and cart)
function NavBar(props) {
  // Calculate the total number of items in the cart by making an array of quantities
  // and then summing over them.
  const total = (arr) => {
    const arrValues = arr.map((item) => {
      return item.quantity;
    });
    return arrValues.reduce((sum, num) => sum + num, 0);
  };
  return (
    <div className='nav-bar'>
      <nav>
        <img className='logo' alt='' src={Homeus}></img>
        <ul>
          <Link to='/' className='link'>
            <li>Home</li>
          </Link>
          <Link to='/shop' className='link'>
            <li>Shop</li>
          </Link>
          <Link to='/cart'  className='link'>
            <li className='cart-link'>Cart [{total(props.cartContent)}]</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
