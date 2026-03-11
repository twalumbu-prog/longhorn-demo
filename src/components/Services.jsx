import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Trees, Palette, DraftingCompass, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemo } from '../context/DemoContext';

const services = [
  {
    title: "Landscaping Services",
    description: "Luscious manicured green lawns, elegant stone pathways, and tasteful outdoor lighting that elevate your estate's natural surroundings.",
    image: "/assets/landscaping.png",
    link: "/services/landscaping",
    icon: <Trees size={24} className="text-brand-burgundy" />
  },
  {
    title: "Interior Design",
    description: "Curated environments that balance warmth and architectural minimalism.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
    link: "/services/interiors",
    icon: <Palette size={24} className="text-brand-burgundy" />
  },
  {
    title: "Property Development",
    description: "End-to-end luxury development from land acquisition to final handover.",
    image: "/assets/property_development.png",
    link: "/services/development",
    icon: <DraftingCompass size={24} className="text-brand-burgundy" />
  },
  {
    title: "Apartments & Rentals",
    description: "Exclusive access to premium condos and high-end rental properties.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    link: "/services/rentals",
    icon: <Building size={24} className="text-brand-burgundy" />
  }
];

export default function Services() {
  const container = useRef(null);
  const { openModal } = useDemo();

  useGSAP(() => {
    // Faster, snappier entry animation for cards
    gsap.fromTo('.service-card', 
      { 
        y: 100, 
        opacity: 0,
        rotationX: -10,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        force3D: true,
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
        }
      }
    );

    // Fade in section title with parallax
    gsap.from('.section-title', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
        end: "top 40%",
        scrub: true
      }
    });

  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative py-32 px-6 bg-brand-soft overflow-hidden">

      {/* ── Ambient background orbs ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Architectural element: hollow squares drifting up */}
        {[
          { size: 48, left: '8%',  delay: '0s',   dur: '20s', rotate: 12,  opacity: 0.12 },
          { size: 20, left: '22%', delay: '4s',   dur: '26s', rotate: 45,  opacity: 0.14 },
          { size: 36, left: '41%', delay: '1.5s', dur: '22s', rotate: 20,  opacity: 0.10 },
          { size: 56, left: '60%', delay: '7s',   dur: '30s', rotate: 60,  opacity: 0.09 },
          { size: 16, left: '76%', delay: '3s',   dur: '18s', rotate: 30,  opacity: 0.15 },
          { size: 40, left: '88%', delay: '9s',   dur: '24s', rotate: 15,  opacity: 0.11 },
        ].map((el, i) => (
          <div key={i} className="absolute bottom-0" style={{ left: el.left, animationDelay: el.delay }}>
            <div
              style={{
                width: el.size, height: el.size,
                border: `1.5px solid rgba(97,5,38,${el.opacity})`,
                borderRadius: 4,
                transform: `rotate(${el.rotate}deg)`,
                animation: `arch-float ${el.dur} linear infinite`,
                animationDelay: el.delay,
              }}
            />
          </div>
        ))}

        {/* Diamond outlines */}
        {[
          { size: 24, left: '15%', delay: '2s',   dur: '28s', opacity: 0.13 },
          { size: 18, left: '52%', delay: '6s',   dur: '22s', opacity: 0.10 },
          { size: 30, left: '82%', delay: '0.5s', dur: '32s', opacity: 0.08 },
        ].map((el, i) => (
          <div key={i} className="absolute bottom-0" style={{ left: el.left }}>
            <div
              style={{
                width: el.size, height: el.size,
                border: `1.5px solid rgba(255,168,51,${el.opacity})`,
                transform: 'rotate(45deg)',
                animation: `arch-float ${el.dur} linear infinite`,
                animationDelay: el.delay,
              }}
            />
          </div>
        ))}

        {/* Cross marks "+", architectural precision feel */}
        {[
          { left: '32%', delay: '5s',   dur: '24s', opacity: 0.12, scale: 1    },
          { left: '68%', delay: '11s',  dur: '20s', opacity: 0.10, scale: 0.7  },
          { left: '5%',  delay: '8s',   dur: '28s', opacity: 0.08, scale: 1.2  },
        ].map((el, i) => (
          <div
            key={i}
            className="absolute bottom-0 flex items-center justify-center"
            style={{ left: el.left, animation: `arch-float ${el.dur} linear infinite`, animationDelay: el.delay }}
          >
            <svg width={`${16 * el.scale}`} height={`${16 * el.scale}`} viewBox="0 0 16 16" fill="none">
              <line x1="8" y1="0" x2="8" y2="16" stroke={`rgba(97,5,38,${el.opacity})`} strokeWidth="1.5" />
              <line x1="0" y1="8" x2="16" y2="8" stroke={`rgba(97,5,38,${el.opacity})`} strokeWidth="1.5" />
            </svg>
          </div>
        ))}
      </div>

      {/* Keyframe definitions */}
      <style>{`
        @keyframes arch-float {
          0%   { transform: translateY(0px)   rotate(var(--r, 0deg)) scale(1);    opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { transform: translateY(-110vh) rotate(calc(var(--r, 0deg) + 180deg)) scale(1.05); opacity: 0; }
        }
      `}</style>
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="section-title text-brand-burgundy font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
              What We Build
            </h2>
            <p className="section-title text-gray-600 text-lg md:text-xl font-sans leading-relaxed">
              We deliver architectural excellence across residential, commercial, and interior domains.
            </p>
          </div>
          <button 
            onClick={openModal}
            className="section-title hidden md:inline-flex items-center text-brand-burgundy font-semibold uppercase tracking-wider text-sm hover:text-brand-gold transition-colors interactive-link mt-8 md:mt-0"
          >
            View All Services <ArrowUpRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="services-grid grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-stretch perspective-1000">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group relative bg-white rounded-3xl md:rounded-[2.5rem] overflow-hidden flex flex-col interactive-link shadow-sm hover:shadow-2xl transition-all duration-500 w-full will-change-transform"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-brand-burgundy/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
              
              {/* Content */}
              <div className="p-5 sm:p-7 md:p-9 flex-grow flex flex-col">
                <div className="w-12 h-12 bg-brand-soft rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-burgundy group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-burgundy transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <button 
                  onClick={openModal}
                  className="inline-flex items-center text-brand-burgundy font-medium text-sm group-hover:text-brand-gold transition-colors w-fit pt-4 border-t border-gray-100 w-full justify-between"
                >
                  <span className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Explore Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={openModal}
          className="md:hidden mt-12 inline-flex items-center text-brand-burgundy font-semibold uppercase tracking-wider text-sm hover:text-brand-gold transition-colors interactive-link"
        >
          View All Services <ArrowUpRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
