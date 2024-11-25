import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Extraordinary Journeys</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-12">Experience the world's most exclusive destinations with unparalleled luxury and personalized service</p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition">
          Start Your Journey
        </button>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}