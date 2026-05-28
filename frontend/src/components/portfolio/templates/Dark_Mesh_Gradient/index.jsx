import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';
import data from '../../../../data/dummy_data.json';

import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default function DarkMeshGradient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  // Track active section and scroll top button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Determine active section
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden scroll-smooth">
      {/* 1. ANIMATED GRADIENT MESH BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Purple Blob */}
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/10 w-96 h-96 md:w-[500px] md:h-[500px] bg-purple-600/15 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Pink Blob */}
        <motion.div
          animate={{
            x: [0, -50, 70, 0],
            y: [0, 90, -60, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-1/10 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-pink-600/15 rounded-full blur-[130px] mix-blend-screen"
        />

        {/* Blue Blob */}
        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -40, 70, 0],
            scale: [1, 1.1, 0.85, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 left-1/4 w-[380px] h-[380px] md:w-[480px] md:h-[480px] bg-blue-600/15 rounded-full blur-[125px] mix-blend-screen"
        />
      </div>

      {/* 2. STICKY NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            {data.personal.name}
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/10 text-white shadow-lg shadow-white/5 border border-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-gray-950/95 border-b border-white/10 py-6 px-6 md:hidden flex flex-col gap-3 backdrop-blur-lg shadow-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. PORTFOLIO SECTIONS */}
      <main className="relative z-10 max-w-7xl mx-auto w-full pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* 4. SCROLL TO TOP FLOATING BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-xl bg-purple-600/90 hover:bg-purple-500 border border-purple-400/20 text-white shadow-xl shadow-purple-600/20 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
