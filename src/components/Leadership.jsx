import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const team = [
  {
    name: 'Stella Chimba',
    role: 'Shabita Founder & CEO',
    bio: 'With over a decade of luxury market expertise, Stella guides Longhorn Apartments with an uncompromising vision for quality and architectural brilliance.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop'
  },
  {
    name: 'David Chileshe',
    role: 'Lead Architect',
    bio: 'Meticulous and forward-thinking, David ensures every structure blends seamlessly with its environment while maximizing spatial utility.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Sarah Mulenga',
    role: 'Project Director',
    bio: 'Sarah oversees execution from foundation to finishing, bridging the gap between design theory and concrete reality. Her projects run flawlessly on schedule.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop'
  }
];

export default function Leadership() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.leader-card', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section id="team" ref={container} className="py-32 px-6 bg-brand-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-brand-red font-heading text-4xl md:text-5xl font-bold mb-6">
            The Visionaries.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Led by Stella Chimba, our team of architects and engineers ensure that every project meets the exacting standards of our Longhorn commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((leader, i) => (
            <div key={i} className="leader-card group bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="rounded-[2rem] overflow-hidden mb-6 aspect-square relative sepia-[0.3] group-hover:sepia-0 transition-all duration-700">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center px-4">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-brand-red text-sm font-semibold uppercase tracking-wider mb-4">{leader.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
