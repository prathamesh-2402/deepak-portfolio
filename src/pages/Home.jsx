// import React from 'react'
import PropTypes from 'prop-types';
import HeroSection from '../components/Home/HeroSection'
import CompanyDetails from '../components/Home/CompanyDetails'
import Service from '../components/Home/Service'
import CompanyLogos from '../components/Home/CompanyLogos'

import { homeServiceData1, homeServiceData2 } from '../utils/data';
import CallToAction from '../components/Home/CallToAction';

const Home = ({ darkMode }) => {
    Home.propTypes = {
        darkMode: PropTypes.bool.isRequired
    }
    return (
        <div className='overflow-hidden'>
            <HeroSection />
            <CompanyDetails />
            <Service serviceData={homeServiceData1} />
            <Service serviceData={homeServiceData2} />
            <CompanyLogos darkMode={darkMode} />
            <CallToAction />
        </div>
    )
}

export default Home