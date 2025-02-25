"use client";
import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth !== width) {
        setWidth(window.innerWidth);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return { windowWidth: width };
}
