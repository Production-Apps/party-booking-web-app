import React, { useState } from 'react';
import { Panel, Button, Icon } from 'rsuite';

const Card = (props) => {
  const [inCart, setInCart] = useState(false);

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
      <Panel {...props} bordered header={props.tile.name}>
        <p>{props.tile.description}</p>
        <p>${props.tile.price}</p>
        <Button appearance="primary" onClick={(e) => handleClick(props.tile)}>
          {inCart ? 'Remove' : 'Add to cart'}
        </Button>
      </Panel>
    </div>
  );
};

export default Card;
