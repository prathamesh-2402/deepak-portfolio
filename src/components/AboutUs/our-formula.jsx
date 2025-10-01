import { useState } from "react";
import { aboutUs } from "../../utils/data";

const AboutFormula = () => {
  const [flip, setFlip] = useState({
    first: false,
    second: false,
    third: false,
  });

  const handleFlip = (key, value) => {
    setFlip((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-[150px]">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-3xl leading-none tracking-tight sm:text-[52px] md:mx-auto">
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
          Formula
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 h-full">
        {aboutUs.formula.map((item, index) => {
          const key = index === 0 ? "first" : index === 1 ? "second" : "third";
          const isFlipped = flip[key];

          return (
            <div
            key={index}
            onMouseEnter={() => handleFlip(key, true)}
            onMouseLeave={() => handleFlip(key, false)}
            className="w-full min-h-[400px] relative perspective-[1000px]"
          >
            <div
              className="absolute w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full flex flex-col justify-center items-center text-background cursor-pointer select-none font-bold rounded-[2.5rem] bg-gradient-to-bl from-[#c2292b] to-[#f49a3c] p-6 text-dark-foreground"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={`../illustrations/${index}.svg`}
                  alt="Illustration"
                  className="h-[300px] object-contain mb-4"
                />
                <h1 className="text-xl md:text-2xl text-center">{item?.title}</h1>
              </div>
          
              {/* Back Side */}
              <div
                className="absolute w-full h-full flex flex-col justify-center items-center text-background cursor-pointer select-none font-medium rounded-[2.5rem] bg-gradient-to-bl from-[#071844] to-[#2D87B6] p-6 text-center text-dark-foreground"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="mb-4 text-base md:text-lg">{item?.paraOne}</p>
                <p className="font-bold text-lg md:text-xl mb-2">How we do this?</p>
                <p className="text-base md:text-lg">{item?.paraTwo}</p>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutFormula;