import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const VideoCarousel = ({ darkMode }) => {
  VideoCarousel.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  const [isHovered, setIsHovered] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1268 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1268, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const videos = [
    // "./assets/filmmaking/Lisen.mov",
    "./assets/film-making/commercial/video1.mp4",
    "./assets/film-making/commercial/video2.mp4",
    "./assets/film-making/commercial/video3.mp4",
    "./assets/film-making/commercial/video4.mp4",
    "./assets/film-making/commercial/video5.mp4",
  ];

  // const extendedVideos = [...videos, ...videos];

  return (
    <div className="relative w-full h-[450px]">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1}
        centerMode={true}
        responsive={responsive}
        showDots={false}
        focusOnSelect={false}
        infinite
        rewind={true}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        className="h-full w-full"
        sliderClass="h-full w-full"
        itemClass="w-full"
        customTransition="transform 8000ms linear"
        transitionDuration={8000}
        slidesToSlide={1}
      >

        {videos.map((src, index) => {
          const path = "./assets/film-making/commercial/video1.mp4";
          const parts = path.split("/");
          const navLink = parts.indexOf("commercial");
          const result =
            index !== -1 ? `/${parts[navLink]}/${index + 1}` : "Not found";
          return (
            <div
              key={index}
              className="flex flex-col items-center w-[500px] h-[450px] bg-black py-2 select-none"
            >
              <div
                className="w-[500px] h-[450px] absolute top-0 hover:bg-[#00000099] z-10 flex justify-center items-center transition-all duration-500"
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <Link
                  className={`w-[60px] h-[60px] backdrop-blur-lg flex justify-center items-center rounded-full ${isHovered && "drop-shadow-glow"
                    } hover:cursor-pointer`}
                  to={`/film-making${result}`}
                >
                  <img
                    key={index}
                    src="./play.svg"
                    className={`w-[15px] h-[15px] ${isHovered && "drop-shadow-glow"}`}
                  />
                </Link>
              </div>
              <div className="flex gap-2">
                {[...Array(21)].map((_, i) => (
                  <img
                    src={`./rectangle${darkMode ? "Dark" : "Light"}.svg`}
                    className="w-[15px] h-[15px]"
                    key={i}
                  />
                ))}
              </div>

              <div className="w-[500px] h-[400px]">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-2">
                {[...Array(21)].map((_, i) => (
                  <img
                    src={`./rectangle${darkMode ? "Dark" : "Light"}.svg`}
                    className="w-[15px] h-[15px]"
                    key={i}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
