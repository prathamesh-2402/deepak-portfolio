import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import FilmMaking from './pages/FilmMaking';
import DigitalMarketing from './pages/DigitalMarketing';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import './App.css'
import Footer from './components/Home/Footer';

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
    <div className={`${darkMode ? "dark " : ""}w-full overflow-hidden transition-all duration-500 smooth-wrapper`}>
      <div className='grain'>
        <div className='grain-texture'></div>
      </div>
      <div className='flex flex-col items-center h-full w-full bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground transition-all duration-500 smooth-content'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/film-making" element={<FilmMaking />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs darkMode={darkMode} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App;
