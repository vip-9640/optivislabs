import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo4.png';
import bgImg from '../assets/background3.jpg'; // <-- Add your background image here

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
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Portfolio background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: "center" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      {/* Animated Particles Background */}
      <Particles
        className="absolute inset-0 z-20"
        id="tsparticles-portfolio"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#a1c4fd", "#43e97b", "#fbc2eb"] },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: false },
            size: { value: 16, random: { enable: true, minimumValue: 8 } },
            move: {
              enable: true,
              speed: 1.5,
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
      <div className="max-w-5xl mx-auto px-4 relative z-30">
        <h2 className="text-3xl font-bold text-white text-center mb-10 ">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.title}
              className="bg-gray-100/80 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center h-80 p-6 cursor-pointer"
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
                className="w-10 h-20 object-contain mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-dark mb-2 text-center">{project.title}</h3>
              <p className="text-gray-700 text-center">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;