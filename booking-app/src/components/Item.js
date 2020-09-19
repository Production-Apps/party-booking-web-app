import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Item = (props) => {
  const [inCart, setInCart] = useState(false);
  const classes = useStyles();

  const handleClick = (item) => {
    if (inCart) {
      props.removeFromCart(item);
      setInCart(false);
    } else {
      props.addToCart(item);
      setInCart(true);
    }
  };
  return (
    <div>
      <img src={props.tile.img} alt={props.tile.name} />
      <GridListTileBar
        title={props.tile.title}
        subtitle={<span>Details: {props.tile.description}</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${props.tile}`}
            className={classes.icon}
            onClick={(e) => handleClick(props.tile)}
          >
            {inCart ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
          </IconButton>
        }
      />
    </div>
  );
};

export default Item;
