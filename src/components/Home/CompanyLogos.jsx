import PropTypes from "prop-types";
import { companyLogos } from "../../utils/data";
import { useState } from "react";

const CompanyLogos = ({ darkMode }) => {
  CompanyLogos.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  const [glowStyles, setGlowStyles] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setGlowStyles((prevGlowStyles) => ({
      ...prevGlowStyles,
      [index]: {
        background: `radial-gradient(600px circle at ${x}px ${y}px, ${
          darkMode
            ? "rgba(255, 255, 255, 0.14), transparent 40%"
            : "rgba(26, 69, 114, 0.12), transparent 40%"
        })`,
        opacity: 0.8,
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setGlowStyles((prevGlowStyles) => ({
      ...prevGlowStyles,
      [index]: {},
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row w-full justify-between px-10 my-[100px]">
      <h1 className="w-full lg:w-[40%] xl:w-[20%] text-[48px]">
        Brands I&apos;ve Worked with
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {companyLogos.map((logo, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center max-h-[140px] p-4 xl:px-5 2xl:px-[50px] bg-light-hover-background dark:bg-dark-hover-background rounded-xl overflow-hidden transition ease-in-out duration-300"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className="absolute inset-0 rounded-xl pointer-events-none transition-opacity ease-in-out duration-300"
              style={glowStyles[index] || {}}
            ></div>

            <img
              src={`./assets/brands/${darkMode ? "light" : "dark"}/${logo}.svg`}
              className="fill-light-foreground text-light-foreground dark:fill-dark-foreground w-full h-auto max-h-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
