import { aboutUs } from "../../utils/data";
import PropTypes from "prop-types";

const AboutBelieve = ({ darkMode }) => {
  AboutBelieve.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-[150px]">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-3xl  leading-none tracking-tight sm:text-[52px] md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">We</span>
          </span>{" "}
          Believe
        </h2>
        <p className="text-base md:text-lg">
          Video is more than just a visual experience, it’s one that touches
          souls. We amplify this power through three core elements.
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3 mt-2">
        {aboutUs.believe.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-24 h-24 mb-4 font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 dark:bg-dark-hover-background sm:mx-auto">
              <img src={`../${darkMode ? "dark" : "light"}/${item.icon}${darkMode ? "-dark" : "-light"}.svg`} className={`${index === 0 ? "w-[80px]" : "w-[60px]"}`}/>
            </div>
            <h6 className="mb-2 font-semibold text-xl leading-5">{item.label}</h6>
            <p className="max-w-md mb-3 text-sm sm:mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBelieve;
