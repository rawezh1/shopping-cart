import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Homeus from './images/Homeus.png'

function NavBar() {
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
            <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
