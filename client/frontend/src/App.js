import "./App.css";
import React from 'react';
import {  Formik }from "formik";

function App() {
  const toggleHidden = () => {
    document.getElementById("main-nav").classList.toggle("hidden");
  };

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
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};

                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));

                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,

                errors,

                touched,

                handleChange,

                handleBlur,

                handleSubmit,

                isSubmitting,

                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  {errors.email && touched.email && errors.email}

                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />

                  {errors.password && touched.password && errors.password}

                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
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
