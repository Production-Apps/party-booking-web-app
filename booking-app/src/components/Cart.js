import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//rsuite components
import {
  DateRangePicker,
  Button,
  Table,
  InputNumber,
  InputGroup,
} from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

const Cart = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [dateRange, setDateRange] = useState();
  const [data, setData] = useState(props.items);
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

  const setQuantity = () => {
    console.log('Hello');
  };

  const handleMinus = () => {
    inputRef.current.handleMinus();
  };
  const handlePlus = () => {
    inputRef.current.handlePlus();
  };
  const inputRef = React.createRef();

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
      <Table height={420} data={data}>
        <Column width={200} resizable>
          <HeaderCell>Item</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={100} resizable>
          <HeaderCell>Cost</HeaderCell>
          <Cell dataKey="price" />
        </Column>

        <Column width={150} align="center" resizable>
          <HeaderCell>Quantity</HeaderCell>
          <Cell>
            <InputGroup>
              <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
              <InputNumber
                className={'custom-input-number'}
                ref={inputRef}
                max={100}
                min={5}
              />
              <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
            </InputGroup>
          </Cell>
        </Column>
      </Table>

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
