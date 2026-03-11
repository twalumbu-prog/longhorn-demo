import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Heart, Star, Navigation, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AnimatedNumber = ({ value, isK }) => {
  const nodeRef = useRef(null);
  
  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: nodeRef.current,
        start: "top 95%"
      },
      onUpdate: () => {
        if (nodeRef.current) {
          if (isK && value >= 1000) {
            nodeRef.current.innerText = (obj.val / 1000).toFixed(1) + 'k';
          } else {
            nodeRef.current.innerText = Math.round(obj.val);
          }
        }
      }
    });
  }, { dependencies: [value] });

  return <span ref={nodeRef}>0</span>;
};

const properties = {
  sale: [
    {
      id: "s1",
      title: "Greenland Park Estates",
      location: "Lusaka Province",
      price: "ZMW 1.7M",
      image: "/assets/modern_house.png",
      tag: "Brand New",
      views: 1200,
      type: "Sale",
      cta: "Reserve"
    },
    {
      id: "s2",
      title: "Heritage Commercial Park",
      location: "Lusaka Province",
      price: "ZMW 2.1M",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
      tag: "Recently Sold",
      views: 3400,
      type: "Sale",
      cta: "Reserve"
    },
    {
      id: "s3",
      title: "Kabulonga Luxury Villa",
      location: "Kabulonga",
      price: "ZMW 4.5M",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
      views: 850,
      type: "Sale",
      cta: "Reserve"
    },
    {
      id: "s4",
      title: "Leopard's Hill Estate",
      location: "Leopard's Hill",
      price: "ZMW 3.8M",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2664&auto=format&fit=crop",
      tag: "Brand New",
      views: 2100,
      type: "Sale",
      cta: "Reserve"
    }
  ],
  rent: [
    {
      id: "r1",
      title: "Roma Park Executive",
      location: "Roma",
      price: "ZMW 25k / mo",
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2670&auto=format&fit=crop",
      tag: "Brand New",
      type: "Rent",
      cta: "Book Now"
    },
    {
      id: "r2",
      title: "Woodlands Townhouse",
      location: "Woodlands",
      price: "ZMW 18k / mo",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop",
      type: "Rent",
      cta: "Book Now"
    },
    {
      id: "r3",
      title: "Ibex Hill Premium",
      location: "Ibex Hill",
      price: "ZMW 30k / mo",
      image: "/assets/ibex_hill.png",
      tag: "Recently Rented",
      type: "Rent",
      cta: "Book Now"
    },
    {
      id: "r4",
      title: "Chudleigh Estate",
      location: "Chudleigh",
      price: "ZMW 22k / mo",
      image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2673&auto=format&fit=crop",
      type: "Rent",
      cta: "Book Now"
    }
  ],
  apartments: [
    {
      id: "a1",
      title: "Nice Apartment",
      location: "Chalala, Lilayi Road",
      price: "ZMW 12k / night",
      image: "/assets/cozy_apartment.png",
      tag: "Guest Favorite",
      lovedBy: 145,
      type: "Booking",
      cta: "Book Now"
    },
    {
      id: "a2",
      title: "Rhodes Park Studio",
      location: "Rhodes Park",
      price: "ZMW 15k / night",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
      lovedBy: 89,
      type: "Booking",
      cta: "Book Now"
    },
    {
      id: "a3",
      title: "Mass Media Penthouse",
      location: "Mass Media",
      price: "ZMW 28k / night",
      image: "/assets/mass_media.png",
      tag: "Brand New",
      lovedBy: 34,
      type: "Booking",
      cta: "Book Now"
    },
    {
      id: "a4",
      title: "Longacres Loft",
      location: "Longacres",
      price: "ZMW 20k / night",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2670&auto=format&fit=crop",
      lovedBy: 210,
      type: "Booking",
      cta: "Book Now"
    }
  ]
};

export default function FeaturedListings() {
  const [activeTab, setActiveTab] = useState('sale');
  const [liked, setLiked] = useState({});
  const container = useRef(null);
  const gridRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    // Scroll reveal
    gsap.from('.listing-header', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  useGSAP(() => {
    // Animate grid change
    gsap.fromTo(gridRef.current.children, 
      { opacity: 0, y: 30, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power3.out" 
      }
    );
  }, { dependencies: [activeTab], scope: container });

  const toggleLike = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentListings = properties[activeTab];

  return (
    <section ref={container} className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Toggle */}
        <div className="listing-header flex flex-col items-center mb-16 text-center">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">Discover</p>
          <h2 className="text-brand-burgundy font-heading text-5xl md:text-6xl font-bold mb-10">
            Exclusive Listings
          </h2>

          <div className="inline-flex bg-gray-100 p-1.5 rounded-full relative">
            {['sale', 'rent', 'apartments'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 z-10 ${
                  activeTab === tab ? 'text-brand-burgundy' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeTab === tab && (
                  <span className="absolute inset-0 bg-white rounded-full shadow-sm -z-10" />
                )}
                {tab === 'apartments' ? 'Apartments' : `Property for ${tab}`}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-16 mb-16">
          {currentListings.map((property) => (
            <div 
              key={property.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => navigate(`/booking?property=${encodeURIComponent(property.title)}`)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-100">
                <div className="absolute inset-0 bg-brand-burgundy/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                
                {/* Overlay Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {property.tag && (
                    <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md ${
                      property.tag === 'Recently Sold' || property.tag === 'Recently Rented' 
                        ? 'bg-red-500/90 text-white' 
                        : 'bg-white/90 text-brand-burgundy'
                    }`}>
                      {property.tag}
                    </span>
                  )}
                  {property.lovedBy && (
                    <span className="px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md bg-white/90 text-gray-900 flex items-center">
                      <Star size={12} className="text-brand-gold mr-1 fill-brand-gold" />
                      <AnimatedNumber value={property.lovedBy} /> Loved
                    </span>
                  )}
                  {property.views && (
                    <span className="px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md bg-white/90 text-gray-900 flex items-center">
                      <Navigation size={12} className="text-blue-500 mr-1" />
                      <AnimatedNumber value={property.views} isK={property.views >= 1000} /> Views
                    </span>
                  )}
                </div>

                {/* Like Button */}
                <button 
                  onClick={(e) => toggleLike(e, property.id)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Heart size={24} className={`transition-colors duration-300 ${liked[property.id] ? 'fill-red-500 text-red-500' : 'text-white'}`} strokeWidth={1.5} />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-1">
                <div className="mb-1">
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg truncate">{property.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">{property.location}</p>
                <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <p className="font-bold text-brand-burgundy text-lg">{property.price}</p>
                  
                  {/* Primary Visual Hierarchy CTA */}
                  <span className="bg-brand-burgundy text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto">
                    {property.cta} <ArrowRight size={14} className="ml-2" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="flex justify-center">
          <Link 
            to="/listings"
            className="magnetic-button border border-gray-300 text-gray-800 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-gray-50 transition-colors flex items-center group"
          >
            <span>Explore All Properties</span>
            <ArrowRight size={18} className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
