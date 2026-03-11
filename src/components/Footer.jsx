import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-burgundy text-white rounded-t-[3rem] pt-20 pb-10 px-6 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="mb-6 block w-fit bg-white p-2 rounded-xl shadow-sm">
            <img 
              src="/assets/logo.png" 
              alt="Heritage Home Construction" 
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs mt-4">
            Building timeless homes and premium living spaces with architectural precision.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-medium text-lg mb-6 tracking-wide text-brand-gold">Company</h3>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><Link to="/#about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><Link to="/#team" className="hover:text-brand-gold transition-colors">Leadership Team</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-gold transition-colors font-bold text-white">Agency Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-6 tracking-wide text-brand-gold">Services</h3>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><Link to="/#services" className="hover:text-brand-gold transition-colors">Custom Home Construction</Link></li>
            <li><Link to="/#services" className="hover:text-brand-gold transition-colors">Interior Design</Link></li>
            <li><Link to="/#services" className="hover:text-brand-gold transition-colors">Property Development</Link></li>
            <li><Link to="/listings" className="hover:text-brand-gold transition-colors">Apartments & Rentals</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-6 tracking-wide text-brand-gold">Contact</h3>
          <ul className="space-y-4 text-white/70 text-sm">
            <li>Lusaka, Zambia</li>
            <li>masterfees101@gmail.com</li>
            <li>+260 97 000 0000</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
        <p>&copy; {new Date().getFullYear()} Heritage Home Construction. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
