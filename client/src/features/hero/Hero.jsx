import React from 'react';
import { Typography, Toolbar, Grid, MenuItem, Select, FormControl, InputLabel, TextField, FormControlLabel, Checkbox, Button, useTheme, makeStyles, Divider} from '@material-ui/core';
import bg from '../../images/bg2.svg';


const useStyles = makeStyles(theme => ({
  root: {
   
    marginBottom: theme.spacing(20),

    // backgroundImage: `url(${bg})`,
    //     backgroundSize: 'contain',
    //     backgroundRepeat: 'no-repeat',
   
    // backgroundPosition: 'right',
    // [theme.breakpoints.down('sm')]: {
    //   backgroundColor: theme.palette.secondary.main,
    // },
    [theme.breakpoints.up('md')]: {
    //   backgroundColor: theme.palette.primary.main,
        minHeight: '80vh',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
    },
    // [theme.breakpoints.up('lg')]: {
    //   backgroundColor: theme.palette.error.main,
    // },
  },
  heroText: {
    alignSelf: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    //   backgroundColor: theme.palette.secondary.main,
    heroText: {
      marginBottom: theme.spacing(6),
      marginTop: theme.spacing(6),


    },
  },
  heroH3: {
    backgroundColor: theme.palette.error.main,
    color: '#ffffff',
    maxWidth: 360,
  },
  heroH4: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    maxWidth: 360,
    margin: theme.spacing(1)

  }  
 


  
}));

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={classes.root} id='hero'>
      <Grid container spacing={2}>
        <Grid className={classes.heroText}item xs='12' md='7'>
          <Typography className={classes.heroH3} variant='h4'>
            Stuck with your Homework? 
          </Typography>
          <Typography  className={classes.heroH4} variant='h5'>
            We've got you covered!
          </Typography>
        </Grid>
        <Grid item xs='12'  md='5'>
                  
          <form className={classes.form} noValidate>
            <Typography variant='h5' gutterBottom='4'>Place Your Order</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color='primary'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth='true'>
              <InputLabel id="selected-academic-level">Academic Level</InputLabel>
        <Select
          labelId="selected-academic-level"
          id="academic-level"
          value=""
          label="Academic Level"
        >
          <MenuItem value="">
            <em>Select academic level</em>
          </MenuItem>
          <MenuItem value='High School'>High School</MenuItem>
          <MenuItem value='College'>College</MenuItem>
          <MenuItem value='University'>University</MenuItem>
          <MenuItem value='Masters'>Masters</MenuItem>
          <MenuItem value='PhD'>PhD</MenuItem>
        </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth='true'>
              <InputLabel id="selected-subject-label">Subject</InputLabel>
        <Select
          labelId="selected-subject-label"
          id="select-subject"
          value=''
          label="Subject"
        >
          <MenuItem value="">
            <em>Select a subject</em>
          </MenuItem>
          <MenuItem value='English'>English</MenuItem>
          <MenuItem value='Math'>Math</MenuItem>
          <MenuItem value='Chemistry'>Chemistry</MenuItem>
          <MenuItem value='Business Studies'>Business Studies</MenuItem>
          <MenuItem value='Agriculture'>Agriculture</MenuItem>
        </Select>
              </FormControl>

            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth='true'>
              <InputLabel id="selected-time-label">Time</InputLabel>
        <Select
          labelId="selected-time-label"
          id="select-time"
          value=''
          label="Time"
        >
          <MenuItem value="">
            <em>How soon do you need this done?</em>
          </MenuItem>
          <MenuItem value='1 hour'>1 hour</MenuItem>
          <MenuItem value='3 hours'>3 hours</MenuItem>
          <MenuItem value='6 hours'>6 hours</MenuItem>
          <MenuItem value='12 hour'>12 hours</MenuItem>
        </Select>
              </FormControl>

            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5'>$ 8.75</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="acceptTerms" color="primary" />}
                label="I agree to the terms of service"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
Let's Go         </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
                  
              </Grid>
            </Grid>
        

    </section>
  );
};

export default Hero;