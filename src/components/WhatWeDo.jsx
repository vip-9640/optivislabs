import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import brandingImg from "../assets/images/branding.jpg";
import logoImg from "../assets/images/logo.jpg";
import graphicImg from "../assets/images/graphic.jpg";
import bannerImg from "../assets/images/banner.jpg";
import cardImg from "../assets/images/cards.jpg";
import flyersImg from "../assets/images/flyers.jpg";

const items = [
  { label: "Branding", img: brandingImg },
  { label: "Logo design", img: logoImg },
  { label: "Graphic design", img: graphicImg },
  { label: "Roll-up banner", img: bannerImg },
  { label: "Business Cards", img: cardImg },
  { label: "Flyers", img: flyersImg },
];

const WhatWeDo = () => {
  const controls = useAnimation();

  // Start marquee on mount
  React.useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 24,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  // Pause marquee on hover
  const handleMouseEnter = () => {
    controls.stop();
  };
  const handleMouseLeave = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 24,
          ease: "linear",
        },
      },
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-500 uppercase tracking-widest mb-2"
          >
            Our Focus
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Creative <span className="text-dark">Offerings</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-16 h-1 bg-dark mx-auto mt-4 rounded-full origin-left"
          />
        </div>
        <div
          className="overflow-hidden w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex gap-8"
            style={{ width: "200%" }}
            animate={controls}
          >
            {[...items, ...items].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden shadow-md group cursor-pointer"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
              
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Image with Hover Zoom */}
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 rounded-xl" />

                {/* Text Overlay with Gradient */}
                <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white rounded-b-xl">
                  <span className="text-lg font-semibold">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
