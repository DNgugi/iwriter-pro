import "./App.css";
import React from 'react';
import {  useFormik }from "formik";

function App() {
  const toggleHidden = () => {
    document.getElementById("main-nav").classList.toggle("hidden");
  };
  const validate = (values) => {
    const errors = {};
    //Validate name
    if (!values.name) {
      errors.name = 'Your name is required';
    } else if (values.name.length < 2) {
      errors.name = 'Name must be more than 1 letter';
    }

    //Validate email
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }


    return errors
  }
  const formik = useFormik(
    {
      initialValues: {
        name: "",
        email: "",
        attachment: "",
        instructions: "",
      },
      validate,
      onSubmit: (values) => {
//Do something with values here
        alert(JSON.stringify(values, null, 2));
        //call some api?
        
        formik.resetForm();
      },
    }
  );

  return (
    <div className="App">
      <header>
        <h2 className="brand">iWriter Pro</h2>
        <span className="material-icons" onClick={toggleHidden}>
          menu
        </span>
      </header>
      <aside id="main-nav" className="hidden">
        <a href="#welcome" onClick={toggleHidden}>
          Welcome
        </a>
        <a href="#services" onClick={toggleHidden}>
          Services
        </a>
        <a href="#support" onClick={toggleHidden}>
          Support{" "}
        </a>
        <a
          href="https://teambidii.co.ke"
          target="_blank"
          onClick={toggleHidden}
        >
          Log In
        </a>
      </aside>
      <main>
        <section id="welcome">
          <div className="text">
            <h2>Need pro writers?</h2>
            <p>
              With over 5 years experience, we are the best for your personal,
              academic and business writing needs.
            </p>
          </div>
          <div className="form">
            <form onSubmit={formik.handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <span className="error-text">{formik.errors.name}</span>
                ) : null}
              </div>
              <div className="input-group">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  // autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="error-text">{formik.errors.email}</span>
                ) : null}
              </div>

              <div className="input-group">
                <label htmlFor="instructions">
                  Tell us about your project
                </label>
                <textarea
                  id="instructions"
                  name="instructions"
                  rows={5}
                  onChange={formik.handleChange}
                  value={formik.values.instructions}
                />
              </div>
              <div className="input-group">
                <label htmlFor="attachment">Or upload your instructions(.pdf, .doc, .docx)</label>
                <input
                  type="file"
                  accept=".pdf, .docx, .doc"
                  id="attachment"
                  name="attachment"
                  onChange={formik.handleChange}
                  value={formik.values.attachment}
                />
              </div>
              <button className="btn" type="submit">Submit</button>
            </form>
          </div>
        </section>
        <section id="services"></section>
        <section id="support"></section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
