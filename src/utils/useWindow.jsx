import { useState, useEffect } from "react";

export const useWindowWidth = (paddingOffset) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth - paddingOffset : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth - paddingOffset);
    };

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [paddingOffset]);

  return windowWidth;
};