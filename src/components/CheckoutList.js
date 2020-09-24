import React, { useState } from 'react';

import { List, FlexboxGrid, Icon, InputGroup, InputNumber } from 'rsuite';

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
};

const slimText = {
  fontSize: '0.666em',
  color: '#97969B',
  fontWeight: 'lighter',
  paddingBottom: 5,
};

const titleStyle = {
  paddingBottom: 5,
  whiteSpace: 'nowrap',
  fontWeight: 500,
};

const dataStyle = {
  fontSize: '1.2em',
  fontWeight: 500,
};

const CheckoutList = (props) => {
  const [quantity, setQuantity] = useState(props.item.quantity);
  const handleMinus = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 5);
  };
  const handlePlus = () => {
    setQuantity(quantity + 5);
  };

  return (
    <List.Item key={props.item}>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={2} style={styleCenter}>
          <img src={props.item.img} width="50" alt={props.item.name} />
        </FlexboxGrid.Item>
        {/*base info*/}
        <FlexboxGrid.Item
          colspan={6}
          style={{
            ...styleCenter,
            flexDirection: 'column',
            alignItems: 'flex-start',
            overflow: 'hidden',
          }}
        >
          <div style={titleStyle}>{props.item.name}</div>
          <div style={slimText}>
            <div>
              <Icon icon="user-circle-o" />
            </div>
            <div>{props.item.price}</div>
          </div>
        </FlexboxGrid.Item>
        {/*peak data*/}
        <FlexboxGrid.Item colspan={6} style={styleCenter}>
          <div style={{ textAlign: 'right' }}>
            <div style={slimText}>Top Value</div>
            <div style={dataStyle}>{props.item.price}</div>
          </div>
        </FlexboxGrid.Item>
        {/*uv data*/}
        <FlexboxGrid.Item colspan={6} style={styleCenter}>
          <div style={{ textAlign: 'right' }}>
            <div style={slimText}>UV</div>
            <div style={dataStyle}>{props.item.price}</div>
          </div>
        </FlexboxGrid.Item>
        {/*uv data*/}
        <FlexboxGrid.Item
          colspan={4}
          style={{
            ...styleCenter,
          }}
        >
          <InputGroup>
            <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
            <h5>{quantity}</h5>
            <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
          </InputGroup>
          <span style={{ padding: 5 }}>|</span>
          <h5 onClick={props.removeItem}>Remove</h5>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </List.Item>
  );
};
export default CheckoutList;
