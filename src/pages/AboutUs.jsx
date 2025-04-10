// import React from 'react'
import About from "../components/AboutUs/about";
import AboutBelieve from "../components/AboutUs/we-believe";
import PropTypes from "prop-types";

const AboutUs = ({ darkMode }) => {
  AboutUs.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };
  
  return (
    <div>
      <div className="text-center text-[62px] h-screen flex items-center justify-center">
        <h1 className="">Wanna Know About Us?</h1>
      </div>
      <About />
      <AboutBelieve darkMode={darkMode} />
    </div>
  );
};

export default AboutUs;
