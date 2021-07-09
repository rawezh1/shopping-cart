import React, { useState, useEffect } from 'react';
import './shop.css';

function Shop(props) {
  const makeCards = () => {
    return props.cardInfo.map((card, index) => {
      return (
        <div
          key={index}
          className='card'
          style={{ backgroundImage: `url(${card.src})` }}
        >
          <div className='card-cover'>
            <h1 className='card-title'>{card.name}</h1>

            <p className='card-text'>Price: {card.price}</p>
            <p className='card-text'>Weight: {card.weight}</p>
            <p className='card-text'>Ingredients: {card.ingredients}</p>
            <button
              id={card.id}
              className='card-button'
              onClick={props.clickHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      );
    });
  };
  return <div className='shop'>{makeCards()}</div>;
}

export default Shop;
