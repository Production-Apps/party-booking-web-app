import React from 'react';

const Cart = (props) => {
  //If there are no items in the cart then show empty text
  if (props.items.length == 0) {
    return (
      <div>
        <h1>Empty Cart.</h1>
      </div>
    );
  }
  return (
    <div>
      {props.items.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
};
export default Cart;
