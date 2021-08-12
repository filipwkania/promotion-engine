import React, { useReducer } from 'react';
import Header from './components/Header';
import { withStyles } from '@material-ui/core/styles';
import { reducer } from './utils/reducer';
import { Paper, Button } from '@material-ui/core';

const styles = () => ({
  main: {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
    backgroundColor: '#dce4e1',
  },
  content: {
    width: 966,
    margin: '2%',
    padding: 16,
  },
  line: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  product: {
    margin: '0 4px',
  },
});

const initialState = {
  price: 0,
  products: ['A', 'B', 'C'],
  promotions: [],
  cart: [],
};

const Main = ({ classes }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={classes.main}>
      <Header title='Promotion Engine' />
      <Paper className={classes.content}>
        <div className={classes.line}>
          <div>
            Products:{' '}
            {state.products.map((p) => (
              <Button
                variant='contained'
                size='small'
                className={classes.product}
              >
                {p}
              </Button>
            ))}
          </div>
          <Button variant='outlined'>Add Product</Button>
        </div>
        <div className={classes.line}>
          <div>Promotions: </div>
          <Button variant='outlined'>Add Promotion</Button>
        </div>
        <div className={classes.line}>
          <div>Cart: </div>
          <Button variant='outlined'>Clear Cart</Button>
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Main);
