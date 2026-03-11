import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedListings from '../components/FeaturedListings';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainContainer = useRef(null);
  
  // Ensure we start at the top on every mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Parallax Orchestration
    // Pin the Hero section while Services covers it
    ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    // Subtile scaling/dimming effect on Hero as it's covered
    gsap.to(".hero-content-wrapper", {
      opacity: 0.4,
      scale: 0.9,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    });

  }, { scope: mainContainer });

  return (
    <div ref={mainContainer} className="w-full relative">
      <div className="hero-section w-full border-none">
        <Hero />
      </div>
      <div className="services-section relative z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.3)]">
        <Services />
      </div>
      <FeaturedListings />
      <FeaturedProjects />
      <Testimonials />
      <ContactSection />
    </div>
  )
}

