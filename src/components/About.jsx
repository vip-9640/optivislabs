// import React from "react";

// const About = () => (
//   <section className="max-w-3xl mx-auto py-16 px-4 text-center">
//     <h2 className="text-3xl font-bold text-dark mb-4">About Optivis Labs</h2>

//     <br className="bg-dark w-30"/>

//     <p className="text-lg text-gray-700 mb-6">Optivis Labs was founded to bring clarity and innovation to digital solutions. We believe in the power of design, development, and research to create impactful products.</p>
//     <div>
//       <span className="block text-primary font-semibold mb-2">Our Values:</span>
//       <ul className="flex flex-col md:flex-row justify-center gap-4 text-dark font-medium">
//         <li>Innovation</li>
//         <li>Integrity</li>
//         <li>Excellence</li>
//       </ul>
//     </div>
//   </section>
// );

// export default About; 



import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaStar } from "react-icons/fa";

const About = () => (
  <section className="max-w-5xl mx-auto py-20 px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
        <span className="z-10 relative">About <span className="text-primary">Optivis Labs</span></span>
       
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
        Founded in 2022, Optivis Labs exists to empower ideas through design, development, and research. 
        We specialize in building digital solutions that are not only visually stunning but also technically sound and purpose-driven.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <h3 className="text-xl text-gray-800 font-semibold text-center mb-6">Our Core Values</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Innovation */}
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
          <div className="flex justify-center text-primary text-3xl mb-4">
            <FaLightbulb />
          </div>
          <h4 className="text-lg font-semibold mb-2">Innovation</h4>
          <p className="text-sm text-gray-600">
            We strive to think differently, creatively and apply fresh ideas to every project.
          </p>
        </div>

        {/* Integrity */}
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
          <div className="flex justify-center text-primary text-3xl mb-4">
            <FaShieldAlt />
          </div>
          <h4 className="text-lg font-semibold mb-2">Integrity</h4>
          <p className="text-sm text-gray-600">
            Honesty and strong moral principles guide how we work and communicate.
          </p>
        </div>

        {/* Excellence */}
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
          <div className="flex justify-center text-primary text-3xl mb-4">
            <FaStar />
          </div>
          <h4 className="text-lg font-semibold mb-2">Excellence</h4>
          <p className="text-sm text-gray-600">
            We aim to exceed expectations and deliver the highest quality work in all we do.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
