import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import CheckoutList from './CheckoutList';
//rsuite components
import { DateRangePicker, List, Content, FlexboxGrid, Button } from 'rsuite';

const Cart = (props) => {
  const [cartItems, setCartItems] = useState(props.items);
  const [isLoading, setisLoading] = useState(false);
  const [dateRange, setDateRange] = useState();
  let history = useHistory();

  const placeOrder = () => {
    //Selected Date
    console.log(dateRange);
    setisLoading(true);
    //REMOVE ITEMS FROM NAVBAR
    setCartItems(null);
    updateCart();
    history.push('/');
  };

  const { beforeToday } = DateRangePicker;

  const removeItem = (item) => {
    let index = cartItems.indexOf(item);
    let newList = cartItems.splice(index, 1);
    setCartItems(newList);
    updateCart();
  };

  const updateCart = () => {
    props.setCart(cartItems);
  };

  //If there are no items in the cart then show empty text
  if (props.items.length === 0) {
    return (
      <Content className="Container">
        <FlexboxGrid justify="center">
          <h1>Empty cart.</h1>
        </FlexboxGrid>
      </Content>
    );
  }

  if (isLoading) {
    return (
      <Content className="Container">
        <FlexboxGrid justify="center">
          <h1>Thank you.</h1>
        </FlexboxGrid>
      </Content>
    );
  }
  return (
    <div>
      <List hover>
        {cartItems.map((item) => (
          <CheckoutList item={item} removeItem={removeItem} />
        ))}
      </List>
      <FlexboxGrid justify="center">
        <DateRangePicker
          appearance="default"
          placeholder="Pick Date."
          disabledDate={beforeToday()}
          placement="auto"
          value={dateRange}
          onChange={(dates) => setDateRange(dates)}
        />
        <Button appearance="primary" onClick={placeOrder}>
          Place order
        </Button>
      </FlexboxGrid>
    </div>
  );
};

export default Cart;
