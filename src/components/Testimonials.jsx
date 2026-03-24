import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Longhorn Investment Associates has transformed our approach to wealth management. Their Unit Trusts have consistently outperformed the market benchmarks, providing us with peace of mind and steady growth.",
    author: "Malama C.",
    role: "Portfolio Investor"
  },
  {
    text: "As an SME owner, finding reliable credit finance was a challenge until we partnered with Longhorn. Their team understood our business needs and provided the capital required to scale our operations safely.",
    author: "Bwalya K.",
    role: "Founder, Zenith Logistics"
  }
];

export default function Testimonials() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-40 px-6 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative large quotes - subtle and character-giving */}
      <div className="absolute top-0 right-0 text-white/[0.03] -rotate-12 translate-x-1/4 -translate-y-1/4 select-none">
        <Quote size={600} className="fill-current" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Trusted by Our Investors.</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card group border border-white/10 p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] bg-white/[0.02] backdrop-blur-xl relative hover:bg-white/[0.05] transition-colors duration-500">
              <div className="absolute top-10 left-10 md:top-12 md:left-12">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-red/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                   <Quote size={20} className="text-brand-red fill-brand-red/10" />
                </div>
              </div>
              <p className="text-xl md:text-3xl leading-relaxed mt-10 md:mt-12 mb-10 md:mb-12 text-white/90">
                "{t.text}"
              </p>
              <div className="border-t border-white/10 pt-10 flex items-center justify-between">
                <div>
                  <p className="font-bold text-xl tracking-wide">{t.author}</p>
                  <p className="text-brand-red text-xs tracking-widest uppercase mt-2 font-bold">{t.role}</p>
                </div>
                <div className="hidden sm:block">
                   <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-brand-red fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
