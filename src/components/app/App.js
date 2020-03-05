import React from "react";
import { Navbar, Hero, Portfolio, Footer, CallToAction, About } from "../index";
import "./App.scss";

const App = () => {
  return (
    <div>
      <header id="home">
        <Navbar />
        <Hero />
      </header>
      <Portfolio />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
