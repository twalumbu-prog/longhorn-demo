import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TrendingUp, PieChart, Users, ArrowRight, Table as TableIcon, Activity, Briefcase } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

const ShieldCheck = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

const unitTrustsData = [
  { year: '2023', fund: 'Longhorn Balanced Fund', roi: '14.2%', risk: 'Medium' },
  { year: '2023', fund: 'Equity Growth Fund', roi: '18.5%', risk: 'High' },
  { year: '2023', fund: 'Fixed Income Fund', roi: '11.8%', risk: 'Low' },
  { year: '2022', fund: 'Longhorn Balanced Fund', roi: '12.8%', risk: 'Medium' },
  { year: '2022', fund: 'Equity Growth Fund', roi: '15.4%', risk: 'High' },
  { year: '2021', fund: 'Longhorn Balanced Fund', roi: '13.5%', risk: 'Medium' },
];

const fundManagementStats = [
  { label: 'Assets Under Management', value: 'K2.4B+', icon: <PieChart className="text-brand-red" /> },
  { label: 'Institutional Clients', value: '85+', icon: <Briefcase className="text-brand-red" /> },
  { label: 'Avg. Portfolio Growth', value: '15.8%', icon: <Activity className="text-brand-red" /> },
  { label: 'Compliance Rating', value: 'AAA', icon: <ShieldCheck className="text-brand-red" /> },
];

const smeCreditStats = [
  { label: 'Total Disbursed', value: 'K450M+', detail: 'To over 1,200 SMEs' },
  { label: 'Repayment Rate', value: '98.2%', detail: 'Industry-leading stability' },
  { label: 'Employment Created', value: '5,000+', detail: 'Jobs supported in Zambia' },
];


export default function FeaturedListings() {
  const [activeTab, setActiveTab] = useState('unitTrusts');
  const container = useRef(null);
  const contentRef = useRef(null);
  const { openModal } = useDemo();

  useGSAP(() => {
    gsap.from('.listing-header', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  useGSAP(() => {
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, { dependencies: [activeTab], scope: container });

  return (
    <section id="stats" ref={container} className="py-32 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Toggle */}
        <div className="listing-header flex flex-col items-center mb-16 text-center">
          <p className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-4">Performance Metrics</p>
          <h2 className="text-brand-red font-heading text-5xl md:text-6xl font-bold mb-10">
            Key Statistics
          </h2>

          <div className="flex flex-wrap justify-center bg-white shadow-sm border border-gray-100 p-1.5 rounded-[2rem] md:rounded-3xl relative gap-1">
            {[
              { id: 'unitTrusts', label: 'Unit Trusts', icon: <TrendingUp size={16} /> },
              { id: 'fundManagement', label: 'Fund Management', icon: <PieChart size={16} /> },
              { id: 'smeCredit', label: 'SME Credit', icon: <Users size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-bold flex items-center space-x-2 transition-all duration-300 z-10 ${
                  activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeTab === tab.id && (
                  <span className="absolute inset-0 bg-brand-red rounded-xl md:rounded-2xl shadow-lg shadow-brand-red/20 -z-10" />
                )}
                <span className="flex-shrink-0">{tab.icon}</span>
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div ref={contentRef} className="min-h-[500px]">
          {activeTab === 'unitTrusts' && (
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">Fund Performance</h3>
                  <p className="text-gray-500">Historical returns across our primary unit trust offerings.</p>
                </div>
                <button 
                  onClick={openModal}
                  className="bg-brand-red text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20 flex items-center"
                >
                  Invest Now <ArrowRight size={18} className="ml-2" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-6 pt-2 font-bold text-gray-400 uppercase tracking-widest text-[10px] whitespace-nowrap pr-8">Year</th>
                      <th className="pb-6 pt-2 font-bold text-gray-400 uppercase tracking-widest text-[10px] min-w-[200px] pr-8">Fund Name</th>
                      <th className="pb-6 pt-2 font-bold text-gray-400 uppercase tracking-widest text-[10px] whitespace-nowrap pr-8">Return (ROI)</th>
                      <th className="pb-6 pt-2 font-bold text-gray-400 uppercase tracking-widest text-[10px] whitespace-nowrap">Risk Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {unitTrustsData.map((row, idx) => (
                      <tr key={idx} className="group hover:bg-gray-50 transition-colors">
                        <td className="py-4 font-mono font-bold text-[10px] md:text-sm text-gray-900">{row.year}</td>
                        <td className="py-4 font-heading text-lg md:text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">{row.fund}</td>
                        <td className="py-4">
                          <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl text-sm md:text-lg">
                            +{row.roi}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-3 py-1 rounded-full ${
                            row.risk === 'High' ? 'bg-orange-100 text-orange-600' : 
                            row.risk === 'Medium' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'
                          }`}>
                            {row.risk}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'fundManagement' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8">Growth Trajectory</h3>
                <div className="space-y-6 md:space-y-8">
                  {fundManagementStats.map((stat, idx) => (
                    <div key={idx} className="flex items-center p-4 md:p-6 bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 hover:scale-[1.02] transition-transform">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 shadow-sm flex-shrink-0">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-red rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl md:blur-3xl"></div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10">Institutional Grade Management</h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 relative z-10">
                  Our fund management division leverages proprietary algorithms and deep market insights to deliver consistent alpha for our institutional partners.
                </p>
                <div className="flex gap-4 relative z-10">
                  <button onClick={openModal} className="bg-white text-brand-red px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm tracking-widest uppercase hover:bg-gray-100 transition-all flex items-center">
                    Download Report <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'smeCredit' && (
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-orange-400 to-brand-red"></div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
                  {smeCreditStats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-red mb-4">{stat.value}</p>
                      <p className="font-bold text-gray-900 text-base md:text-lg mb-2">{stat.label}</p>
                      <p className="text-gray-500 text-sm">{stat.detail}</p>
                    </div>
                  ))}
               </div>
               <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-12 border-t border-gray-100 pt-12">
                  <button 
                    onClick={openModal}
                    className="w-full md:w-auto bg-brand-red text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold tracking-widest text-[10px] md:text-xs uppercase hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20"
                  >
                    Apply for Finance
                  </button>
                  <button 
                    onClick={openModal}
                    className="w-full md:w-auto border border-gray-200 text-gray-900 bg-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold tracking-widest text-[10px] md:text-xs uppercase hover:border-brand-red transition-all"
                  >
                    More Information
                  </button>
               </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
