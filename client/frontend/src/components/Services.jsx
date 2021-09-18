import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <h2 className="title center">Our Services</h2>
      <div className="card one">
        <h3 className="card-title">Academic Writing</h3>
        <p className="card-body">
          We have over 5 years experience writing academic papers that exceed
          your expectations in quality
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
          A fresh pair of eyes goes a long way in producing excellent writing.
          Our editors are experienced and will help you clarify and improve your
          work.
        </p>
      </div>
    </section>
  );
};

export default Services;