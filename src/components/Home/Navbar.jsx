import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
// import NavbarDropdown from "./NavbarDropdown";
import "./styles/scrollbar.css";

gsap.registerPlugin(useGSAP);

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef();
  const menu = useRef();

  Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
  };

  useEffect(() => {
    gsap.set(menu.current, {
      display: "none",
      y: "-120%",
    });
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.inOut",
        },
      });

      if (isOpen) {
        gsap.set(menu.current, {
          display: "block",
          y: "-120%",
        });

        tl.to(menu.current, {
          y: "0%",
        });
      } else {
        if (menu.current.style.display !== "none") {
          tl.to(menu.current, {
            y: "-120%",
          }).set(
            menu.current,
            {
              delay: 0.4,
              display: "none",
            },
            ">"
          );
        }
      }
    },
    { dependencies: [isOpen], scope: container }
  );

  return (
    <div
      className="sticky top-0 flex justify-between items-center w-full px-3 md:px-10 py-4 z-50 bg-light-navbar dark:bg-dark-navbar text-light-foreground dark:text-dark-foreground backdrop-blur-2xl"
      ref={container}
    >
      {/* <div className="hidden lg:flex items-center gap-2">
        <Link
          to="/"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
        >
          Home
        </Link>
        <div
          className="relative group"
          onMouseEnter={() => setActiveDropdown("film")}
        >
          <Link
            to="/film-making"
            onClick={() => setActiveDropdown(null)}
            className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          >
            Film Making
          </Link>
          <div
            className="absolute top-full pt-2"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {activeDropdown === "film" && (
              <NavbarDropdown
                menu="film-making"
                dropdownVisible={true}
                setDropdownVisible={() => {}}
              />
            )}
          </div>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setActiveDropdown("digital")}
        >
          <Link
            to="/digital-marketing"
            onClick={() => setActiveDropdown(null)}
            className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          >
            Digital Marketing
          </Link>
          <div
            className="absolute top-full pt-2"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {activeDropdown === "digital" && (
              <NavbarDropdown
                menu="digital-marketing"
                dropdownVisible={true}
                setDropdownVisible={() => {}}
              />
            )}
          </div>
        </div>
      </div> */}
      {/* <div className="h-[50px] w-auto"> */}
      {/* <img
          src="/logoNameCropped.webp"
          className="w-full h-full object-cover"
          alt="Logo"
        /> */}
      <Link to="/" className="text-4xl font-bold font-sans mr-1">
        Deepak Jha
      </Link>
      {/* </div> */}
      <div className="hidden lg:flex items-center gap-2">
        <Link
          to="/about"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
        >
          About Me
        </Link>
        <Link
          to="/gallery"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
        >
          Contact
        </Link>
        <button
          className={`${
            darkMode ? "py-3 px-3" : "py-[9px] px-[9px]"
          } rounded-3xl hover:bg-light-hover-background dark:hover:bg-dark-hover-background transition-all duration-300`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <img
            src={`/${darkMode ? "dark" : "light"}.svg`}
            alt="Toggle theme"
            className={`${darkMode ? "h-[18px] w-[18px]" : "h-6 w-6"}`}
          />
        </button>
      </div>
      <div className="flex lg:hidden items-center gap-2">
        <button
          className={`${
            darkMode ? "py-3 px-3" : "py-[9px] px-[9px]"
          } rounded-3xl hover:bg-light-hover-background dark:hover:bg-dark-hover-background transition-all duration-300`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <img
            src={`/${darkMode ? "dark" : "light"}.svg`}
            alt="Toggle theme"
            className={`${darkMode ? "h-[18px] w-[18px]" : "h-6 w-6"}`}
          />
        </button>
        <button
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[90%] h-[310px] overflow-y-scroll px-2 py-6 transition z-10 bg-white dark:bg-black rounded-3xl custom-scrollbar scroll-my-4"
        role="dialog"
        aria-modal="true"
        ref={menu}
      >
        <div className="flex flex-col items-center w-full">
          <Link
            to="/"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
