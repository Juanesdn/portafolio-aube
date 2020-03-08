import React, { useState } from "react";
import { Navbar, Hero, Portfolio, Footer, CallToAction, About } from "../index";
import { SideDrawer, Backdrop } from "../navbar/components";
import "./App.scss";

const App = () => {
  let backdrop;

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggle = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div className="app">
      <div className="hero" id="home">
        <Navbar drawerClickHandler={drawerToggle} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <div className="spacer" />
        <Hero />
      </div>
      <Portfolio />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
