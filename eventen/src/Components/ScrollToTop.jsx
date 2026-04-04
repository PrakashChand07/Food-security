// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har route change par scroll top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // "auto" agar instant chahiye
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
