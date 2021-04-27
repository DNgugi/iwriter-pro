import React from 'react';
import { Typography, Toolbar, Grid, MenuItem, Select, FormControl, InputLabel, TextField, FormControlLabel, Checkbox, Button, useTheme, makeStyles, Divider} from '@material-ui/core';

import Spacer from '../spacer/Spacer';
import Hero from '../hero/Hero';
import Services from '../services/Services';
import About from '../about/About';
import Pricing from '../pricing/Pricing';
import Process from '../process/Process';
import Testimonials from '../testimonials/Testimonials';
import Contact from '../contact/Contact';
import Copyright from '../copyright/Copyright';




const LandingPage = () => {
  return (
    <>
    <Hero />
    <Services />
    <About />
    <Pricing />


    <Process />

    <Contact />


    </>
  )};
    

export default LandingPage;