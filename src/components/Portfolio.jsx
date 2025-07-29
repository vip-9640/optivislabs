import React from "react";
import logo1 from '../assets/logo1.jpg';

const projects = [
  {
    title: "Gayu Academy Logo",
    img: logo1,
    desc: "A productivity tool for creative teams, featuring real-time collaboration.",
  },
  {
    title: "OptiSite",
    img: "https://via.placeholder.com/300x180?text=OptiSite",
    desc: "A modern, responsive website template for startups and agencies.",
  },
  {
    title: "LabX Research Portal",
    img: "https://via.placeholder.com/300x180?text=LabX+Portal",
    desc: "A platform for managing and sharing R&D projects securely.",
  },
];

const Portfolio = () => (
  <section className="py-16">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-dark text-center mb-10">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.title} className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src={project.img} alt={project.title} className="rounded mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
            <p className="text-gray-700 text-center">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio; 