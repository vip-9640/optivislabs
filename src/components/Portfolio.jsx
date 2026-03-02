import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo4.png';

const projects = [
  {
    title: "Optus",
    img: logo1,
    desc: "A productivity tool for creative teams, featuring real-time collaboration.",
    link: "#" // Replace with your actual link
  },
  {
    title: "OptiSite",
    img: logo2,
    desc: "A modern, responsive website template for startups and agencies.",
    link: "#" // Replace with your actual link
  },
  {
    title: "LabX Research Portal",
    img: logo3,
    desc: "A platform for managing and sharing R&D projects securely and easily.",
    link: "#" // Replace with your actual link
  },
];

const Portfolio = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Particles Background */}
      <Particles
        className="absolute inset-0 z-10"
        id="tsparticles-portfolio"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 40, density: { enable: true, value_area: 1000 } },
            color: { value: ["#28A745", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.15, random: false },
            size: { value: 8, random: { enable: true, minimumValue: 4 } },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" }
            }
          },
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false }
            }
          },
          detectRetina: true
        }}
      />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 bg-gradient-to-r from-primary via-green-400 to-primary bg-clip-text text-transparent">
          Portfolio
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore our latest projects and innovative solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.title}
              className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center h-80 p-6 cursor-pointer hover:bg-white/15 dark:hover:bg-gray-800/70 hover:border-primary/50"
              onClick={() => window.open(project.link, "_blank")}
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if (e.key === "Enter" || e.key === " ") window.open(project.link, "_blank");
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-10 h-20 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-primary transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-300 text-center text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;