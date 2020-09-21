import React, { useState } from 'react';
import { Panel, Button } from 'rsuite';

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
      <Panel bordered header={props.tile.name}>
        <img src={props.tile.img} height="240" alt={props.tile.name} />
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
