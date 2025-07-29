import React from "react";
import logo from '../assets/Optivis Labs Logo png.png';
import { FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-gray-100 text-white py-10 mt-16">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
      {/* Logo and site name */}
      <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-3 justify-center w-full md:w-auto">
        <img src={logo} alt="Optivis Labs Logo" className="h-10 w-auto object-contain mb-2 md:mb-0" style={{ maxWidth: 48 }} />
        <span className="text-xl text-dark font-bold tracking-wide">Optivis Labs</span>
      </div>
      {/* Navigation links */}
      <ul className="flex flex-wrap gap-6 justify-center md:justify-start w-full md:w-auto text-dark">
        {navLinks.map(link => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-primary transition-colors duration-200 text-base font-medium">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Social icons */}
      <div className="flex space-x-6 justify-center md:justify-end w-full md:w-auto">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-dark hover:text-primary text-2xl transition-colors" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-dark hover:text-primary text-2xl transition-colors" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-dark hover:text-primary text-2xl transition-colors" />
        </a>
        <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok className="text-dark hover:text-primary text-2xl transition-colors" />
        </a>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-900 text-sm">
      &copy; {new Date().getFullYear()} Optivis Labs. All rights reserved.
    </div>
  </footer>
);

export default Footer; 