"use client";
import { useState, useEffect } from "react";

export function resizeImage(
  width: number,
  height: number,
  limit?: null | number
) {
  const minSize = limit ? limit : 400;
  const maxSize = limit ? limit : 800;

  let reW = width;
  let reH = height;

  // Check if the width or height is out of bounds and adjust while maintaining aspect ratio
  if (reW < minSize || reH < minSize) {
    if (reW < reH) {
      reW = minSize;
      reH = (height / width) * reW;
    } else {
      reH = minSize;
      reW = (width / height) * reH;
    }
  }

  if (reW > maxSize || reH > maxSize) {
    if (reW > reH) {
      reW = maxSize;
      reH = (height / width) * reW;
    } else {
      reH = maxSize;
      reW = (width / height) * reH;
    }
  }

  // Ensure both dimensions are within the range
  if (reW < minSize) {
    reW = minSize;
    reH = (height / width) * reW;
  }
  if (reH < minSize) {
    reH = minSize;
    reW = (width / height) * reH;
  }
  if (reW > maxSize) {
    reW = maxSize;
    reH = (height / width) * reW;
  }
  if (reH > maxSize) {
    reH = maxSize;
    reW = (width / height) * reH;
  }

  return {
    reW: Math.round(reW),
    reH: Math.round(reH),
  };
}

// Define a type for the window size
type WindowSize = {
  width: number;
  height: number;
};

// Create the custom hook
const useWindowSize = (): WindowSize => {
  // Initialize state with window's width and height
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Define a function to handle resize events
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return windowSize;
};

export default useWindowSize;
