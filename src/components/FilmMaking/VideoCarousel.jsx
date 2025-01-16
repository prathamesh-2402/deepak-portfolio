import { useEffect, useRef } from "react";

const VideoCarousel = () => {
  const carouselRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalScrollWidth = carousel.scrollWidth / 2; // Adjust for the duplicated videos
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1; // Adjust speed here (1px per interval)
      if (scrollAmount >= totalScrollWidth) {
        scrollAmount = 0; // Reset when half scrolled
      }
      carousel.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 16); // Approx. 60 FPS
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const videos = [
    // "./assets/filmmaking/Lisen.mov",
    "./assets/filmmaking/video1.mp4",
    "./assets/filmmaking/video2.mp4",
    "./assets/filmmaking/video3.mp4",
    "./assets/filmmaking/video4.mp4",
  ];

  return (
    <div className="relative w-full h-[400px] overflow-x-auto scroll-smooth">
      <div
        ref={carouselRef}
        className="flex gap-2 whitespace-nowrap"
        style={{ scrollBehavior: "smooth" }}
      >
        {videos.concat(videos).map((src, index) => (
          <div
            key={index}
            className="flex-none w-[400px] h-[400px] bg-light-hover-background dark:bg-dark-hover-background rounded-md"
          >
            <video
              src={src}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
