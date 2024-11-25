import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedOffers from './components/FeaturedOffers';
import WhyChooseUs from './components/WhyChooseUs';
import Destinations from './components/Destinations';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedOffers />
      <WhyChooseUs />
      <Destinations />
      <Experience />
      <Contact />

      <footer className="bg-black text-white py-6 text-center">
        <p>
          © 2024 Luxury Travel Website. All rights reserved.{' '}
          <a href="https://www.dseom.co.uk" target="_blank">
            By DSEOM
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
