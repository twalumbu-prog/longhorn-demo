import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const container = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const propertyTitle = searchParams.get('property') || 'Selected Property';
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Ensure start at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    gsap.from('.booking-element', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container, dependencies: [isSubmitted] });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div ref={container} className="min-h-screen bg-brand-soft pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="booking-element text-center max-w-lg bg-white p-12 rounded-[3rem] shadow-sm">
          <CheckCircle2 size={64} className="text-brand-burgundy mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">Request Received</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for your interest in {propertyTitle}. Our leasing team will contact you within 24 hours to confirm your viewing schedule.
          </p>
          <button 
            onClick={() => navigate('/listings')} 
            className="magnetic-button bg-brand-burgundy text-white px-8 py-4 rounded-full font-medium tracking-wide w-full"
          >
            <span className="relative z-10">Return to Listings</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={container} className="pt-32 pb-24 px-6 min-h-screen bg-brand-soft">
      <div className="max-w-4xl mx-auto">
        
        <button 
          onClick={() => navigate(-1)} 
          className="booking-element bg-white/50 hover:bg-white text-gray-600 px-5 py-2.5 rounded-full text-sm font-medium mb-12 inline-flex items-center transition-colors interactive-link"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>

        <div className="booking-element mb-12">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-3">Rental Inquiry</p>
          <h1 className="text-brand-burgundy font-heading text-5xl md:text-6xl font-bold mb-4">
            {propertyTitle}
          </h1>
          <p className="text-gray-600 text-lg font-sans">
            Please provide your details below to request a viewing or start the leasing process.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="booking-element bg-white p-10 md:p-14 rounded-[3rem] shadow-sm space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
              <input required type="text" className="bg-brand-soft border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
              <input required type="text" className="bg-brand-soft border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input required type="email" className="bg-brand-soft border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
              <input required type="tel" className="bg-brand-soft border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Preferred Move-in Date</label>
            <input required type="date" className="bg-brand-soft border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all text-gray-700" />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Additional Comments or Questions</label>
            <textarea rows="4" className="bg-brand-soft border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-gold transition-all resize-none"></textarea>
          </div>

          <div className="pt-4">
            <button type="submit" className="magnetic-button w-full md:w-auto bg-brand-burgundy text-white px-10 py-4 rounded-full font-bold tracking-wide text-lg">
              <span className="relative z-10">Submit Request</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
