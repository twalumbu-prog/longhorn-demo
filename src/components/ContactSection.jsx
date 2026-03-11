import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.contact-form', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-brand-burgundy font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
            Start Your Project.
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-sans leading-relaxed">
            Whether building a legacy home or a commercial development, trust Heritage Home Construction to deliver architectural excellence.
          </p>
        </div>

        <div className="contact-form w-full max-w-3xl bg-brand-soft p-10 md:p-14 rounded-[3rem] shadow-sm">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">Inquiry Type</label>
              <select className="bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-gold appearance-none text-gray-700">
                <option>Custom Home Construction</option>
                <option>Property Development</option>
                <option>Apartment Rental</option>
                <option>General Consultation</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">Project Details</label>
              <textarea 
                rows="4"
                className="bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all resize-none"
                placeholder="Tell us about your vision..."
              ></textarea>
            </div>

            <button className="magnetic-button w-full bg-brand-burgundy text-white px-8 py-5 rounded-full font-bold tracking-wide text-lg flex items-center justify-center group overflow-hidden">
              <span className="relative z-10 flex items-center">
                Request Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              We respond to all inquiries within 24 business hours.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
