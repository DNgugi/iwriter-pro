import React from 'react';
import { Typography, Toolbar, Grid, MenuItem, Select, FormControl, InputLabel, TextField, FormControlLabel, Checkbox, Button, useTheme, makeStyles, Divider} from '@material-ui/core';

const useStyles = makeStyles(theme =>({
  root: {
    marginTop: theme.spacing(10),
  },
  contactH4: {
    justifyContent: 'center',
    display: 'flex'
  },
  
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={classes.root} id="contact">
      <Typography className={classes.contactH4} variant='h4'>
            Get In Touch
      </Typography>
      <Toolbar />
      <Grid container justify='center'>
        <Grid item xs='12' md='6'>
        <form noValidate>
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
            
          </Grid>
          <Toolbar />
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

export default Contact;