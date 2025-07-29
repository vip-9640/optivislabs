// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Cursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       gsap.to(cursorRef.current, {
//         x: e.clientX - 16,
//         y: e.clientY - 16,
//         duration: 0.18,
//         ease: "power2.out",
//       });
//     };

//     const handleMouseOver = (e) => {
//       if (
//         e.target.tagName === "A" ||
//         e.target.tagName === "BUTTON" ||
//         e.target.tagName === "INPUT" ||
//         e.target.tagName === "TEXTAREA" ||
//         e.target.getAttribute("role") === "button"
//       ) {
//         gsap.to(cursorRef.current, { scale: 1.5, borderWidth: 0, backgroundColor: "#28A745", duration: 0.2 });
//       }
//     };
//     const handleMouseOut = (e) => {
//       if (
//         e.target.tagName === "A" ||
//         e.target.tagName === "BUTTON" ||
//         e.target.tagName === "INPUT" ||
//         e.target.tagName === "TEXTAREA" ||
//         e.target.getAttribute("role") === "button"
//       ) {
//         gsap.to(cursorRef.current, { scale: 1, borderWidth: 2, backgroundColor: "rgba(255,255,255,0.7)", duration: 0.2 });
//       }
//     };

//     window.addEventListener("mousemove", moveCursor);
//     document.body.addEventListener("mouseover", handleMouseOver);
//     document.body.addEventListener("mouseout", handleMouseOut);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       document.body.removeEventListener("mouseover", handleMouseOver);
//       document.body.removeEventListener("mouseout", handleMouseOut);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
//       style={{
//         border: "2px solid #28A745",
//         borderRadius: "50%",
//         background: "rgba(255,255,255,0.7)",
//         boxShadow: "0 2px 12px 0 rgba(40,167,69,0.12)",
//         transition: "background 0.2s, border 0.2s"
//       }}
//     />
//   );
// };

// export default Cursor; 



import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsDesktop(!isTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.getAttribute("role") === "button"
      ) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          borderWidth: 0,
          backgroundColor: "#28A745",
          duration: 0.2,
        });
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.getAttribute("role") === "button"
      ) {
        gsap.to(cursorRef.current, {
          scale: 1,
          borderWidth: 2,
          backgroundColor: "rgba(255,255,255,0.7)",
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
      style={{
        border: "2px solid #28A745",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.7)",
        boxShadow: "0 2px 12px 0 rgba(40,167,69,0.12)",
        transition: "background 0.2s, border 0.2s",
      }}
    />
  );
};

export default Cursor;
