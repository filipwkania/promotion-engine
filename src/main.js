import React from 'react';
import Header from './components/Header';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  main: {
    width: 966,
    height: '100vh',
    margin: '0 auto',
    backgroundColor: '#dce4e1',
  },
});

const Main = () => {
  return (
    <div>
      <Header title='Promotion Engine' />
    </div>
  );
};

export default withStyles(styles)(Main);
