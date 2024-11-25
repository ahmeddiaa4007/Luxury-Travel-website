import React from 'react';
import { Clock, Users, Tag } from 'lucide-react';

const offers = [
  {
    title: 'Private Island Escape',
    location: 'Seychelles',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80',
    price: '25,000',
    guests: '2-4',
    duration: '10 days'
  },
  {
    title: 'Safari & Wine Experience',
    location: 'South Africa',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    price: '18,500',
    guests: '2-6',
    duration: '12 days'
  },
  {
    title: 'Arctic Aurora Lodge',
    location: 'Finland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80',
    price: '15,800',
    guests: '2-4',
    duration: '7 days'
  }
];

export default function FeaturedOffers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Featured Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Exclusive packages crafted for the most discerning travelers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full">
                  ${offer.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.location}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {offer.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {offer.guests} guests
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    Limited
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}