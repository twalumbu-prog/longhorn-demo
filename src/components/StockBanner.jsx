import React from 'react';

const STOCKS = [
  { name: 'Longhorn Balanced Fund', price: 'K15.42', change: '+1.25%', upward: true },
  { name: 'SME Credit Fund', price: 'K10.85', change: '+0.82%', upward: true },
  { name: 'Equity Growth Fund', price: 'K22.10', change: '-0.15%', upward: false },
  { name: 'Fixed Income Fund', price: 'K12.30', change: '+0.45%', upward: true },
  { name: 'Money Market Fund', price: 'K14.15', change: '+1.10%', upward: true },
  { name: 'USD Eurobond Fund', price: '$1.05', change: '-0.05%', upward: false },
];

export default function StockBanner() {
  return (
    <div className="w-full bg-gray-900 overflow-hidden py-2 border-b border-white/5 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...STOCKS, ...STOCKS].map((stock, idx) => (
          <div key={idx} className="flex items-center px-8 space-x-3">
            <span className="text-white/60 font-medium text-xs tracking-wider uppercase">
              {stock.name}
            </span>
            <span className="text-white font-bold text-xs">
              {stock.price}
            </span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              stock.upward ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'
            }`}>
              {stock.change}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
