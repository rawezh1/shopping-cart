import React, { useState, useEffect } from 'react';
import './cart.css';
import EmptyCart from './images/empty-cart.png';
import { Link } from 'react-router-dom';

function Cart(props) {
  const total = (arr) => {
    const arrValues = arr.map((item) => {
      return item.quantity * item.price;
    });
    return arrValues.reduce((sum, num) => sum + num, 0);
  };
  const renderCart = () => {
    if (total(props.cartContent) === 0) {
      return showEmpty();
    } else {
      return showItems();
    }
  };
  const showEmpty = () => {
    return (
      <div className='empty-cart'>
        <img src={EmptyCart} alt=''></img>
        <h4>Your Cart is Empty</h4>
        <Link to='/shop' className='link'>
          <button className='shop-now'>Shop Now</button>
        </Link>
      </div>
    );
  };
  const showItems = () => {
    return (
      <div className='table-container'>
        <table className='item-table'>
          <thead>
            <tr className='header-row'>
              <th>Product Type</th>
              <th>Price Per Item</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{generateRows()}</tbody>
        </table>
        <p>Sum Total = ${total(props.cartContent)}</p>
        <button>Checkout</button>
      </div>
    );
  };
  const generateRows = () => {
    const nonZeroItems = props.cartContent.filter((item) => item.quantity > 0);
    return nonZeroItems.map((item, index) => {
      return (
        <tr key={index} className='item-row'>
          <th>{item.name}</th>
          <th>${item.price}</th>
          <th>{item.quantity}</th>
          <th>${item.price * item.quantity}</th>
          <th>
            <button id={item.id} onClick={props.clickHandler}>
              Remove Item
            </button>
          </th>
        </tr>
      );
    });
  };
  return <div className='cart'>{renderCart()}</div>;
}

export default Cart;
