import React from 'react';
import { Award, Clock, Shield, Gem } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '20+ Years of Excellence',
    description: 'Two decades of crafting extraordinary travel experiences'
  },
  {
    icon: Clock,
    title: '24/7 Concierge',
    description: 'Round-the-clock support throughout your journey'
  },
  {
    icon: Shield,
    title: 'Travel Protection',
    description: 'Comprehensive coverage for worry-free adventures'
  },
  {
    icon: Gem,
    title: 'Exclusive Access',
    description: 'VIP treatment and privileged entry to elite venues'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">Why Choose Luxe Voyages?</h2>
            <p className="text-gray-600 mb-8">We don't just plan trips; we craft stories. Every journey with us is an expertly orchestrated symphony of experiences, designed to exceed your highest expectations.</p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start">
                  <reason.icon className="w-12 h-12 text-gold-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80" 
                alt="Luxury Experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-500/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-gold-500/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}