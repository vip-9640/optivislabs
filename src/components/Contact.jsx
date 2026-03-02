import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-dark dark:text-light mb-6">Contact</h2>
      <form action="https://formspree.io/f/mwpqbwjp" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300" />
        <textarea name="message" placeholder="Your Message" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300" rows={5}></textarea>
        <button type="submit" className="w-full py-3 bg-primary text-white font-semibold rounded hover:bg-dark transition-colors duration-200">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact; 