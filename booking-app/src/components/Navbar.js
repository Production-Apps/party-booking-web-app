import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import PersonPin from '@material-ui/icons/PersonPin';
import Storefront from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavBar = forwardRef((props, ref) => {
  const [items, setItems] = useState();
  const classes = useStyles();

  const setCart = (x) => {
    setItems(x);
  };

  useImperativeHandle(ref, () => {
    return {
      setCart: setCart,
    };
  });

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <IconButton color="inherit" component={Link} to="/">
            <Home />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/store">
            <Storefront />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Party Rentals
          </Typography>
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={items} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" component={Link} to="/login">
            <PersonPin />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default NavBar;
