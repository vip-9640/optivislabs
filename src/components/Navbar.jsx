import React, { useState } from "react";
import logo from '../assets/Optivis Labs Logo png.png';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-light shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center relative">
        {/* Logo and company name centered on mobile, left on desktop */}
        <div className="flex-1 flex justify-center md:justify-start">
          <a href="#home" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Optivis Labs Logo"
              className="h-10 w-auto object-contain loading='lazy'"
              style={{ maxWidth: 48 }}
            />
            <span className="text-xl font-bold text-dark tracking-wide">Optivis Labs</span>
          </a>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 ml-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-dark hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger icon */}
        <button
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-dark mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-dark mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-dark transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-light shadow-lg px-4 py-4 flex flex-col space-y-4">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-dark hover:text-primary font-medium text-lg block"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar; 