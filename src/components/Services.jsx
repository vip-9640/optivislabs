import React from "react";
import { FaPalette, FaLaptopCode, FaFlask } from "react-icons/fa";

const services = [
  { icon: <FaPalette className="text-5xl text-primary mb-4" />, title: "Design", desc: "UI/UX, branding, and visual storytelling." },
  { icon: <FaLaptopCode className="text-5xl text-primary mb-4" />, title: "Development", desc: "Web, mobile, and custom software solutions." },
  { icon: <FaFlask className="text-5xl text-primary mb-4" />, title: "R&D", desc: "Cutting-edge research and prototyping." },
];

const Services = () => (
  <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-dark dark:text-light text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.title} className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-lg p-8 flex flex-col items-center text-center hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300">
            {service.icon}
            <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 



