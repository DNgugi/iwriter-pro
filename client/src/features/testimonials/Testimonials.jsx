import React from 'react';
import { Card, CardContent, CardMedia, CardActions, CardActionArea, Button, Toolbar, Typography, Grid, useTheme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
  root: {
    marginBottom: theme.spacing(20),

  },
  testimonial: {
    display: 'flex',
    justifyContent: 'center'
},
  testimonialH4: {
    justifyContent: 'center',
    display: 'flex'
  }

 

}));

const Testimonials = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={classes.root} id='testimonials'>
                <Typography className={classes.testimonialH4} variant='h4'>Testimonials</Typography>
    <Toolbar />
      <Grid className={classes.testimonial} container>
        <Grid item xs='12' sm='8' md='6'>
          <Card>
      <CardActionArea>
        <CardMedia
          image="https://source.unsplash.com/random"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Duncan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, deserunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquam!
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>          

        </Grid>
      </Grid>
    </section>
  );
};

export default Testimonials;