import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Home/Navbar';
import HeroSection from './components/Home/HeroSection';
import CompanyDetails from './components/Home/CompanyDetails';
import Service from './components/Home/Service';
import Footer from './components/Home/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let savedMode = localStorage.getItem('darkMode');
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
  }, []);

  const serviceData1 = {
    id: 1,
    title: "Digital Marketing",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, doloribus.",
    image: "https://images.pexels.com/photos/2097103/pexels-photo-2097103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 2023",
    location: "New York, USA",
  }

  const serviceData2 = {
    id: 2,
    title: "Film Making",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, doloribus.",
    image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Dec 2024",
    location: "Switzerland",
  }

  return (
    <div className={`${darkMode ? "dark " : ""}w-full  transition-all duration-500 smooth-wrapper`}>
      <div className='grain'>
        <div className='grain-texture'></div>
      </div>
      <div className='flex flex-col items-center h-full w-full bg-[#e6e3ee] dark:bg-[#0e1012] dark:text-white transition-all duration-500 smooth-content'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection/>
        <CompanyDetails/>
        <Service serviceData={serviceData1}/>
        <Service serviceData={serviceData2}/>
        <HeroSection/>

        <HeroSection/>

        <Footer/>
      </div>
    </div>
  )
}

export default App;
