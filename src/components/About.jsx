import React from "react";

const About = () => (
  <section className="max-w-3xl mx-auto py-16 px-4 text-center">
    <h2 className="text-3xl font-bold text-dark mb-4">About Optivis Labs</h2>

    <br className="bg-dark w-30"/>

    <p className="text-lg text-gray-700 mb-6">Optivis Labs was founded to bring clarity and innovation to digital solutions. We believe in the power of design, development, and research to create impactful products.</p>
    <div>
      <span className="block text-primary font-semibold mb-2">Our Values:</span>
      <ul className="flex flex-col md:flex-row justify-center gap-4 text-dark font-medium">
        <li>Innovation</li>
        <li>Integrity</li>
        <li>Excellence</li>
      </ul>
    </div>
  </section>
);

export default About; 