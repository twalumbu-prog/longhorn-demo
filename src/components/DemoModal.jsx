import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

export default function DemoModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.modal-overlay', { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo('.modal-content', 
        { scale: 0.9, opacity: 0, y: 20 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, we would send this to a backend
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail('');
      setPhone('');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative modal-content">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          {!submitted ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-burgundy/10 rounded-2xl flex items-center justify-center text-brand-burgundy">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-burgundy">Demo Access</h3>
                  <p className="text-xs text-gray-500">Heritage Home Construction</p>
                </div>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Limited Preview
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                This is a <span className="font-bold text-brand-burgundy">Demo Website</span> and features are limited. To unlock the full product and explore our integrated systems, please connect with our technical team below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-burgundy transition-colors">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-brand-burgundy transition-all text-gray-900 font-medium"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-burgundy transition-colors">
                    <Phone size={18} />
                  </div>
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-brand-burgundy transition-all text-gray-900 font-medium"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-burgundy text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-burgundy/90 transition-all group mt-4 overflow-hidden relative shadow-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Connect With Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col items-center">
                <p className="text-xs text-center text-gray-400 mb-4">Interested in building your own luxury digital presence?</p>
                <a 
                  href="/pricing" 
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    window.location.href = '/pricing';
                  }}
                  className="text-brand-burgundy font-bold text-sm hover:underline flex items-center gap-2"
                >
                  View Our Web Development Packages <ArrowRight size={14} />
                </a>
              </div>
            </>
          ) : (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 scale-animate">
                <ShieldCheck size={40} />
              </div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Request Sent</h2>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Thank you. Our team will contact you shortly with full credentials and a technical overview.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
