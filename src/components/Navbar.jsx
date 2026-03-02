import React, { useState, useContext } from "react";
import logo from '../assets/Optivis Labs Logo png.png';
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="sticky top-0 z-50 bg-light dark:bg-gray-900 shadow-lg dark:shadow-2xl transition-all duration-300 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo and company name - Left */}
        <a href="#home" className="flex items-center space-x-3 group flex-shrink-0">
          <div className="relative">
            <img
              src={logo}
              alt="Optivis Labs Logo"
              className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              style={{ maxWidth: 48 }}
            />
          </div>
          <span className="text-lg sm:text-2xl font-bold text-white tracking-tight whitespace-nowrap">
            Optivis Labs
          </span>
        </a>

        {/* Right section - Menu and Icons */}
        <div className="flex items-center gap-8">
          {/* Desktop nav - Right side */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-dark dark:text-light font-medium text-sm px-4 py-2 rounded-md relative group transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary group-hover:right-4 group-hover:w-auto transition-all duration-300 ease-out"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right side icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-dark dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 shadow-md dark:shadow-lg"
              aria-label="Toggle dark mode"
              title={isDarkMode ? "Light mode" : "Dark mode"}
            >
              {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>

            {/* Hamburger icon - Mobile only */}
            <button
              className="md:hidden p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-dark dark:text-light hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-dark dark:bg-light mb-1.5 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-dark dark:bg-light mb-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-dark dark:bg-light transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-light dark:bg-gray-800 shadow-xl dark:shadow-2xl border-t border-gray-200 dark:border-gray-700 transition-all duration-300 animate-in">
          <ul className="px-6 py-4 flex flex-col space-y-3">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-dark dark:text-light hover:text-primary dark:hover:text-primary font-medium text-base block py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 