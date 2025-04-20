import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const CaseStudy = () => {
  const { category, videoId } = useParams();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const videoRef = useRef(null);
  const [startVideo, setStartVideo] = useState(false);
  const [volume, setVolume] = useState(false);
  const [titleblur, setTitleblur] = useState(false);
  const [beforeStyle, setBeforeStyle] = useState("-translate-y-3");
  const [afterStyle, setAfterStyle] = useState("translate-y-4");
  const [visibility, setVisibility] = useState({
    titlePlay: "flex",
    bottomPlay: "hidden",
  });

  useEffect(() => {
    if (startVideo) {
      setBeforeStyle("-translate-y-7 blur-sm");
      setTimeout(() => {
        setVisibility({
          ...visibility,
          titlePlay: "hidden",
          bottomPlay: "flex",
        });
      }, 700);
    } else {
      setTimeout(() => {
        setBeforeStyle("translate-y-0");
      }, 400);
    }
  }, [startVideo]);

  useEffect(() => {
    if (visibility.bottomPlay) {
      setAfterStyle("translate-y-0");
    }
  }, [visibility.bottomPlay]);

  return (
    <div className="w-full">
      <div className="relative flex items-stretch justify-center sm:mx-10 lg:h-[80vh]">
        <div
          className={`absolute top-0 right-0 z-10 ${visibility.titlePlay} flex-col justify-center items-center gap-8 h-full w-full ${beforeStyle} transition-all duration-700`}
        >
          <h1
            className={`text-8xl text-dark-foreground ${
              titleblur ? "blur-[6px]" : ""
            } transition-all duration-[400ms]`}
          >
            {title}
          </h1>
          <button
            className={`flex items-center justify-end gap-2 border-[1px] border-dark-foreground px-[2px] py-[2px] pl-3 w-[90px] hover:w-[134px] backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500`}
            onClick={() => {
              setVolume(true);
              setStartVideo(true);
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
              videoRef.current.load();
            }}
            onMouseEnter={() => setTitleblur(true)}
            onMouseLeave={() => setTitleblur(false)}
          >
            <p className="text-sm text-nowrap overflow-hidden min-w-2 text-dark-foreground">
              WATCH VIDEO
            </p>
            <img src="/play-alt.svg" className="h-5" />
          </button>
        </div>
        <div
          className={`absolute -bottom-6 z-10 ${visibility.bottomPlay} flex-col justify-center items-center gap-8 w-full ${afterStyle} transition-all duration-700`}
        >
          <div className="backdrop-blur-xl p-4 lg:p-6 rounded-full cursor-pointer"
              onClick={() => {
                if (videoRef.current.paused) {
                  videoRef.current.play();
                  setVolume(true);
                } else {
                  videoRef.current.pause();
                  setVolume(false);
                }
              }}>
            {volume ? (
              <img
                src="/pause.svg"
                className="h-4"
                // onClick={() => {
                //   setVolume(!volume);
                //   videoRef.current.play();
                // }}
              />
            ) : (
              <img
                src="/play.svg"
                className="h-4"
                // onClick={() => {
                //   setVolume(!volume);
                //   videoRef.current.pause();
                // }}
              />
            )}
          </div>
        </div>
        {/* } */}
        <video
          className="sm:rounded-3xl object-cover w-full"
          ref={videoRef}
          autoPlay
          muted={!volume}
          loop
        >
          <source
            src={`/assets/film-making/${category}/video${videoId}.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default CaseStudy;
