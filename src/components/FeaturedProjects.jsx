import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, UserPlus, FileCheck, Landmark } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Choose your Fund',
    description: 'Select from our range of Unit Trusts, SME Credit funds, or tailored pension management solutions that align with your financial goals.',
    icon: <UserPlus className="w-10 h-10 text-brand-red" />,
    color: 'bg-brand-red/5'
  },
  {
    number: '02',
    title: 'Complete Documentation',
    description: 'Our streamlined digital onboarding process ensures your KYC and investment agreements are handled professionally and securely.',
    icon: <FileCheck className="w-10 h-10 text-brand-red" />,
    color: 'bg-orange-500/5'
  },
  {
    number: '03',
    title: 'Fund your Account',
    description: 'Once verified, deploy your capital via our secure payment gateways and start tracking your portfolio performance in real-time.',
    icon: <Landmark className="w-10 h-10 text-brand-red" />,
    color: 'bg-gray-900/5'
  }
];

export default function FeaturedProjects() {
  const container = useRef(null);
  const { openModal } = useDemo();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: ".steps-wrapper",
        start: "top 20%",
        end: "bottom 80%",
        pin: ".steps-header",
      });
      
      const stepCards = gsap.utils.toArray('.step-card');
      stepCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      });
    });
  }, { scope: container });

  return (
    <section id="get-started" ref={container} className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto steps-wrapper flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left fixed header */}
        <div className="md:w-1/3 steps-header self-start">
          <p className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-4">Onboarding</p>
          <h2 className="text-brand-red font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
            How to Get Started.
          </h2>
          <p className="text-gray-600 text-lg font-sans leading-relaxed mb-8">
            Starting your investment journey with Longhorn is built on transparency and speed. Follow these three steps to begin growing your wealth today.
          </p>
          
          <button 
            onClick={openModal}
            className="magnetic-button bg-brand-red text-white px-8 py-4 rounded-full font-bold tracking-widest text-xs uppercase flex items-center group mb-10 shadow-xl shadow-brand-red/20"
          >
            Start Onboarding
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="w-12 h-1 bg-brand-red"></div>
        </div>

        {/* Right scrolling steps */}
        <div className="md:w-2/3 flex flex-col gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card group relative">
              <div className={`p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] ${step.color} border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-sm flex items-center justify-center border border-gray-50 mb-4 md:mb-0">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-brand-red font-bold text-sm tracking-tighter bg-brand-red/10 px-3 py-1 rounded-full border border-brand-red/20">Step {step.number}</span>
                      <h3 className="font-heading text-2xl md:text-4xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                     <div className="w-12 h-12 rounded-full border border-brand-red flex items-center justify-center text-brand-red">
                        <ArrowRight size={24} />
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute left-20 bottom-[-3rem] w-px h-12 bg-gray-100"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
