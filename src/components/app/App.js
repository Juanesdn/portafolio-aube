import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.scss";
import Logo from "../../images/logo.svg";
import PeopleIcon from "../../images/people.svg";
import xpWebsite from "../../images/xp-website.png";

const App = () => {
  return (
    <div>
      <header id="home">
        <nav>
          <a href="#home">
            <img src={Logo} alt="logo" />
          </a>
          <ul>
            <li>
              <Link
                activeClass="active"
                className="link"
                to="portfolio"
                spy={true}
                smooth={true}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="link"
                to="about"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="link"
                to="contact-us"
                spy={true}
                smooth={true}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="row">
          <div className="column">
            <h1>You dream it, we make it</h1>
            <h4>
              Aube Design, the new Start Up that came to improve and innovate on
              the way companies leave a mark regardless the market or public
              that they want to reach.
            </h4>
            <a href="#" className="btn__outline">
              Get Started
            </a>
          </div>
          <div className="column">
            <img src={PeopleIcon} alt="people" />
          </div>
        </div>
      </header>
      {
        //------------------------------ PortFolio --------------------------
      }
      <div className="portfolio" id="portfolio">
        <h2>Our recent work</h2>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
        <div className="websites">
          <div className="container">
            <img src={xpWebsite} alt="xp-logo" className="image" />
            <div className="inner">
              <h3>Website for a gamer community</h3>
              <a href="https://globalxp.org/">Visit</a>
            </div>
          </div>
        </div>
      </div>
      {
        //------------------------------ About --------------------------
      }
      <div className="about" id="about">
        <h2>Who we are</h2>
        <h3>
          #Aube Design is a StartUp that creates and Designs everything related
          with the Web. Content Design, App Design, Api, Responsive Design and
          Programming to bring every tool to the customer.
        </h3>
      </div>
      <div className="callToAction" id="contact-us">
        <h2>Get in contact with us!</h2>
        <a href="" className="btn__filled">
          Get Started
        </a>
      </div>
      <footer>
        <p>© 2020 Aube</p>
        <div className="footerPages">
          <a className="link" onClick={() => scroll.scrollToTop()}>
            Home
          </a>
          <Link
            activeClass="active"
            className="link"
            to="portfolio"
            spy={true}
            smooth={true}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            className="link"
            to="about"
            spy={true}
            smooth={true}
          >
            About
          </Link>
          {/* <a href="#">Terms</a>
          <a href="#">Privacy</a> */}
        </div>
      </footer>
    </div>
  );
};

export default App;
