import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './footerStyle';

const Copyright = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <a href="mailto:ro.rivero1991@gmail.com">Rodrigo Rivero</a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
};

export default Copyright;
