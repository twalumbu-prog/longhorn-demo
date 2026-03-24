import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-red text-white rounded-t-[2.5rem] md:rounded-t-[3rem] pt-12 md:pt-20 pb-10 px-6 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="interactive-link flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="Longhorn Investment Associates" 
              className="h-10 md:h-16 w-auto object-contain transition-all duration-500"
            />
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs mt-4">
            Zambia's emerging investment firm delivering competitive performance and tailored financial solutions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-medium text-lg mb-6 tracking-wide text-white">Company</h3>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/#team" className="hover:text-white transition-colors">Leadership Team</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors font-bold text-white">Agency Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-6 tracking-wide text-white">Services</h3>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><Link to="/#services" className="hover:text-white transition-colors">Longhorn Unit Trusts</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">Pension Fund Management</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">SME Credit Finance</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">Securities Trading & Brokerage</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-6 tracking-wide text-white">Contact</h3>
          <ul className="space-y-4 text-white/70 text-sm">
            <li>Lusaka, Zambia</li>
            <li>masterfees101@gmail.com</li>
            <li>+260 97 000 0000</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
        <p>&copy; {new Date().getFullYear()} Longhorn Investment Associates. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
