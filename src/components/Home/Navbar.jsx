// import React from "react";
import PropTypes from 'prop-types';

function Navbar({ darkMode, setDarkMode }) {
    Navbar.propTypes = {
        darkMode: PropTypes.bool.isRequired,
        setDarkMode: PropTypes.func.isRequired
    }
    return (
        <div className="sticky top-0 flex justify-between items-center w-full px-10 py-4 z-10 bg-transparent backdrop-blur-2xl">
            <div className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Film Making
                </button>
                <button className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Digital Marketing
                </button>
            </div>
            <div className="text-2xl text-[#1c4571] dark:text-gray-50">Portfolio</div>
            <div className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Instagram
                </button>
                <button className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Email
                </button>
                <button
                    className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "Light" : "Dark"}
                </button>
            </div>
        </div>
    );
}

export default Navbar;
