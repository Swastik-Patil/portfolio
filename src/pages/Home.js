import React from "react";
import Navigation from "../components/Navigation";
import "../App.css";
import Skills from "./Skills";
import Footer from "./Footer";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  return (
    <>
      <section id="hero">
        <Navigation />
        <div className="container">
          <h1 className="hero-title anim_reveal">
            Hi, I'm &nbsp;
            <span className="text-color-main">Swastik.</span>
            <br />
            I'm a Full Stack Developer.
          </h1>
          <p className="hero-cta anim_reveal">
            <span className="cta-btn cta-btn--hero">
              <a href="/#skills">Skills</a>
            </span>
            <span className="cta-btn cta-btn--hero">
              <a href="/#projects">Projects</a>
            </span>
            <span className="cta-btn cta-btn--hero">
              <a href="/#about">About</a>
            </span>
            <span className="cta-btn cta-btn--hero">
              <a href="/#contact">Contact</a>
            </span>
          </p>
        </div>
      </section>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
