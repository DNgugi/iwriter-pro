import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import React from "react";
import { useForm, Form } from "./useForm";
import { MuiPhoneInput } from "material-ui-phone-number";
const initialValues = {
  fullName: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const { values, setValues, handleChange } = useForm(initialValues);
  return (
    <Form>
      <Grid container justify="center">
        <Grid item xs="12" sm="6">
          <TextField
            // error
            // helperText="Name cannot include numbers"
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            required
            type="text"
          />
          <TextField
            // error
            // helperText="Invalid email"
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            type="email"
          />

          <TextField
            variant="outlined"
            label="Message"
            name="message"
            multiline
            rows="5"
            value={values.message}
            onChange={handleChange}
            required
            type="text"
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default ContactForm;
