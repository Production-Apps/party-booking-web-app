import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//rsuite components
import { Button } from 'rsuite';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const Cart = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [dateRange, setDateRange] = useState();
  let history = useHistory();

  const placeOrder = () => {
    //Selected Date
    console.log(dateRange);
    setisLoading(true);
    setTimeout(function () {
      //Refresh (to clear cart) and redirect to home
      history.push('/');
      window.location.reload();
    }, 3000);
  };

  const { beforeToday } = DateRangePicker;

  //If there are no items in the cart then show empty text
  if (props.items.length == 0) {
    return (
      <div>
        <h1>Empty Cart.</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Thank You</h1>
        <p>Order successful.</p>
      </div>
    );
  }
  return (
    <div>
      {props.items.map((item) => (
        <h1>{item.name}</h1>
      ))}
      <DateRangePicker
        appearance="default"
        placeholder="Pick Date."
        disabledDate={beforeToday()}
        placement="right"
        value={dateRange}
        onChange={(dates) => setDateRange(dates)}
      />
      <Button appearance="primary" onClick={placeOrder}>
        Place order
      </Button>
    </div>
  );
};

export default Cart;
