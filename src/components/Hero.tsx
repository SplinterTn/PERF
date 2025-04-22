import React from 'react';
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center relative pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <span className="inline-block text-perf-accent text-lg font-semibold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              AI-Powered Sports Analytics
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              Track. <span className="text-perf-accent">Analyze.</span> Perform.
            </h1>
            <p className="text-lg md:text-xl text-perf-text/80 mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
              Perf Analysis uses cutting-edge AI and performance metrics to elevate athletes, coaches, and teams to their peak potential.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
              <a href="#features" className="btn-primary">
                See How It Works
              </a>
              <a href="#demo" className="px-6 py-3 border border-perf-accent text-perf-accent rounded-md font-semibold transition-all hover:bg-perf-accent/10">
                Watch Demo
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1.1s' }}>
            <div className="relative">
              <div className={cn(
                "bg-gradient-to-r from-perf-accent to-perf-purple p-1 rounded-lg",
                "animate-float",
                "shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              )}>
                <div className="bg-perf-background/95 p-4 rounded-lg backdrop-blur-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                    alt="Athletes in action" 
                    className="w-full h-auto rounded-lg object-cover aspect-video"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-perf-accent font-semibold">Performance Score</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">93.7</span>
                        <span className="text-green-400 text-sm">↑ 12%</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {[1,2,3].map((_, i) => (
                        <div key={i} className="w-6 h-1 bg-perf-accent/80 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-perf-accent2/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-perf-accent/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-perf-accent"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
