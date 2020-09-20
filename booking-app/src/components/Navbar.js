import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Icon, Dropdown } from 'rsuite';
import { Badge } from 'rsuite';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      {/* <Navbar.Header>
        <a href="#" className="navbar-brand logo">
          RSUITE
        </a>
      </Navbar.Header> */}
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>
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
            Cart <Badge content={props.items ? props.items : ''} />
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
  );
};

const NavBar = forwardRef((props, ref) => {
  const [items, setItems] = useState();
  const [activeKey, setActiveKey] = useState();
  const setCart = (x) => {
    setItems(x);
  };

  useImperativeHandle(ref, () => {
    return {
      setCart: setCart,
    };
  });

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div className="nav-wrapper">
      <NavBarInstance
        appearance="inverse"
        activeKey={activeKey}
        onSelect={() => handleSelect}
        items={items}
      />
    </div>
  );
});

export default NavBar;
