import React, { useState, useEffect } from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <h2>Welcome</h2>
      <p>Homeus, home of the world's best hummus!</p>
      <Link to='/shop'>
        <button className='product-btn'>See Our Products</button>
      </Link>
    </div>
  );
}

export default Home;
