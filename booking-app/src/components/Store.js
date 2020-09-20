import React, { useState } from 'react';
import Item from './Item.js';

import { PanelGroup, Grid, Row, Col } from 'rsuite';

import Card from './Card';

export default function Store(props) {
  const [itemsInCart, setItemsInCart] = useState(0);

  //Temporary objects
  const tileData = [
    {
      id: 1,
      name: 'Chairs',
      img:
        'https://i5.walmartimages.com/asr/22203443-fdff-4378-b0e7-6caa3f6bb527_1.ac832f82929c64340ee048444e6f39e3.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',

      description: 'Description',
      price: 9.99,
      quantity: 5,
    },
    {
      id: 2,
      name: 'Tables',
      img:
        'https://i.pinimg.com/originals/d2/23/3f/d2233f0596bcdc4b4a14f03a9b5a1309.jpg',
      description: 'Description',
      price: 9.99,
      quantity: 5,
    },
    {
      id: 3,
      name: 'Tent',
      img:
        'https://cdn11.bigcommerce.com/s-wyud6/images/stencil/1280x1280/products/208/843/25917__85446.1457454965.jpg?c=2?imbypass=on',

      description: 'Description',
      price: 9.99,
      quantity: 5,
    },
    {
      id: 4,
      name: 'Decor',
      img:
        'https://www.homeartmania.com/wp-content/uploads/2016/08/Backyard-party-decor-and-hacks-1.jpg',

      description: 'Description',
      price: 9.99,
      quantity: 5,
    },
  ];
  let cart = [];

  const addToCart = (item) => {
    cart.push(item);
    saveToPersistentStorage();
  };

  const removeFromCart = (item) => {
    let x = cart.filter((cartItem) => {
      return cartItem.id != item.id;
    });
    cart = x;
    saveToPersistentStorage();
  };

  const saveToPersistentStorage = () => {
    props.setCart(cart);
  };

  return (
    <div>
      <Row>
        {tileData.map((tile) => (
          <Col md={6} sm={12}>
            <Card
              tile={tile}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

{
  /* <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Store</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile>
            <Item
              tile={tile}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </GridListTile>
        ))}
      </GridList>; */
}
