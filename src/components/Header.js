import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const Header = ({ title }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
