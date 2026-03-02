import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import ScrollAnimationWrapper from "./components/ScrollAnimationWrapper";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-light dark:bg-gray-900 min-h-screen font-sans text-dark dark:text-light transition-colors duration-300">
        <Cursor />
        <Navbar />
        <main>
          <section id="home"><ScrollAnimationWrapper><Hero /></ScrollAnimationWrapper></section>
          <section id="about"><ScrollAnimationWrapper><About /></ScrollAnimationWrapper></section>
          <section id="whatwedo"><ScrollAnimationWrapper><WhatWeDo /></ScrollAnimationWrapper></section>
          <section id="services"><ScrollAnimationWrapper><Services /></ScrollAnimationWrapper></section>
          <section id="portfolio"><ScrollAnimationWrapper><Portfolio /></ScrollAnimationWrapper></section>
          <section id="contact"><ScrollAnimationWrapper><Contact /></ScrollAnimationWrapper></section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 