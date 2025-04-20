import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ParallaxWindow = ({ serviceData }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  ParallaxWindow.propTypes = {
    serviceData: PropTypes.object.isRequired,
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Calculate mouse position as percentage across container (0-100)
    const x = ((e.clientX - rect.left) / rect.width) * 100;

    // Calculate rotation based on mouse position
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    const maxRotation = 5;
    const rotationRange = (mouseX - centerX) / (rect.width / 2);
    const newRotation = Math.max(
      Math.min(rotationRange * maxRotation, maxRotation),
      -maxRotation
    );

    setPosition({ x, y: 50 });
    setRotation(newRotation);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 50, y: 50 });
    setRotation(0);
  };

  return (
    <div className="w-full md:my-[100px]">
      <div className="flex flex-col justify-center items-center gap-2 py-4">
        <h1 className="text-[60px] text-center">{serviceData?.title}</h1>
      </div>
      <div
        ref={containerRef}
        className="w-full transition-all duration-300 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Content container */}
        <div
          className="relative mx-auto"
          style={{
            maxWidth: "800px",
            height: "500px",
            perspective: "1000px",
          }}
        >
          {/* Rotating container */}
          <div
            className="relative w-full h-full transition-transform duration-300 ease-out"
            style={{
              transform: `rotateY(${rotation}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Main image */}
            <div className="absolute w-[300px] h-[175px] sm:w-[400px] sm:h-[275px] md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[500px] rounded-lg overflow-hidden top-[10%] left-[10%] sm:left-[20%] md:top-[10%] md:left-[10%] lg:top-0 lg:left-0">
              <Link
                to={`/film-making/${serviceData?.url}/${serviceData?.id}?title=${encodeURIComponent(serviceData?.title)}`}
                className="absolute w-[125%] h-[122%] left-[-10%] top-[-10%] z-10 hover:cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {" "}
                {/* Added wrapper div */}
                <div className="absolute w-full h-full flex justify-center items-center z-10">
                  <div className="p-4 md:p-8 backdrop-blur-md rounded-full">
                    <img
                      // key={index}
                      src="/play.svg"
                      className={`w-4 h-4 md:w-6 md:h-6 ${isHovered && "drop-shadow-glow"}`}
                    />
                  </div>
                </div>
                <img
                  src="https://images.pexels.com/photos/26938195/pexels-photo-26938195/free-photo-of-sweet-dough-in-bakery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Center"
                  className="absolute w-full h-full object-cover transition"
                  style={{
                    left: `${0 - (position.x - 50) * 0.1}%`,
                  }}
                />
              </Link>
            </div>

            {/* Small images */}
            <div className="absolute hidden lg:inline-block w-[125px] h-[90px] lg:w-[250px] lg:h-[180px] rounded-lg overflow-hidden top-[25%] -right-[100px] z-10">
              <div className="absolute w-[122%] h-[122%] left-[-10%] top-[-10%]">
                <img
                  src="https://images.pexels.com/photos/9433003/pexels-photo-9433003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Top Right"
                  className="absolute w-full h-full object-cover"
                  style={{
                    left: `${0 - (position.x - 50) * 0.1}%`,
                  }}
                />
              </div>
            </div>

            <div className="absolute hidden lg:inline-block w-[125px] h-[90px] lg:w-[250px] lg:h-[180px] rounded-lg overflow-hidden -bottom-[50px] -left-[100px] z-10">
              <div className="absolute w-[122%] h-[122%] left-[-10%] top-[-10%]">
                {" "}
                {/* Added wrapper div */}
                <img
                  src="https://images.pexels.com/photos/8902066/pexels-photo-8902066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Top Right"
                  className="absolute w-full h-full object-cover"
                  style={{
                    left: `${0 - (position.x - 50) * 0.1}%`,
                  }}
                />
              </div>
            </div>

            <div className="absolute hidden lg:inline-block w-[125px] h-[90px] lg:w-[250px] lg:h-[180px] rounded-lg overflow-hidden -top-[10%] -left-[200px]">
              <div className="absolute w-[122%] h-[122%] left-[-10%] top-[-10%]">
                {" "}
                {/* Added wrapper div */}
                <img
                  src="https://images.pexels.com/photos/5107182/pexels-photo-5107182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Top Right"
                  className="absolute w-full h-full object-cover"
                  style={{
                    left: `${0 - (position.x - 50) * 0.2}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxWindow;
