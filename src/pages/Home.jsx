// import React from 'react'
import { useRef } from "react";
import PropTypes from "prop-types";
import HeroSection from "../components/Home/HeroSection";
import CompanyDetails from "../components/Home/CompanyDetails";
import Service from "../components/Home/Service";
import CompanyLogos from "../components/Home/CompanyLogos";
import { Scrollbar } from "smooth-scrollbar-react";
import { homeServiceData1, homeServiceData2 } from "../utils/data";
import CallToAction from "../components/Home/CallToAction";

const Home = ({ darkMode }) => {
    Home.propTypes = {
        darkMode: PropTypes.bool.isRequired,
    };
    const scrollbar = useRef(null);

    return (
        <Scrollbar ref={scrollbar} damping={0.01}>
            <div className="overflow-hidden w-full">
                <HeroSection />
                <CompanyDetails darkMode={darkMode} />
                <Service serviceData={homeServiceData1} />
                <Service serviceData={homeServiceData2} />
                <CompanyLogos darkMode={darkMode} />
                <CallToAction />
            </div>
        </Scrollbar>
    );
};

export default Home;
