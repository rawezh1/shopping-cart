import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  // Initialize products
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
    classic: { id: 'classic', name: 'Classic Hummus', quantity: 0, price: 1 },
    beetroot: {
      id: 'beetroot',
      name: 'Beetroot Hummus',
      quantity: 0,
      price: 2,
    },
    potato: { id: 'potato', name: 'Potato Hummus', quantity: 0, price: 3 },
    avocado: { id: 'avocado', name: 'Avocado Hummus', quantity: 0, price: 5 },
  };
  const [cart, setCart] = useState(cartInit);
  // Add an item to cart on click
  const addItem = (e) => {
    let newCart = { ...cart };
    newCart[`${e.target.id}`].quantity += 1;
    setCart(newCart);
  };
  // Remove an item from the cart on click
  const removeItem = (e) => {
    let newCart = { ...cart };
    newCart[e.target.id].quantity -= 1;
    setCart(newCart);
  };
  return (
    <Router>
      <div className='App'>
        <NavBar cartContent={Object.values(cart)}/>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/cart' exact>
            <Cart clickHandler={removeItem} cartContent={Object.values(cart)} />
          </Route>
          <Route path='/shop' exact>
            <Shop clickHandler={addItem} cardInfo={cardInfo} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
