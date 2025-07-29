import React, { useState } from "react";
import { motion } from "framer-motion";

import brandingImg from "../assets/images/branding.jpg";
import logoImg from "../assets/images/logo.jpg";
import graphicImg from "../assets/images/graphic.jpg";
import bannerImg from "../assets/images/banner.jpg";
import booksImg from "../assets/images/books.jpg";
import flyersImg from "../assets/images/flyers.jpg";

const items = [
  { label: "Branding", img: brandingImg },
  { label: "Logo design", img: logoImg },
  { label: "Graphic design", img: graphicImg },
  { label: "Roll-up banner", img: bannerImg },
  { label: "Books", img: booksImg },
  { label: "Flyers", img: flyersImg },
];

const WhatWeDo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const marqueeVariants = {
    animate: {
      x: isHovered ? "0%" : ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 18,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-dark text-center mb-10">
          What We Do
        </h2> */}
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
    // style={{ fontFamily: 'Futura, sans-serif' }}
  >
    Creative <span className="text-dark">Offerings</span>
  </motion.h2>
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="w-16 h-1 bg-dark mx-auto mt-4 rounded-full origin-left"
  />
</div>
        <div
          className="overflow-hidden w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-8"
            style={{ width: "200%" }}
            variants={marqueeVariants}
            animate="animate"
          >
            {[...items, ...items].map((item, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Background Image with Hover Zoom */}
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Text Overlay with Gradient */}
                <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                  <span className="text-lg font-semibold">{item.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
