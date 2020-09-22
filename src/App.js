import React, { useRef } from 'react';
import './App.css';
//Import styling for rsuite components
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content } from 'rsuite';

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
//import Cart from './components/Admin';
//user dashboard *Secure* optional
//import Cart from './components/Dashboard';

function App() {
  let items = [];
  const ref = useRef();
  //Coming from Store and goint to Nav to set cart quantity
  const setCart = (newItems) => {
    items = newItems;
    //Call function inside Navbar
    ref.current.setCart(newItems.length);
  };

  return (
    <Container>
      <Header>
        <NavBar ref={ref} />
      </Header>
      <Content>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/store" component={() => <Store setCart={setCart} />} />
        <Route path="/cart" component={() => <Cart items={items} />} />
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Container>
  );
}

export default App;
