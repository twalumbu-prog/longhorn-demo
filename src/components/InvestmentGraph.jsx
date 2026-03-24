import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InvestmentGraph() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();
    
    // Set up path for animation
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.inOut",
    })
    .to({}, { duration: 1 }) // Pause at peak
    .to(path, {
      strokeDashoffset: -length,
      duration: 2,
      ease: "power2.inOut",
    });

    // Counting up effect
    const counter = { val: 1250000 };
    gsap.to(counter, {
      val: 2840000,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%",
      },
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = new Intl.NumberFormat('en-ZM', {
            style: 'currency',
            currency: 'ZMW',
            maximumFractionDigits: 0,
          }).format(counter.val);
        }
      }
    });

    // Animate grid lines
    gsap.from('.graph-grid-line', {
      opacity: 0,
      scaleX: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out"
    });

    // Animate points
    gsap.from('.graph-point', {
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-brand-red/5 blur-[100px] rounded-full group-hover:bg-brand-red/10 transition-colors duration-700"></div>

      {/* Header Info */}
      <div className="absolute top-12 left-12 z-10">
        <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">Portfolio Value</span>
        <h3 ref={counterRef} className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-none">
          ZMW 1,250,000
        </h3>
        <div className="flex items-center mt-3 space-x-2">
          <span className="flex items-center text-emerald-500 font-bold text-sm bg-emerald-500/10 px-2 py-1 rounded-lg">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            +18.4%
          </span>
          <span className="text-gray-400 text-xs font-medium">vs last year</span>
        </div>
      </div>

      {/* SVG Graph */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 500"
        className="w-full h-auto drop-shadow-2xl relative z-0"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid Lines */}
        <line className="graph-grid-line" x1="50" y1="100" x2="750" y2="100" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
        <line className="graph-grid-line" x1="50" y1="200" x2="750" y2="200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
        <line className="graph-grid-line" x1="50" y1="300" x2="750" y2="300" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
        <line className="graph-grid-line" x1="50" y1="400" x2="750" y2="400" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />

        {/* The Growth Curve */}
        <path
          ref={pathRef}
          d="M 50 450 Q 200 420 300 300 T 550 150 T 750 50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E31B23" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E31B23" stopOpacity="1" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#E31B23" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Data Points */}
        <circle className="graph-point" cx="50" cy="450" r="6" fill="#E31B23" />
        <circle className="graph-point" cx="300" cy="300" r="6" fill="#E31B23" />
        <circle className="graph-point" cx="550" cy="150" r="6" fill="#E31B23" />
        <circle className="graph-point" cx="750" cy="50" r="10" fill="#E31B23" stroke="white" strokeWidth="4" />
      </svg>

      {/* Modern Terminal/FX Elements */}
      <div className="absolute bottom-12 right-12 flex space-x-6">
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-gray-400 font-bold uppercase">Active Trades</span>
          <span className="text-sm font-mono font-bold text-gray-900">4,812</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-gray-400 font-bold uppercase">Market Status</span>
          <span className="text-sm font-mono font-bold text-emerald-500 uppercase tracking-tighter flex items-center">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
            Open
          </span>
        </div>
      </div>
    </div>
  );
}
