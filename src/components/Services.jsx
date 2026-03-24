import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, TrendingUp, ShieldCheck, Landmark, BarChart3 } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

// Custom Animated SVG Icon Components
const IconWrapper = ({ children }) => (
  <div className="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-brand-red/20 shadow-gray-200">
    {children}
  </div>
);

const UnitTrustsIcon = () => (
  <IconWrapper>
    <TrendingUp size={32} className="text-brand-red group-hover:text-white transition-colors" />
  </IconWrapper>
);

const PensionIcon = () => (
  <IconWrapper>
    <ShieldCheck size={32} className="text-brand-red group-hover:text-white transition-colors" />
  </IconWrapper>
);

const SMECreditIcon = () => (
  <IconWrapper>
    <Landmark size={32} className="text-brand-red group-hover:text-white transition-colors" />
  </IconWrapper>
);

const BrokerageIcon = () => (
  <IconWrapper>
    <BarChart3 size={32} className="text-brand-red group-hover:text-white transition-colors" />
  </IconWrapper>
);

const services = [
  {
    title: "Longhorn Unit Trusts",
    description: "Diverse investment portfolios tailored for long-term growth and capital preservation. Access professionally managed funds with ease.",
    icon: <UnitTrustsIcon />,
    cta: "Start Investing"
  },
  {
    title: "Pension Fund Management",
    description: "Securing your future with robust pension administration and strategic asset allocation meant for sustainable retirement income.",
    icon: <PensionIcon />,
    cta: "Secure Future"
  },
  {
    title: "SME Credit Finance",
    description: "Empowering Zambian businesses with flexible credit solutions, working capital, and strategic financial advisory services.",
    icon: <SMECreditIcon />,
    cta: "Access Capital"
  },
  {
    title: "Securities Trading",
    description: "Expert brokerage services providing seamless access to capital markets, equity trading, and fixed-income instruments.",
    icon: <BrokerageIcon />,
    cta: "Trade Now"
  }
];

export default function Services() {
  const container = useRef(null);
  const { openModal } = useDemo();

  useGSAP(() => {
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
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
        }
      }
    );

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
    <section id="services" ref={container} className="relative py-32 px-6 bg-white overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="section-title text-brand-red font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
              What We Offer
            </h2>
            <p className="section-title text-gray-600 text-lg md:text-xl font-sans leading-relaxed">
              Tailored financial solutions designed to accelerate growth and protect wealth for individuals and businesses.
            </p>
          </div>
          <button 
            onClick={openModal}
            className="section-title hidden md:inline-flex items-center text-brand-red font-semibold uppercase tracking-wider text-sm hover:text-brand-red transition-colors mt-8 md:mt-0 group"
          >
            Explore All Solutions <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="services-grid grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group relative bg-gray-50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 flex-shrink-0">
                {service.icon}
              </div>
              
              <div className="relative z-10 flex flex-col h-full text-center md:text-left">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                   <button 
                    onClick={openModal}
                    className="group/btn inline-flex items-center justify-between bg-white border border-gray-200 text-gray-900 px-8 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm"
                  >
                    {service.cta}
                    <ArrowUpRight className="ml-4 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
