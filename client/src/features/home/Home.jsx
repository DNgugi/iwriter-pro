import React from "react";
import About from "../about/About";
import Hero from "../hero/Hero";
import Pricing from "../pricing/Pricing";
import Process from "../process/Process";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Process />
      <Pricing />
    </div>
  );
};

export default Home;
