import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import brandingImg from "../assets/images/branding.jpg";
import logoImg from "../assets/images/logo.jpg";
import graphicImg from "../assets/images/graphic.jpg";
import bannerImg from "../assets/images/banner.jpg";
import cardImg from "../assets/images/cards.jpg";
import flyersImg from "../assets/images/flyers.jpg";

const items = [
  { label: "Branding", img: brandingImg, link: "#contact" },
  { label: "Logo design", img: logoImg, link: "#contact" },
  { label: "Graphic design", img: graphicImg, link: "#contact" },
  { label: "Roll-up banner", img: bannerImg, link: "#contact" },
  { label: "Business Cards", img: cardImg, link: "#contact" },
  { label: "Flyers", img: flyersImg, link: "#contact" },
];

const WhatWeDo = () => {
  const controls = useAnimation();
  const animationStartRef = useRef(Date.now());
  const pausedProgressRef = useRef(0);
  const animationDuration = 24;

  // Start marquee on mount
  React.useEffect(() => {
    animationStartRef.current = Date.now();
    controls.start({
      x: [0, -1696],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: animationDuration,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  // Pause marquee on hover and save progress
  const handleMouseEnter = () => {
    const elapsed = Date.now() - animationStartRef.current;
    pausedProgressRef.current = (elapsed % (animationDuration * 1000)) / (animationDuration * 1000);
    controls.stop();
  };

  // Resume marquee from where it paused
  const handleMouseLeave = () => {
    const currentX = -(pausedProgressRef.current * 1696);
    const remainingDistance = 1696 - (pausedProgressRef.current * 1696);
    
    animationStartRef.current = Date.now() - (pausedProgressRef.current * animationDuration * 1000);
    
    controls.set({ x: currentX });
    controls.start({
      x: [currentX, currentX - 1696],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: animationDuration,
          ease: "linear",
        },
      },
    });
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2"
          >
            Our Focus
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-light"
          >
            Creative <span className="text-dark dark:text-primary">Offerings</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-16 h-1 bg-dark dark:bg-primary mx-auto mt-4 rounded-full origin-left"
          />
        </div>
        <div
          className="overflow-hidden w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex gap-8"
            animate={controls}
          >
            {[...items, ...items, ...items].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="no-underline"
              >
                <motion.div
                  className="relative flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden shadow-md group cursor-pointer"
                  whileHover={{
                    boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background Image with Hover Zoom */}
                  <img
                    src={item.img}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Text Overlay with Gradient */}
                  <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white rounded-b-xl">
                    <span className="text-lg font-semibold">{item.label}</span>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
