// import React from 'react'
import About from "../components/AboutUs/about";
// import AboutFormula from "../components/AboutUs/our-formula";
import AboutPlans from "../components/AboutUs/our-process";
import AboutAccolades from "../components/AboutUs/we-believe";
import PropTypes from "prop-types";

const AboutUs = ({ darkMode }) => {
  AboutUs.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  return (
    <div>
      <div className="text-center text-[62px] h-screen flex items-center justify-center">
        <h1 className="">Wanna Know About Me?</h1>
      </div>
      <About />
      <AboutAccolades darkMode={darkMode} />
      <AboutPlans darkMode={darkMode} />
      {/* <AboutFormula /> */}
    </div>
  );
};

export default AboutUs;
