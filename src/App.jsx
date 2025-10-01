import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import "./App.css";
import Footer from "./components/Home/Footer";
import ICNGoa from "./pages/Competitions/ICNGoa";
import ICNMumbai from "./pages/Competitions/ICNMumbai";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    let savedMode = localStorage.getItem("darkMode");
    if (!savedMode) {
      savedMode = "dark";
      setDarkMode(true);
      localStorage.setItem("displayMode", savedMode);
    }
  }, []);

  return (
    <div
      className={`${
        darkMode ? "dark " : ""
      }w-full transition-all duration-500`}
    >
      <div className="grain">
        <div className="grain-texture"></div>
      </div>
      <div className="flex flex-col items-center justify-start min-h-screen w-full overflow-clip bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground transition-all duration-500">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />

            <Route path="/icn-goa" element={<ICNGoa />} />
            <Route path="/icn-mumbai" element={<ICNMumbai />} />

            <Route path="/about" element={<AboutUs darkMode={darkMode} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route
              path="/contact"
              element={<ContactUs darkMode={darkMode} />}
            />
          </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
