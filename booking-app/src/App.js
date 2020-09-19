import React, { useState, useRef } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Navigation bar
import NavBar from './components/Navbar';
//Home page
import Home from './components/Home';
//Authentication
import Login from './components/Login';
//Store page
import Store from './components/Store';
//Cart/checkout page
import Cart from './components/Cart';
//Admin dashboard *Secure*

//user dashboard *Secure*

function App() {
  let items = [];

  const ref = useRef();
  //Coming from Store and goint to Nav to set cart
  const setCart = (newItems) => {
    items = newItems;
    //Call function inside Navbar
    ref.current.setCart(newItems.length);
  };

  return (
    <div className="App">
      <NavBar ref={ref} />
      <header className="App-header">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/store" component={() => <Store setCart={setCart} />} />
        <Route path="/cart" component={() => <Cart items items={items} />} />
      </header>
    </div>
  );
}

export default App;
