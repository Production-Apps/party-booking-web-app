import React, { useState } from 'react';
import { Row, Col } from 'rsuite';
import Card from './Card';

//Import test data *After test replace with firbase*
import CardData from '../Resources/TestData';

export default function Store(props) {
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
        {CardData.map((tile) => (
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
