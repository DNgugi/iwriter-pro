import "./App.css";
import React from 'react';

import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Header />
      <MainNav />
      <main>
        <Welcome />
        <Services />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;
