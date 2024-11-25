import React from 'react';
import { Menu, Phone, Globe, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-white" />
            <span className="text-white text-xl font-serif">Luxe Voyages</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#destinations"
              className="text-white hover:text-gold-400 transition"
            >
              Destinations
            </a>
            <a
              href="#experiences"
              className="text-white hover:text-gold-400 transition"
            >
              Experiences
            </a>
            <a
              href="#about"
              className="text-white hover:text-gold-400 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gold-400 transition"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="hidden md:flex items-center text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>+44-7737283887</span>
            </a>
            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center hover:bg-opacity-90 transition">
              <User className="w-5 h-5 mr-2" />
              Book Now
            </button>
            <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
