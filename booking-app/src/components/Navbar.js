// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/login">Login</NavLink>
//       <NavLink to="/store">Store</NavLink>
//     </div>
//   );
// };
// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

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

export default function ButtonAppBar() {
  const classes = useStyles();

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
            News
          </Typography>
          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCartIcon />
          </IconButton>

          <IconButton color="inherit" component={Link} to="/login">
            <PersonPin />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
