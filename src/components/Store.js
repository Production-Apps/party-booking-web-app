import React from 'react';
import { Row, Col } from 'rsuite';
import Card from './Card';

//Import test data *After test replace with firbase*
import CardData from '../Resources/TestData';

export default function Store(props) {
  let cart = [];

  const addToCart = (item) => {
    cart.push(item);
    updateCart();
  };

  const removeFromCart = (item) => {
    let index = cart.indexOf(item);
    cart.splice(index, 1);
    updateCart();
  };

  const updateCart = () => {
    props.setCart(cart);
  };

  return (
    <div>
      <Row>
        {CardData.map((tile) => (
          <Col md={6} sm={12} key={tile.id}>
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
