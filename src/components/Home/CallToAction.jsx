import { Link } from "react-router-dom";
import styles from "./styles/calltoaction.module.css";

const CallToAction = () => {
  return (
    <div className="bg-light-foreground dark:bg-dark-foreground h-[50%] px-2 lg:px-9 py-2 mt-[150px] mb-[160px] ">
      <div className="relative flex flex-col items-center justify-center w-full h-[400px] lg:h-[800px]">
        {/* Animated Bubbles */}
        <div className="absolute bottom-0 left-0 w-full h-full z-10">
          <div className={`${styles.footer}`}>
            <div className={styles.bubbles}>
              {[...Array(128)].map((_, i) => (
                <div
                  key={i}
                  className={`${styles.bubble} bg-light-foreground dark:bg-dark-foreground`}
                  style={{
                    "--size": `${2 + Math.random() * 4}rem`,
                    "--distance": `${6 + Math.random() * 4}rem`,
                    "--position": `${-5 + Math.random() * 110}%`,
                    "--time": `${2 + Math.random() * 2}s`,
                    "--delay": `${-1 * (2 + Math.random() * 2)}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-20 mt-[50px] lg:mt-[100px]">
          <div className="flex flex-col items-center justify-evenly gap-4 text-white text-center p-4 w-full h-full bg-[url('/assets/phoenix/image.webp')] bg-no-repeat bg-center bg-cover">
            <h1 className="text-3xl lg:text-4xl w-[80%] md:w-[70%]">
              &quot;Let your vision rise with us, just as a phoenix does from
              it&apos;s ashes!&quot;
            </h1>
            <Link
              to={"/contact"}
              className={`flex items-center justify-end gap-2 border-[1px] border-dark-foreground px-[4px] py-[2px] pl-3 w-[227px] hover:w-[305px] hover:underline underline-offset-2 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500`}
            >
              <p className="text-lg text-nowrap overflow-hidden min-w-5 text-dark-foreground">
                START A PARTNERSHIP WITH US
              </p>
              <img src={`/rightArrow.svg`} className="h-5" />
            </Link>
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
