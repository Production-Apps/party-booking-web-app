import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

//Rsuit components
import { Navbar, Nav, Icon } from 'rsuite';
import { Badge } from 'rsuite';

const NavBar = forwardRef((props, ref) => {
  const [items, setItems] = useState();
  const [activeKey, setActiveKey] = useState();

  //Use to update the cart count
  const setCart = (x) => {
    setItems(x);
  };

  //Use to invoke setCart from parent component App.js
  useImperativeHandle(ref, () => {
    return {
      setCart: setCart,
    };
  });

  //Use tp set which navbutton is active
  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div className="nav-wrapper">
      <Navbar appearance="inverse">
        {/* <Navbar.Header>
        <a href="#" className="navbar-brand logo">
          RSUITE
        </a>
      </Navbar.Header> */}
        <Navbar.Body>
          <Nav onSelect={handleSelect} activeKey={activeKey}>
            <Nav.Item
              componentClass={Link}
              to="/"
              eventKey="1"
              icon={<Icon icon="home" />}
            >
              Home
            </Nav.Item>
            <Nav.Item componentClass={Link} to="/store" eventKey="2">
              Store
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item
              componentClass={Link}
              to="/cart"
              icon={<Icon icon="shopping-cart" />}
            >
              Cart <Badge content={items ? items : ''} />
            </Nav.Item>
            <Nav.Item
              componentClass={Link}
              to="/login"
              eventKey="3"
              icon={<Icon icon="sign-in" />}
            >
              Login
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
});

export default NavBar;
