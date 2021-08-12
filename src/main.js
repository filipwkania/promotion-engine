import React from 'react';
import Header from './components/Header';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  main: {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
    backgroundColor: '#dce4e1',
  },
  content: {
    width: 966,
  },
});

const Main = ({ classes }) => {
  return (
    <div className={classes.main}>
      <Header title='Promotion Engine' />
      <div className={classes.content}>
        <div>
          <div>Product List</div>
          <button>Add Product</button>
        </div>
        <div>
          <div>Promotion List</div>
          <button>Add Promotion</button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
