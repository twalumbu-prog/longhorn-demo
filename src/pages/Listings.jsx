import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { BedDouble, Maximize, MapPin } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Greenland Park Estates',
    location: 'Lusaka Province',
    type: 'Sale',
    price: 'ZMW 1,700,000',
    size: '145 m²',
    beds: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
    tag: 'Newly Listed'
  },
  {
    id: 2,
    title: 'Chalala Condo Apartment',
    location: 'Lilayi Road, Lusaka',
    type: 'Rent',
    price: 'ZMW 12,000 / month',
    size: '120 m²',
    beds: 2,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop',
    tag: 'Premium Rental'
  },
  {
    id: 3,
    title: 'New Kasama Luxury Plot',
    location: 'New Kasama, Lusaka',
    type: 'Land',
    price: 'ZMW 850,000',
    size: '2000 m²',
    beds: 0,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2728&auto=format&fit=crop',
    tag: 'Prime Location'
  },
  {
    id: 4,
    title: 'Leopard\'s Hill Villa',
    location: 'Leopard\'s Hill, Lusaka',
    type: 'Sale',
    price: 'ZMW 4,200,000',
    size: '450 m²',
    beds: 5,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop',
    tag: 'Signature Property'
  }
];

export default function Listings() {
  const [filter, setFilter] = useState('All');
  const container = useRef(null);

  const filteredProperties = filter === 'All' 
    ? properties 
    : properties.filter(p => p.type === filter);

  useGSAP(() => {
    gsap.from('.listing-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: 'all' // Allows layout changes without animation conflict
    });
  }, { scope: container, dependencies: [filter] });

  return (
    <div ref={container} className="pt-32 pb-24 px-6 min-h-screen bg-brand-soft">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-brand-burgundy font-heading text-5xl md:text-6xl font-bold mb-4">
              Property Portfolio.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-sans max-w-2xl">
              Explore our curated selection of premium real estate, from signature developments to exclusive land plots.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {['All', 'Sale', 'Rent', 'Land'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-brand-burgundy text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat === 'All' ? 'View All' : `For ${cat}`}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map(property => (
            <div key={property.id} className="listing-card group bg-white rounded-[2.5rem] overflow-hidden flex flex-col interactive-link shadow-sm hover:shadow-xl transition-shadow duration-500">
              
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-burgundy text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                    {property.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-brand-burgundy/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2 truncate">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <MapPin size={16} className="mr-2 text-brand-gold" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center space-x-6 mb-8 pt-6 border-t border-gray-100">
                  {property.beds > 0 && (
                    <div className="flex items-center text-gray-700">
                      <BedDouble size={20} className="mr-3 text-brand-burgundy/60" />
                      <span className="font-medium text-lg">{property.beds}</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-700">
                    <Maximize size={18} className="mr-3 text-brand-burgundy/60" />
                    <span className="font-medium text-lg">{property.size}</span>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Asking Price</p>
                    <p className="text-xl font-bold text-brand-burgundy">{property.price}</p>
                  </div>
                  <Link 
                    to={`/booking?property=${encodeURIComponent(property.title)}`}
                    className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-colors duration-300"
                  >
                    <span className="text-xl leading-none -mt-1">+</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

