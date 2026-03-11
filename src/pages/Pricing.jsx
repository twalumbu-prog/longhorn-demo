import React, { useRef } from 'react';
import { ShieldCheck, Zap, Star, Crown, Check, ArrowRight, Sparkles, CheckCircle2, TrendingUp, Gem } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useDemo } from '../context/DemoContext';

const packages = [
  {
    name: "The Foundation",
    suffix: "Package",
    price: "1,000",
    period: "Once off investment",
    bestFor: "Ideal for new schools and small businesses seeking a swift, professional digital entry point.",
    icon: <Zap size={22} />,
    accent: "text-blue-500",
    bgAccent: "bg-blue-50",
    features: [
      "1-Page Master Landing Page",
      "Mobile Responsive Architecture",
      "Core Institutional Information",
      "Integrated Contact & Location Map",
      "WhatsApp Direct Integration",
      "Standard Enquiry Capture",
      "Search Engine Indexing (SEO)",
      "3 Proven Layout Templates",
      "24-Hour Digital Deployment"
    ]
  },
  {
    name: "The Market Leader",
    suffix: "Package",
    price: "3,300",
    period: "Professional Tier",
    badge: "20% Limited Founder Discount",
    promo: "9/10 Monthly Slots Remaining",
    bestFor: "For established brands demanding credibility, structured information, and conversion-centered flow.",
    icon: <Crown size={22} />,
    accent: "text-brand-burgundy",
    bgAccent: "bg-brand-burgundy/5",
    isPopular: true,
    features: [
      "Foundation Elements Included",
      "6 Bespoke Custom Pages",
      "Premium Domain Connectivity",
      "Unique Brand Identity Design",
      "Intuitive Admin Dashboard",
      "Advanced Submission Systems",
      "Automated Fee Collection",
      "Dynamic Media Portfolio",
      "Conversion Analytics Setup",
      "Optimized Google Business Profile",
      "7-Day Strategic Delivery"
    ]
  },
  {
    name: "The Digital Elite",
    suffix: "Suite",
    price: "7,000",
    period: "Enterprise Tier",
    bestFor: "Curated for market leaders who define the standard and require an absolute luxury digital footprint.",
    icon: <Gem size={22} />,
    accent: "text-brand-gold",
    bgAccent: "bg-brand-gold/10",
    isElite: true,
    features: [
      "Market Leader Elements Included",
      "Luxury Cinematic Interface",
      "4K Video Storytelling Integration",
      "Premium Motion Mechanics",
      "3 Bespoke Architectural Concepts",
      "Enterprise Grade Components",
      "4K Professional Photography",
      "Cinematic Promotional Film",
      "Intelligent AI Engagement",
      "Bespoke Client/Parent Portal",
      "Lead Intelligence Tracking",
      "High-Competition SEO Strategy",
      "30-Day Executive Delivery"
    ]
  }
];

export default function Pricing() {
  const container = useRef(null);
  const { openModal } = useDemo();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.pricing-grid',
        start: "top 80%",
        once: true
      }
    });

    tl.fromTo('.transition-card', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo('.pricing-header', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo('.pricing-card', 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "expo.out" }, "-=0.4"
    );
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-brand-soft pt-44 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Elite Call-to-Action Header */}
        <div className="transition-card mb-24 relative p-12 md:p-20 bg-white rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 max-w-6xl mx-auto overflow-hidden group">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-burgundy/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-burgundy/10 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-soft px-4 py-2 rounded-full mb-8 border border-gray-100">
              <Sparkles size={14} className="text-brand-gold" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Digital Architecture Suite</span>
            </div>
            
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
              Architecting Your <span className="italic text-brand-burgundy">Digital Heritage</span>
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
              We don't just build websites; we craft world-class digital assets that exude authority and drive results. Start your transition to a premium online presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button 
                onClick={openModal}
                className="bg-brand-burgundy text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-burgundy/90 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 min-w-[240px]"
              >
                Request Full Product
              </button>
              <button 
                onClick={openModal}
                className="bg-white border border-gray-200 text-gray-900 px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:border-brand-burgundy transition-all hover:-translate-y-1 active:translate-y-0 min-w-[240px]"
              >
                Consult Blue Opus
              </button>
            </div>

            {/* Blue Opus Attribution */}
            <div className="mt-16 pt-12 border-t border-gray-100 max-w-2xl mx-auto text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-4 italic">Crafted & Managed By</p>
              <div className="flex items-center justify-center gap-3">
                 <div className="w-8 h-px bg-gray-200"></div>
                 <span className="font-heading text-2xl font-bold text-brand-burgundy tracking-wider">BLUE OPUS</span>
                 <div className="w-8 h-px bg-gray-200"></div>
              </div>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-md mx-auto italic font-medium">
                "The development and provision of this world-class website design is exclusively handled by the <span className="text-brand-burgundy">Blue Opus</span> digital crafting team."
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Selection */}
        <div className="pricing-header text-center mb-20">
          <h3 className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-8">Strategic Investment</h3>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 leading-tight">Selection Tiers</h2>
        </div>

        <div className="pricing-grid grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20 max-w-7xl mx-auto">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`pricing-card relative flex flex-col p-10 md:p-12 rounded-[3.5rem] transition-all duration-700 hover:-translate-y-3 shadow-sm hover:shadow-2xl ${
                pkg.isElite 
                  ? 'bg-gray-950 text-white border border-white/5' 
                  : 'bg-white text-gray-900 border border-gray-100'
              } ${
                pkg.isPopular ? 'scale-[1.02] lg:scale-105 z-10 ring-1 ring-brand-burgundy/10' : ''
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-burgundy text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                  <Star size={12} className="fill-brand-gold text-brand-gold" /> Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${pkg.bgAccent} ${pkg.accent}`}>
                  {pkg.icon}
                </div>
                
                <h4 className="flex flex-col gap-1 mb-6">
                  <span className={`text-4xl font-heading font-black tracking-tight leading-none ${pkg.isElite ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</span>
                  <span className={`text-sm font-bold uppercase tracking-widest opacity-60`}>{pkg.suffix}</span>
                </h4>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs font-bold opacity-40 uppercase tracking-widest italic">ZMW</span>
                  <span className={`text-5xl font-black tracking-tighter ${pkg.isElite ? 'text-brand-gold' : 'text-gray-900'}`}>{pkg.price}</span>
                </div>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50`}>{pkg.period}</p>
                
                {pkg.badge && (
                  <div className="bg-red-50 text-red-600 text-[9px] font-black uppercase px-4 py-1.5 rounded-full w-fit mb-4 tracking-wider animate-pulse">
                    {pkg.badge}
                  </div>
                )}
                
                <p className={`text-sm leading-relaxed ${pkg.isElite ? 'text-gray-400' : 'text-gray-500'}`}>
                  {pkg.bestFor}
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-5 flex-grow mb-12">
                <div className="w-full h-px bg-current opacity-10 mb-8"></div>
                <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-6 opacity-40`}>Capability Highlights</p>
                
                {pkg.features.map((feat, j) => (
                  <div key={j} className="flex gap-4 items-start group/feat">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      pkg.isElite ? 'bg-white/10 group-hover/feat:bg-brand-gold/20' : 'bg-brand-soft group-hover/feat:bg-brand-burgundy/10'
                    }`}>
                      <Check size={12} className={pkg.isElite ? 'text-brand-gold' : 'text-brand-burgundy'} />
                    </div>
                    <span className={`text-sm font-medium leading-[1.3] transition-colors ${
                      pkg.isElite ? 'text-gray-400 group-hover/feat:text-white' : 'text-gray-600 group-hover/feat:text-gray-900'
                    }`}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button 
                onClick={openModal}
                className={`w-full py-5 rounded-[2rem] font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 overflow-hidden group/btn ${
                  pkg.isElite 
                    ? 'bg-white text-gray-950 hover:bg-brand-gold hover:text-white' 
                    : pkg.isPopular 
                      ? 'bg-brand-burgundy text-white hover:bg-gray-900' 
                      : 'bg-white border-2 border-gray-100 text-gray-900 hover:border-brand-burgundy hover:text-brand-burgundy shadow-sm'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Select {pkg.name} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Glassmorphism Shine for Elite */}
              {pkg.isElite && (
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Trust Strip */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12 text-center text-gray-400">
           <div className="flex flex-col items-center">
             <CheckCircle2 size={24} className="mb-3 text-brand-gold opacity-50" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Post-Launch Support</span>
           </div>
           <div className="flex flex-col items-center">
             <TrendingUp size={24} className="mb-3 text-brand-gold opacity-50" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Growth Focused</span>
           </div>
           <div className="flex flex-col items-center">
             <ShieldCheck size={24} className="mb-3 text-brand-gold opacity-50" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Enterprise Security</span>
           </div>
        </div>
      </div>
    </div>
  );
}
