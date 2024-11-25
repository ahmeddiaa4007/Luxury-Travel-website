import React from 'react';
import { Shield, Wine, Star, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Private Access',
    description: 'Exclusive entry to the world\'s most coveted locations and events'
  },
  {
    icon: Wine,
    title: 'Luxury Amenities',
    description: 'First-class accommodations and personalized concierge service'
  },
  {
    icon: Star,
    title: 'Curated Experiences',
    description: 'Handcrafted itineraries tailored to your preferences'
  },
  {
    icon: Heart,
    title: 'Personal Touch',
    description: 'Dedicated travel specialist for your entire journey'
  }
];

export default function Experience() {
  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">The Luxe Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Every journey is meticulously crafted to exceed your expectations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <feature.icon className="w-12 h-12 text-gold-500 mb-6" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}