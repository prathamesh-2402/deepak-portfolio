import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import './App.css'
import Footer from './components/Home/Footer';
import FilmMaking from './pages/FilmMaking/FilmMaking';
import CaseStudy from './pages/FilmMaking/CaseStudy';
import CorporateVideos from './pages/FilmMaking/CorporateVideos';
import Commercial from './pages/FilmMaking/Commercial';
import Documentary from './pages/FilmMaking/Documentary';
import ShortFilm from './pages/FilmMaking/ShortFilm';
import MusicVideo from './pages/FilmMaking/MusicVideo';
import EditingColorGrading from './pages/FilmMaking/EditingColorGrading';
import SmmServices from './pages/DigitalMarketing/SmmServices';
import SocialMedia from './pages/DigitalMarketing/SocialMedia';
import SeoServices from './pages/DigitalMarketing/SeoServices';
import ContentMarketing from './pages/DigitalMarketing/ContentMarketing';
import PpcServices from './pages/DigitalMarketing/PpcServices';
import WebDesign from './pages/DigitalMarketing/WebDesign';
import VideoProduction from './pages/DigitalMarketing/VideoProduction';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    let savedMode = localStorage.getItem('darkMode');
    if (!savedMode) {
      savedMode = "dark";
      setDarkMode(true);
      localStorage.setItem("displayMode", savedMode);
    }
  }, []);

  return (
    <div className={`${darkMode ? "dark " : ""}w-full transition-all duration-500 smooth-wrapper`}>
      <div className='grain'>
        <div className='grain-texture'></div>
      </div>
      <div className='flex flex-col items-center justify-between min-h-screen w-full overflow-clip bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground transition-all duration-500 smooth-content'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/film-making" element={<FilmMaking darkMode={darkMode} />} />
          <Route path="/film-making/corporate-videos" element={<CorporateVideos />} />
          <Route path="/film-making/commercial" element={<Commercial />} />
          <Route path="/film-making/documentary" element={<Documentary />} />
          <Route path="/film-making/short-film" element={<ShortFilm />} />
          <Route path="/film-making/music-video" element={<MusicVideo />} />
          <Route path="/film-making/editing-and-color-grading" element={<EditingColorGrading />} />

          <Route path="/film-making/:category/:videoId" element={<CaseStudy />} />

          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/digital-marketing/smm-services" element={<SmmServices darkMode={darkMode} />} />
          <Route path="/digital-marketing/social-media-management" element={<SocialMedia darkMode={darkMode} />} />
          <Route path="/digital-marketing/seo-services" element={<SeoServices darkMode={darkMode} />} />
          <Route path="/digital-marketing/content-marketing" element={<ContentMarketing darkMode={darkMode} />} />
          <Route path="/digital-marketing/ppc-services" element={<PpcServices darkMode={darkMode} />} />
          <Route path="/digital-marketing/web-design-services" element={<WebDesign darkMode={darkMode} />} />
          <Route path="/digital-marketing/video-production-&-editing" element={<VideoProduction darkMode={darkMode} />} />

          <Route path="/about" element={<AboutUs darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactUs darkMode={darkMode} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App;
