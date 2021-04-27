import React from 'react';
import { Link, Typography, useTheme, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme =>({
  root: {
    marginTop: theme.spacing(10),
  }
}));


const Copyright = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Typography className={classes.root} variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
     iWriter Pro
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
};

export default Copyright;


