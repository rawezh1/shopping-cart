import React, { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import Home from './components/homepage';
import Shop from './components/shop';
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
    calssic: 0,
    beetroot: 0,
    potato: 0,
    avocado: 0,
  };
  const [cart, setCart] = useState(cartInit);
  const addItem = (e) => {
    let newCart = cart;
    newCart[e.target.id] += 1
    setCart(newCart);
  };
  return (
    <div className='App'>
      <NavBar />
      <Shop clickHandler={addItem} cardInfo={cardInfo} />
    </div>
  );
}

export default App;
