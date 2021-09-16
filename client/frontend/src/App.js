import "./App.css";
import React from 'react';
import { useFormik } from "formik";
import axios from "axios";

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
        //alert(JSON.stringify(values, null, 2));
        //call some api?
        //const orderFormData = new FormData();
        // orderFormData.values = values;
        // console.log(orderFormData);
        axios({
          method: "post",
          url: "http://localhost:5000/orders",
          data: values,
          //headers: { "Content-Type": "multipart/form-data" },
        }).then(res => alert(res.data)).catch(e => alert(e));
        // axios.get('http://localhost:5000').then(response => alert(response.data)).catch(e => alert(e));
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
        {/* <a
          href="https://teambidii.co.ke"
          target="_blank"
          onClick={toggleHidden}
        >
          Log In
        </a> */}
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
            <form id="order-form" name="order-form" onSubmit={formik.handleSubmit}>
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
                <label htmlFor="instructions">Tell us about your project</label>
                <textarea
                  id="instructions"
                  name="instructions"
                  rows={5}
                  onChange={formik.handleChange}
                  value={formik.values.instructions}
                />
              </div>
              <div className="input-group">
                <label htmlFor="attachment">
                  Or upload your instructions(.pdf, .doc, .docx)
                </label>
                <input
                  type="file"
                  accept=".pdf, .docx, .doc"
                  id="attachment"
                  name="attachment"
                  onChange={formik.handleChange}
                  value={formik.values.attachment}
                />
              </div>
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
        <section id="services">
          <h2 className="title center">Our Services</h2>
          <div className="card one">
            <h3 className="card-title">Academic Writing</h3>
            <p className="card-body">
              We have over 5 years experience writing academic papers that
              exceed your expectations in quality
            </p>
          </div>
          <div className="card two">
            <h3 className="card-title">Research</h3>
            <p className="card-body">
              Struggling with research and data analysis on your project? We use
              modern approaches and tools to help you get great results
            </p>
          </div>

          <div className="card three">
            <h3 className="card-title">Proof Reading</h3>
            <p className="card-body">
              A fresh pair of eyes goes a long way in producing excellent
              writing. Our editors are experienced and will help you clarify and
              improve your work.
            </p>
          </div>
        </section>
        <section id="support">
          <div className="card">
            <h2>Need help?</h2>
            Call or WhatsApp us on the numbers below or shoot us an email. We are ready to help!
          </div>
          <div class="contacts">
            <p>
              <span class="material-icons">phone</span> 0716585138
            </p>
            <p>
              <span class="material-icons">whatsapp</span>{" "}
              <a href="https://wa.me/254716585138">0716585138</a>
            </p>
            <p>
              <span class="material-icons">email</span>{" "}
              <a href="mailto:help@iwriterpro.com">help@iwriterpro.com</a>
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p className="center">iWriter Pro &copy; { new Date().getFullYear()}. A <a href="https://teambidii.co.ke" target="_blank">Team Bidii Consulting</a> project.</p>
      </footer>
    </div>
  );
}

export default App;
