import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-dark mb-6">Contact</h2>
      <form action="https://formspree.io/f/mwpqbwjp" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        <textarea name="message" placeholder="Your Message" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" rows={5}></textarea>
        <button type="submit" className="w-full py-3 bg-primary text-white font-semibold rounded hover:bg-dark transition-colors">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact; 