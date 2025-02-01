import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VideoCarousel = ({ darkMode }) => {
  VideoCarousel.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   if (!carousel) return;

  //   const totalScrollWidth = carousel.scrollWidth / 2; // Adjust for the duplicated videos
  //   let scrollAmount = 0;

  //   const scroll = () => {
  //     scrollAmount += 1; // Adjust speed here (1px per interval)
  //     if (scrollAmount >= totalScrollWidth) {
  //       scrollAmount = 0; // Reset when half scrolled
  //     }
  //     carousel.scrollLeft = scrollAmount;
  //   };

  //   const interval = setInterval(scroll, 16); // Approx. 60 FPS
  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  const videos = [
    // "./assets/filmmaking/Lisen.mov",
    "./assets/film-making/commercial/video1.mp4",
    "./assets/film-making/commercial/video2.mp4",
    "./assets/film-making/commercial/video3.mp4",
    "./assets/film-making/commercial/video4.mp4",
  ];

  // const navLink = (src) =>  {
  //   switch (src) {
  //     case flimmaking

  //       break;

  //     default:
  //       break;
  //   }
  // }

  return (
    <div className="relative w-full h-[450px] whitespace-nowrap scroll-smooth">
      <div
        ref={carouselRef}
        className="flex gap-2 overflow-auto flex-nowrap"
        style={{ scrollBehavior: "smooth" }}
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
              className="flex flex-col items-center w-[500px] h-[450px] bg-black dark:bg-black py-2 select-none"
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
                  className={`w-[60px] h-[60px] backdrop-blur-lg flex justify-center items-center rounded-full ${
                    isHovered && "drop-shadow-glow"
                  } hover:cursor-pointer`}
                  to={`/film-making${result}`}
                >
                  <img
                    key={index}
                    src="./play.svg"
                    className={`w-[15px] h-[15px] ${
                      isHovered && "drop-shadow-glow"
                    }`}
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
      </div>
    </div>
  );
};

export default VideoCarousel;
