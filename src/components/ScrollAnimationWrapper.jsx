import React, { useEffect } from "react";
import AOS from "aos";

const ScrollAnimationWrapper = ({ children, animation = "fade-up", duration = 800 }) => {
  useEffect(() => {
    AOS.init({ duration });
  }, [duration]);

  return (
    <div data-aos={animation}>
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper; 