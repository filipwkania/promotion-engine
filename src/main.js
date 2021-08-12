import React, { useEffect, useReducer } from 'react';
import Header from './components/Header';
import { withStyles } from '@material-ui/core/styles';
import { ACTION, createAction, reducer, initialState } from './utils/reducer';
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
    alignItems: 'center',
    marginBottom: 16,
    minHeight: 36,
  },
  product: {
    margin: '0 4px',
  },
  label: {
    display: 'inline-block',
    minWidth: 100,
  },
});

const Main = ({ classes }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(createAction(ACTION.UPDATE_PRICE));
  }, [state.cart.length]);

  const addToCart = (product) => {
    dispatch(createAction(ACTION.ADD_TO_CART, product));
  };

  const removeFromCart = (productIndex) => {
    dispatch(createAction(ACTION.REMOVE_FROM_CART, productIndex));
  };

  return (
    <div className={classes.main}>
      <Header title='Promotion Engine' />
      <Paper className={classes.content}>
        <div className={classes.line}>
          <div>
            <span className={classes.label}>Products: </span>
            {state.products.map((p, index) => (
              <Button
                key={index}
                variant='contained'
                size='small'
                className={classes.product}
                onClick={() => addToCart(p)}
              >
                {p}
              </Button>
            ))}
          </div>
          <Button variant='outlined'>Add Product</Button>
        </div>
        <div className={classes.line}>
          <div>
            <span className={classes.label}>Promotions: </span>
            {state.promotions.map((p, index) => (
              <Button
                key={index}
                variant='contained'
                size='small'
                className={classes.product}
              >
                {p.getLabel()}
              </Button>
            ))}
          </div>
          <Button variant='outlined'>Add Promotion</Button>
        </div>
        <div className={classes.line}>
          <div>
            <span className={classes.label}>Cart: </span>
            {state.cart.map((p, index) => (
              <Button
                key={index}
                variant='contained'
                size='small'
                className={classes.product}
                onClick={() => removeFromCart(index)}
              >
                {p}
              </Button>
            ))}
          </div>
        </div>
        <div className={classes.line}>
          <div>
            <span className={classes.label}>Price: </span> {state.price}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Main);
