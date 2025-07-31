import React from "react";
import { motion } from "framer-motion";

const marqueeText = Array(8).fill("Optivis Labs").join(" • ");

const marqueeVariants = {
  animate: {
    x: ["0%", "-60%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 12,
        ease: "linear"
      }
    }
  }
};

const Hero = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16 bg-gradient-to-b from-light to-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-dark">Design. Develop. Research.</h1>
    <p className="text-lg md:text-2xl text-primary mb-6">Clear Vision. Bold Solutions.</p>
    <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow hover:bg-dark transition-colors duration-200 mb-8">Get in Touch</a>
    <div className="overflow-hidden w-full max-w-xl">
      <motion.div
        className="flex whitespace-nowrap text-2xl font-bold text-dark"
        variants={marqueeVariants}
        animate="animate"
        style={{ width: '200%' }}
      >
        <span className="mr-8">{marqueeText}</span>
        <span>{marqueeText}</span>
      </motion.div>
    </div>
  </div>
);

export default Hero; 