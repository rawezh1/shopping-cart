import React, { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import Home from './components/homepage';
import Shop from './components/shop';
import Cart from './components/cart';
import Beetroot from './components/images/beetroot.webp';
import Classic from './components/images/classic.jpg';
import Avocado from './components/images/avocado.jpg';
import Potato from './components/images/potato.webp';
import './App.css';

function App() {
  const classic = {
    src: Classic,
    id: 'classic',
    name: 'Classic Hummus',
    price: '$1',
    weight: '100 g',
    ingredients: 'Chickpeas, Salt, Olive Oil, Garlic, Tahini, Spices',
  };
  const beetroot = {
    src: Beetroot,
    id: 'beetroot',
    name: 'Beetroot Hummus',
    price: '$2',
    weight: '100 g',
    ingredients: 'Chickpeas, Beetroot, Salt, Tahini, Spices',
  };
  const avocado = {
    src: Avocado,
    id: 'avocado',
    name: 'Avocado Hummus',
    price: '$5',
    weight: '100 g',
    ingredients: 'Chickpeas, Avocado, Salt, Tahini, Spices',
  };
  const potato = {
    src: Potato,
    id: 'potato',
    name: 'Sweet Potato Hummus',
    price: '$3',
    weight: '100 g',
    ingredients: 'Chickpeas, Sweet Potato, Salt, Tahini, Spices',
  };
  const cardInfo = [classic, beetroot, potato, avocado];
  const cartInit = {
    classic: {name:'Classic Hummus',quantity:1,price:1},
    beetroot: {name:'Beetroot Hummus',quantity:3,price:2},
    potato: {name:'Potato Hummus',quantity:0,price:3},
    avocado: {name:'Avocado Hummus',quantity:0,price:5},
  };
  const [cart, setCart] = useState(cartInit);
  const addItem = (e) => {
    let newCart = cart;
    console.log(e.target.id)
    newCart[`${e.target.id}`].quantity += 1
    console.log(cart)
    setCart(newCart);
  };
  //<Shop clickHandler={addItem} cardInfo={cardInfo} />
  //
  return (
    <div className='App'>
      <NavBar />
      <Cart cartContent={Object.values(cart)}/>
    </div>
  );
}

export default App;
