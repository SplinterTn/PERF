
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Objectives from '@/components/Objectives';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Contact from '@/components/Contact';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-perf-background text-perf-text">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Objectives />
      <Features />
      <Demo />
      <Contact />
      
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-xl font-poppins font-bold">
                <span className="text-perf-accent">Perf</span>Analysis
              </a>
              <p className="text-sm text-perf-text/60 mt-1">
                AI-Powered Sports Performance Analytics
              </p>
            </div>
            
            <div className="text-sm text-perf-text/60">
              &copy; {new Date().getFullYear()} Perf Analysis. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
