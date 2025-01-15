// import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";

gsap.registerPlugin(useGSAP);

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState({ film: false, digital: false });
  const container = useRef();
  const menu = useRef();

  Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
  };

  const handleMouseEnter = (key) => {
    setDropdown((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setTimeout(() => {
      setDropdown((prev) => ({ ...prev, [key]: false }));
    }, 150); // Small delay to account for pointer movement
  };

  useGSAP(
    () => {
      gsap.set(menu.current, { display: "block" });
      if (isOpen) {
        gsap.from(menu.current, {
          y: "-=330",
          duration: 1,
          ease: "none",
        });
      }
      if (!isOpen) {
        gsap.timeline(menu.current, {
          y: "+=330",
          duration: 1,
          ease: "none",
        });
        gsap.set(menu.current, { display: "none" });
      }
    },
    { dependencies: [isOpen], scope: container }
  );

  return (
    <div
      className="sticky top-0 flex justify-between items-center w-full px-10 py-4 z-50 bg-light-navbar dark:bg-dark-navbar text-light-foreground dark:text-dark-foreground backdrop-blur-2xl"
      ref={container}
    >
      <div className="hidden md:flex items-center gap-2">
        <Link
          to="/"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
        >
          Home
        </Link>
        <div className="relative"
          onMouseEnter={() => handleMouseEnter("film")}
          onMouseLeave={() => handleMouseLeave("film")}
        >

          <Link
            to="/film-making"
            className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          >
            Film Making
          </Link>
          {dropdown.film && (
            <NavbarDropdown
              menu="film-making"
              dropdownVisible={dropdown.film}
              setDropdownVisible={(visible) =>
                setDropdown((prev) => ({ ...prev, film: visible }))
              }
            />
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("digital")}
          onMouseLeave={() => handleMouseLeave("digital")}
        >
          <Link
            to="/digital-marketing"
            className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          >
            Digital Marketing
          </Link>
          {dropdown.digital && (
            <NavbarDropdown
              menu="digital-marketing"
              dropdownVisible={dropdown.digital}
              setDropdownVisible={(visible) =>
                setDropdown((prev) => ({ ...prev, digital: visible }))
              }
            />
          )}
        </div>
      </div>
      <div className="h-[50px] w-auto"><img src="./logoNameCropped.webp" className="w-full h-full object-cover" /></div>
      <div className="hidden md:flex items-center gap-2">
        <Link
          to="/about"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
        >
          Contact Us
        </Link>
        <button
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
      <div className="flex md:hidden items-center gap-2">
        <button
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
        <button
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[90%] px-2 py-6 transition z-10 bg-white dark:bg-black rounded-3xl`}
        role="dialog"
        aria-modal="true"
        ref={menu}
      >
        <div className="flex flex-col items-center w-full">
          <a
            href="#"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
          >
            Features
          </a>
          <a
            href="#"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
          >
            Company
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
