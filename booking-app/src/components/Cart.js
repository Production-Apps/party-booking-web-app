import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//rsuite components
import {
  DateRangePicker,
  Button,
  Table,
  InputNumber,
  InputGroup,
  Content,
  FlexboxGrid,
} from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

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

  const handleMinus = () => {
    inputRef.current.handleMinus();
  };
  const handlePlus = () => {
    inputRef.current.handlePlus();
  };
  const inputRef = React.createRef();

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
      <Table height={400} data={props.items}>
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

      <FlexboxGrid justify="center">
        <DateRangePicker
          appearance="default"
          placeholder="Pick Date."
          disabledDate={beforeToday()}
          placement="topEnd"
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
