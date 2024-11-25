import React from 'react';

const destinations = [
  {
    name: 'Maldives Private Island',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80',
    price: '15,000',
    duration: '7 days'
  },
  {
    name: 'Swiss Alps Retreat',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80',
    price: '12,500',
    duration: '5 days'
  },
  {
    name: 'Santorini Villa',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80',
    price: '10,800',
    duration: '6 days'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Exclusive Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our handpicked collection of the world's most prestigious and private destinations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2">{destination.name}</h3>
                  <div className="flex justify-between items-center">
                    <span>From ${destination.price}</span>
                    <span>{destination.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}