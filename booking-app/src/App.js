import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Navigation bar
import Navbar from './components/Navbar';
//Home page
import Home from './components/Home';
//Authentication
import Login from './components/Login';
//Store page
import Store from './components/Store';

//Admin dashboard *Secure*

//user dashboard *Secure*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/store" component={Store} />
      </header>
    </div>
  );
}

export default App;
