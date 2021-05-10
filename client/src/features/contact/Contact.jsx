import React from "react";
import {
  Typography,
  Toolbar,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Button,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import { Form } from "../forms/useForm";
import ContactForm from "../forms/ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  contactH4: {
    justifyContent: "center",
    display: "flex",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={classes.root} id="contact">
      <Typography className={classes.contactH4} variant="h4">
        Get In Touch
      </Typography>
      <Toolbar />
      <Grid container justify="center">
        <ContactForm />
      </Grid>
    </section>
  );
};

export default Contact;
