import React from 'react';
import { Formik, Form } from "formik";
import axios from "axios";



const OrderForm = () => {
  const validate = (values) => {
    const errors = {};
    //Validate name
    if (!values.name) {
      errors.name = "Your name is required";
    } else if (values.name.length < 2) {
      errors.name = "Name must be more than 1 letter";
    }

    //Validate email
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  
  const handleSubmit = (values, formProps) => {
    let data = new FormData();
    data.append("attachment", values.attachment);
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("instructions", values.instructions);

    axios
      .post("http://localhost:5000/orders", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => alert(res.data))
      .catch((e) => console.log(e));
    formProps.resetForm();
  };
 
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        attachment: "",
        instructions: "",
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(formProps) => (
        <Form>
          <p className="card">To help us get started on your project, fill in the form and hit submit. We will be in touch as soon as your message is read!</p>
      
          <div className="input-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              value={formProps.values.name}
            />
            {formProps.touched.name && formProps.errors.name ? (
              <span className="error-text">{formProps.errors.name}</span>
            ) : null}
          </div>
          <div className="input-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              // autoComplete="off"
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              value={formProps.values.email}
            />
            {formProps.touched.email && formProps.errors.email ? (
              <span className="error-text">{formProps.errors.email}</span>
            ) : null}
          </div>

          <div className="input-group">
            <label htmlFor="instructions">Tell us about your project</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={5}
              onChange={formProps.handleChange}
              value={formProps.values.instructions}
            />
          </div>
          <div className="input-group">
            <label htmlFor="attachment">
              Or upload your instructions(.pdf, .doc, .docx)
            </label>
            <input
              type="file"
              accept=".pdf, .docx, .doc"
              //id="attachment"
              name="attachment"
              onChange={(event) => {
                formProps.setFieldValue("attachment", event.target.files[0]);
              }}
            />
          </div>

          
          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;