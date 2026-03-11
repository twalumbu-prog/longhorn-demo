import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useDemo } from '../context/DemoContext';

export default function Hero() {
  const container = useRef(null);
  const { openModal } = useDemo();

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-text-line', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    })
    .from('.hero-cta', {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .from('.trust-strip', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen w-full flex flex-col pb-12 px-6 overflow-hidden bg-brand-soft">
      {/* Background with subtle color overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Cinematic dark/warm gradient overlay to make text pop while keeping warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent mix-blend-multiply"></div>
      </div>
      
      {/* Main Content Wrapper - Animated via GSAP ScrollTrigger in Home.jsx */}
      <div className="hero-content-wrapper w-full h-full flex flex-col relative z-10 flex-grow">
        {/* Main Text Block */}
        <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center items-start pt-32 pb-16">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <h1 className="hero-text-line text-white font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] pb-2">
                Timeless Homes.
              </h1>
            </div>
            <div className="overflow-hidden mb-6">
              <h1 className="hero-text-line text-brand-gold font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] italic pb-2">
                Crafted With Precision.
              </h1>
            </div>
            
            <div className="overflow-hidden mb-10">
              <p className="hero-text-line text-white/90 text-xl font-sans max-w-xl leading-relaxed">
                Heritage Home Construction — Building premium living spaces and architectural masterworks.
              </p>
            </div>

            <div className="hero-cta flex flex-wrap gap-6 items-center">
              <button 
                onClick={openModal}
                className="magnetic-button bg-brand-burgundy text-white px-8 py-4 rounded-full font-medium tracking-wide flex items-center group"
              >
                <span className="relative z-10 flex items-center">
                  Request Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <Link 
                to="/listings" 
                className="magnetic-button border border-white/30 text-white bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/10"
              >
                <span>View Properties</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Strip stays at the bottom */}
        <div className="trust-strip max-w-7xl mx-auto w-full border-t border-white/20 pt-8 mt-auto hidden md:grid grid-cols-3 gap-8 text-white">
          <div>
            <span className="block text-brand-gold font-heading text-3xl mb-1">20+</span>
            <span className="text-sm font-medium uppercase tracking-wider text-white/70">Years of Experience</span>
          </div>
          <div>
            <span className="block text-brand-gold font-heading text-3xl mb-1">150+</span>
            <span className="text-sm font-medium uppercase tracking-wider text-white/70">Projects Completed</span>
          </div>
          <div>
            <span className="block text-brand-gold font-heading text-3xl mb-1">K1.2B+</span>
            <span className="text-sm font-medium uppercase tracking-wider text-white/70">Properties Sold</span>
          </div>
        </div>
      </div>
    </section>
  );
}
