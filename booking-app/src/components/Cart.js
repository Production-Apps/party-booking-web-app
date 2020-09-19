import React, { useState } from 'react';
import 'date-fns';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Cart = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  );
  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  //If there are no items in the cart then show empty text
  if (props.items.length == 0) {
    return (
      <div>
        <h1>Empty Cart.</h1>
      </div>
    );
  }

  const placeOrder = () => {
    console.log('Selected date: ', selectedDate);
    setisLoading(true);
  };

  if (isLoading) {
    return (
      <div>
        <h1>Thank You</h1>
        <p>Order successful.</p>
      </div>
    );
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {props.items.map((item) => (
        <h1>{item.name}</h1>
      ))}
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={placeOrder}>
          Place order
        </Button>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default Cart;
