import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useDemo } from '../context/DemoContext';
import StockBanner from './StockBanner';

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
    { name: 'Stats', path: '/#stats' },
    { name: 'How to Start', path: '/#get-started' },
  ];

  // No longer forcing white background on mobile when at top of Home
  // Always white background or transparent with dark text since hero is white
  const bgColor = isScrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-md shadow-none';
  const textColor = 'text-gray-900';
  const logoColor = 'text-brand-red';

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${bgColor}`}>
      <StockBanner />
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="interactive-link flex items-center">
          <img 
            src="/assets/logo.png" 
            alt="Longhorn Investment Associates" 
            className="h-10 md:h-16 w-auto object-contain transition-all duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase interactive-link hover:text-brand-red transition-colors ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-6 ml-4">
            <button 
              onClick={openModal}
              className="px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            >
              Login
            </button>
            <button 
              onClick={openModal}
              className="magnetic-button bg-brand-red text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-brand-red/90 transition-all"
            >
              <span className="relative z-10">Invest Now</span>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button 
            onClick={openModal}
            className="bg-brand-red text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest"
          >
            Connect
          </button>
          <button 
            className={`p-2 transition-colors ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                alt="Longhorn Investment Associates" 
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
                className="text-3xl font-heading text-gray-900 hover:text-brand-red transition-colors flex items-center justify-between group"
              >
                {link.name}
                <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-red" />
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col space-y-4">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-center py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="w-full bg-brand-red text-white text-center py-4 rounded-full text-lg font-medium"
            >
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
