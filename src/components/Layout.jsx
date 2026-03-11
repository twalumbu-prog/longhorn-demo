import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DemoModal from './DemoModal';
import { useDemo } from '../context/DemoContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const { isModalOpen, closeModal } = useDemo();

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Noise overlay is in index.html, filtering the whole page */}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
