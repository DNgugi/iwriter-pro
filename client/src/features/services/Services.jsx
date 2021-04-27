import React from 'react';

import { Typography, Toolbar, Grid, MenuItem, Select, FormControl, InputLabel, TextField, FormControlLabel, Checkbox, Button, useTheme, makeStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Tick from '@material-ui/icons/Check';
import bg from '../../images/bg1.svg';
import { mergeClasses } from '@material-ui/styles';

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

const Services = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={classes.root} id="services">
      <Grid container>
        <Grid className={classes.bg} item xs='12' md='6'>

        </Grid>
        <Grid item xs='12' md='6'>
          <Typography variant='h4'>
            Our Services
          </Typography>
          <Toolbar />
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati asperiores aliquid nobis! Dolores officiis dolor adipisci tempore dolorem sapiente corporis nihil voluptate, cum at facilis amet velit atque illo ullam iusto consequatur. 
          </Typography>
          <Toolbar />
         <Grid container>
           <Grid item xs='12' md='6'>
           <List>
              <ListItem>
              <ListItemIcon><Tick /></ListItemIcon>
                <ListItemText>One</ListItemText>
              </ListItem>
              <ListItem>
              <ListItemIcon><Tick /></ListItemIcon>
                <ListItemText>Two</ListItemText>
              </ListItem>
              <ListItem>
              <ListItemIcon><Tick /></ListItemIcon>
                <ListItemText>Three</ListItemText>
              </ListItem>
            </List>
           </Grid>
           <Grid item xs='12' md='6'>
           <List>
              <ListItem>
                <ListItemIcon><Tick /></ListItemIcon>
                <ListItemText>Four</ListItemText>
              </ListItem>
              <ListItem>
              <ListItemIcon><Tick /></ListItemIcon>
                <ListItemText>Five</ListItemText>
              </ListItem>
              <ListItem>
              <ListItemIcon><Tick /></ListItemIcon>
                <ListItemText>Six</ListItemText>
              </ListItem>
            </List>
           </Grid>
         </Grid>
          
        </Grid>
      </Grid>
    </section>
  );
};

export default Services;