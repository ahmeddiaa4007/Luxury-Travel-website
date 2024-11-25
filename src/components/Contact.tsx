import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-serif mb-6">Start Your Journey</h2>
            <p className="text-gray-300 mb-8">
              Contact our luxury travel specialists to begin planning your
              perfect getaway
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" />
                <span>+44-7737283887</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4" />
                <span>hello@dseom.co.uk</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4" />
                <span>
                  71-75 Shelton Street, Covent Garden, WC2H 9JQ London, UK
                </span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Tell us about your dream vacation"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <button className="w-full bg-white text-black py-3 rounded-lg hover:bg-opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
