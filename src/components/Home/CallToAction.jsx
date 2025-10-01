import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-light-foreground dark:bg-dark-foreground h-[50%] px-2 lg:px-9 py-2 mt-[150px] mb-[160px] ">
      <div className="relative flex flex-col items-center justify-center w-full h-[400px] lg:h-[800px]">
        {/* Animated Bubbles */}
        <div className="absolute top-0 left-0 w-full h-full z-20 mt-[50px] lg:mt-[100px]">
          <div className="flex flex-col items-center justify-end gap-4 text-white text-center p-4 w-full h-full bg-[url('/assets/gallery/19.jpeg')] bg-black/70 bg-no-repeat bg-center bg-cover relative">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 flex flex-col items-center justify-end gap-4">
              <h1 className="text-3xl lg:text-4xl w-[80%] md:w-[70%]">
                &quot;Wanna Learn from the best? Hit me up for online training programme&quot;
              </h1>
              <Link
                to={"/contact"}
                className={`flex items-center justify-end gap-2 border-[1px] border-dark-foreground px-[4px] py-[2px] pl-3 w-[240px] hover:w-[320px] hover:underline underline-offset-2 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500`}
              >
                <p className="text-lg text-nowrap overflow-hidden min-w-5 text-dark-foreground">
                  START YOUR TRAINING WITH ME
                </p>
                <img src={`/rightArrow.svg`} className="h-5" />
              </Link>
            </div>
          </div>
        </div>
        <svg style={{ position: "fixed", bottom: "0", visibility: "hidden" }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="blob"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CallToAction;
