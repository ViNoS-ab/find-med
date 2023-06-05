"use client";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  let myWindow = typeof window !== "undefined" ? window : new Window();
  const { innerWidth: width, innerHeight: height } = myWindow;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
