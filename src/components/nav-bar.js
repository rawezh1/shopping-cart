import React, { useState, useEffect } from 'react';
import './navbar.css';

function NavBar() {
  return (
    <div className='nav-bar'>
      <nav>
          <h1>Title</h1>
          <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Cart</li>
          </ul>
      </nav>
    </div>
  );
}

export default NavBar;