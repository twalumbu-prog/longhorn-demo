import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useDemo();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Listings', path: '/listings' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Pricing', path: '/pricing' },
  ];

  // Force white background on mobile, or when scrolled, or when not on home
  const bgColor = (isScrolled || !isHome) ? 'bg-white shadow-sm' : 'bg-transparent md:bg-transparent bg-white shadow-sm md:shadow-none';
  const textColor = (isScrolled || !isHome) ? 'text-gray-900' : 'text-white md:text-white text-gray-900';
  const logoColor = (isScrolled || !isHome) ? 'text-brand-burgundy' : 'text-white md:text-white text-brand-burgundy';
  const shadowClass = (isScrolled || !isHome) ? '' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]';
  const gradientOverlay = (isScrolled || !isHome) ? '' : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent';

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${bgColor} ${gradientOverlay}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`interactive-link flex items-center ${shadowClass}`}>
          <img 
            src="/assets/logo.png" 
            alt="Heritage Home Construction" 
            className={`h-12 md:h-16 w-auto object-contain transition-all duration-500 ${
              isScrolled || !isHome ? '' : 'brightness-[10] contrast-[2] drop-shadow-2xl'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase interactive-link hover:text-brand-gold transition-colors ${textColor} ${shadowClass}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={openModal}
            className="magnetic-button bg-brand-burgundy text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide"
          >
            <span className="relative z-10">Request Consultation</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button 
            onClick={openModal}
            className="bg-brand-burgundy text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest"
          >
            Connect
          </button>
          <button 
            className="p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full px-6 py-8">
          <div className="flex justify-between items-center mb-12">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img 
                src="/assets/logo.png" 
                alt="Heritage Home Construction" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} className="text-gray-900" />
            </button>
          </div>
          <div className="flex flex-col space-y-8 flex-grow">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-heading text-gray-900 hover:text-brand-gold transition-colors flex items-center justify-between group"
              >
                {link.name}
                <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-gold" />
              </Link>
            ))}
          </div>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal();
            }}
            className="mt-auto bg-brand-burgundy text-white text-center py-4 rounded-full text-lg font-medium"
          >
            Request Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
