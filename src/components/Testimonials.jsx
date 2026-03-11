import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Heritage Home Construction surpassed every expectation. Their attention to architectural detail and commitment to the timeline made building our custom home a masterclass in project management.",
    author: "James M.",
    role: "Homeowner, New Kasama"
  },
  {
    text: "The level of finish and structural integrity in their commercial work is second to none. Stella's team brings a visionary approach backed by rigorous engineering standards.",
    author: "Eleanor T.",
    role: "Director, Apex Properties"
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
    <section ref={container} className="py-32 px-6 bg-brand-burgundy text-white relative overflow-hidden">
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 text-brand-gold/10 -rotate-12">
        <Quote size={240} className="fill-current" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 font-heading">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted By Homeowners.</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card border border-white/20 p-10 md:p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-sm relative">
              <Quote size={32} className="text-brand-gold absolute top-8 left-8" />
              <p className="text-xl md:text-2xl leading-relaxed mt-8 mb-8 font-serif italic text-white/90">
                "{t.text}"
              </p>
              <div className="border-t border-white/20 pt-6">
                <p className="font-bold text-lg tracking-wide">{t.author}</p>
                <p className="text-brand-gold text-sm tracking-widest uppercase mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
