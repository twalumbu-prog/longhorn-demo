import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

gsap.registerPlugin(ScrollTrigger);


const projects = [
  {
    title: 'Modern Luxury Villa',
    location: 'New Kasama, Lusaka',
    services: 'Custom Build, Arch. Design',
    description: 'A 5-bedroom luxury estate featuring double-volume living spaces, a floating staircase, and premium natural stone finishes throughout. Completed ahead of schedule with immaculate attention to detail.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Heritage Commercial Park',
    location: 'Lusaka Province',
    services: 'Commercial Development, Landscaping',
    description: 'A state-of-the-art 3-bedroom commercial housing project integrating sustainable living with modern conveniences. The project included exhaustive site preparation, architectural planning, and premium landscaping.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'The Contemporary Office',
    location: 'Lusaka CBD',
    services: 'Interior Design, Refurbishment',
    description: 'Total redesign of a 1200sqm corporate headquarters. Delivered a highly functional, light-filled environment prioritizing acoustic performance and executive luxury.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
  }
];

export default function FeaturedProjects() {
  const container = useRef(null);
  const { openModal } = useDemo();

  useGSAP(() => {
    // Pinning the left side while scrolling through projects on the right
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: ".projects-wrapper",
        start: "top 20%",
        end: "bottom 80%",
        pin: ".projects-header",
      });
      
      const projectCards = gsap.utils.toArray('.project-card');
      projectCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      });
    });
  }, { scope: container });

  return (
    <section id="projects" ref={container} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto projects-wrapper flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left fixed header */}
        <div className="md:w-1/3 projects-header self-start">
          <h2 className="text-brand-burgundy font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
            Craftsmanship<br/>Portfolio.
          </h2>
          <p className="text-gray-600 text-lg font-sans leading-relaxed mb-8">
            Our featured case studies highlight the intersection of rigorous engineering and elegant design. Every project tells a story of transformation.
          </p>
          
          <button 
            onClick={openModal}
            className="magnetic-button bg-brand-burgundy text-white px-8 py-4 rounded-full font-medium tracking-wide flex items-center group mb-10"
          >
            <span className="relative z-10 flex items-center">
              Explore our Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <div className="w-12 h-1 bg-brand-gold"></div>
        </div>

        {/* Right scrolling projects */}
        <div className="md:w-2/3 flex flex-col gap-24">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card group">
              <div className="overflow-hidden rounded-[2.5rem] mb-8 relative aspect-[16/10]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 border-l border-brand-burgundy/20 pl-4 py-1">
                  <p className="font-heading font-medium text-brand-burgundy text-lg mb-1">{project.location}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{project.services}</p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
