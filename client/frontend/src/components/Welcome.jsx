import React from 'react';
import OrderForm from "../components/forms/OrderForm";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="text">
        <h2>Need pro writers?</h2>
        <p>
          With over 5 years experience, we are the best for your personal,
          academic and business writing needs.
        </p>
      </div>
      <div className="form">
        <OrderForm />
      </div>
    </section>
  );
};

export default Welcome;