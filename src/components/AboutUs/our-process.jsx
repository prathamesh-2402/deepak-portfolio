import PropTypes from "prop-types";
import { aboutUs } from "../../utils/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useWindowWidth } from "../../utils/useWindow";

const AboutProcess = ({ darkMode }) => {
  AboutProcess.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };
  const windowWidth = useWindowWidth(32);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1279, min: 1025 }, // No overlap
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 }, // Safe base
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 mt-[150px]">
      <div className="mb-10 text-center md:mb-12">
        <h2 className="mb-6 text-3xl leading-none tracking-tight sm:text-[52px]">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
            <span className="relative">Our</span>
          </span>{" "}
          Process
        </h2>
        <p className="text-base md:text-lg mx-auto">
          We start by understanding your objectives, market, and target
          audience...
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="mx-auto mt-10" style={{ width: `${windowWidth}px` }}>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            keyBoardControl
            customTransition="all 0.5s ease"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="px-4"
            removeArrowOnDeviceType={["mobile"]}
          >
            {aboutUs.process.map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center gap-2"
              >
                <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-indigo-50 dark:bg-dark-hover-background">
                  <img
                    src={`../${darkMode ? "dark" : "light"}/${item.icon}${
                      darkMode ? "-dark" : "-light"
                    }.svg`}
                    className={`${index === 0 ? "w-[80px]" : "w-[60px]"}`}
                  />
                </div>
                <h6 className="mb-2 font-semibold text-xl leading-5">
                  {item.label}
                </h6>
                <p className="max-w-md mb-3 text-sm sm:mx-auto">{item.desc}</p>
              </div>
            ))}
          </Carousel>
      </div>
    </div>
  );
};

export default AboutProcess;
