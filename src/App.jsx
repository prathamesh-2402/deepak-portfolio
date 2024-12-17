import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Home/Navbar';
import HeroSection from './components/Home/HeroSection';
import CompanyDetails from './components/Home/CompanyDetails';
import Service from './components/Home/Service';
import Footer from './components/Home/Footer';

import { homeServiceData1, homeServiceData2 } from './utils/data';
import Companylogos from './components/Home/Companylogos';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let savedMode = localStorage.getItem('darkMode');
    if (!savedMode) {
      savedMode = "dark";
      setDarkMode(true);
      localStorage.setItem("displayMode", savedMode);
    }
  }, []);

  return (
    <div className={`${darkMode ? "dark " : ""}w-full  transition-all duration-500 smooth-wrapper`}>
      <div className='grain'>
        <div className='grain-texture'></div>
      </div>
      <div className='flex flex-col items-center h-full w-full bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground transition-all duration-500 smooth-content'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection/>
        <CompanyDetails/>
        <Service serviceData={homeServiceData1}/>
        <Service serviceData={homeServiceData2}/>

        <Companylogos darkMode={darkMode}/>

        <Footer/>
      </div>
    </div>
  )
}

export default App;
