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

function App() {
  return (
    <div className="relative bg-light min-h-screen font-sans">
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
  );
}

export default App; 