import React, { useState, useEffect } from 'react';
import './cart.css';
import EmptyCart from './images/empty-cart.png';
import { Link } from 'react-router-dom';

function Cart(props) {
  // Calculate the total cost of all items by making an array of (quantities multiplied by 
  // prices) and summing over them.
  const total = (arr) => {
    const arrValues = arr.map((item) => {
      return item.quantity * item.price;
    });
    return arrValues.reduce((sum, num) => sum + num, 0);
  };
  // Show an empty cart page if cart is empty, show items and total otherwise.
  const renderCart = () => {
    if (total(props.cartContent) === 0) {
      return showEmpty();
    } else {
      return showItems();
    }
  };
  // Make an empty page of an Image, warning and link to shop.
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
  // Make a table of items
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
  // Make a row dynamically depending on the number of items in cart.
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
