import React from 'react';
import bg from '../../images/bg.svg';
import { Typography, Toolbar, Grid, MenuItem, Select, FormControl, InputLabel, TextField, FormControlLabel, Checkbox, Button, useTheme, makeStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
        minHeight: '80vh',
        marginBottom: theme.spacing(20)

    },
  bg: {
    backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'
  }

  }  
 ));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={classes.root} id="about">
      <Grid container>
        <Grid item xs='12' md='6'>
        <Typography variant='h4'>
            About Us
          </Typography>
          <Toolbar />
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati asperiores aliquid nobis! Dolores officiis dolor adipisci tempore dolorem sapiente corporis nihil voluptate, cum at facilis amet velit atque illo ullam iusto consequatur. Ex eius reprehenderit consequuntur saepe quod ducimus quasi ad laboriosam iste cum excepturi assumenda, qui vero odio eligendi deleniti natus dolores doloremque quam debitis corrupti! 
          </Typography>
          <Toolbar />
          <Button variant='contained' color='secondary'>Learn More</Button>
        </Grid>
        <Grid className={classes.bg}item xs='12' md='6'>

        </Grid>
      </Grid>
    </section>
  );
};

export default About;