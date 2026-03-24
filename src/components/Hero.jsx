import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useDemo } from '../context/DemoContext';
import InvestmentGraph from './InvestmentGraph';

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
    .from('.hero-graph-container', {
      x: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1")
    .from('.trust-strip', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[100svh] lg:min-h-screen w-full flex flex-col pb-6 px-6 overflow-hidden bg-white">
      {/* Main Content Wrapper */}
     <div className="hero-content-wrapper w-full h-full flex flex-col relative z-10 flex-grow max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between flex-grow pt-28 md:pt-32 lg:pt-32 pb-8 md:pb-16 gap-4 md:gap-12">
          
          {/* Left Block: Text & CTAs */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="overflow-hidden">
              <h1 className="hero-text-line text-gray-900 font-heading text-3xl md:text-7xl lg:text-8xl font-bold leading-[1.1] md:leading-[0.9] pb-1 md:pb-2">
                Emerging
              </h1>
            </div>
            <div className="overflow-hidden mb-3 md:mb-6">
              <h1 className="hero-text-line text-brand-red font-heading text-3xl md:text-7xl lg:text-8xl font-bold leading-[1.1] md:leading-[0.9] italic pb-1 md:pb-2">
                Investment Firm.
              </h1>
            </div>
            
            <div className="overflow-hidden mb-6 md:mb-10">
              <p className="hero-text-line text-gray-600 text-sm md:text-xl font-sans max-w-xl leading-relaxed">
                Longhorn Investment Associates — Driving wealth creation in Zambia with competitive investment performance and integrity.
              </p>
            </div>
            <div className="hero-cta w-full sm:w-auto mt-2 md:mt-0">
              <button 
                onClick={openModal}
                className="magnetic-button w-full sm:w-auto bg-brand-red text-white px-8 py-3.5 md:px-12 md:py-5 rounded-full font-bold tracking-widest text-[9px] md:text-xs uppercase hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20 group"
              >
                Invest Now
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Right Block: Animated Investment Graph */}
          <div className="hero-graph-container w-full lg:w-1/2 aspect-square relative max-w-[260px] sm:max-w-[350px] md:max-w-none mx-auto flex-shrink-0">
            <InvestmentGraph />
          </div>

        </div>

        {/* Trust Strip */}
        <div className="trust-strip w-full border-t border-gray-100 pt-8 mt-auto hidden md:grid grid-cols-3 gap-8 text-gray-900">
          <div>
            <span className="block text-brand-red font-heading text-3xl mb-1">K2.4B+</span>
            <span className="text-sm font-medium uppercase tracking-wider text-gray-400">Assets Under Management</span>
          </div>
          <div>
            <span className="block text-brand-red font-heading text-3xl mb-1">12.5%</span>
            <span className="text-sm font-medium uppercase tracking-wider text-gray-400">Avg. Annual Yield</span>
          </div>
          <div>
            <span className="block text-brand-red font-heading text-3xl mb-1">15k+</span>
            <span className="text-sm font-medium uppercase tracking-wider text-gray-400">Active Investors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
