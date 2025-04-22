import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

type TabType = 'athlete' | 'coach' | 'team';

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('athlete');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const demoContent = {
    athlete: {
      title: "Athlete View",
      description: "Track your personal performance metrics, training intensity, and progress over time.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    coach: {
      title: "Coach View",
      description: "Monitor your team's overall performance, individual player stats, and strategic opportunities.",
      image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    team: {
      title: "Team View",
      description: "Analyze team dynamics, opponent strategies, and collective performance trends.",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    }
  };

  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-perf-background to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-perf-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-perf-accent2/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={cn(
              "section-title inline-block mb-4 after:left-1/2 after:-translate-x-1/2",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            See Perf Analysis in Action
          </h2>
          <p 
            className={cn(
              "text-lg text-perf-text/80 mb-8",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            Explore how our platform works from different perspectives.
          </p>
        </div>
        
        {/* Tabs */}
        <div 
          className={cn(
            "flex justify-center mb-8 border-b border-white/10 overflow-x-auto",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: '0.3s' }}
        >
          <TabButton 
            active={activeTab === 'athlete'} 
            onClick={() => setActiveTab('athlete')}
          >
            Athlete View
          </TabButton>
          <TabButton 
            active={activeTab === 'coach'} 
            onClick={() => setActiveTab('coach')}
          >
            Coach View
          </TabButton>
          <TabButton 
            active={activeTab === 'team'} 
            onClick={() => setActiveTab('team')}
          >
            Team View
          </TabButton>
        </div>
        
        {/* Content */}
        <div 
          className={cn(
            "flex flex-col lg:flex-row items-center gap-8 max-w-5xl mx-auto",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="w-full lg:w-1/2">
            <div className={cn(
              "relative p-1 rounded-lg bg-gradient-to-r",
              activeTab === 'athlete' ? "from-perf-accent to-perf-accent2" : 
              activeTab === 'coach' ? "from-perf-accent to-perf-purple" :
              "from-perf-accent2 to-perf-purple"
            )}>
              <div className="relative bg-perf-background/95 p-4 rounded-md overflow-hidden">
                <div className="aspect-video rounded-md overflow-hidden flex items-center justify-center bg-black/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      aria-label="Play demo video"
                      className={cn(
                        "w-16 h-16 rounded-full bg-perf-accent flex items-center justify-center",
                        "transition-transform hover:scale-110",
                        "before:content-[''] before:w-0 before:h-0",
                        "before:border-t-transparent before:border-t-[10px]",
                        "before:border-b-transparent before:border-b-[10px]",
                        "before:border-l-white before:border-l-[18px]",
                        "before:ml-1"
                      )}
                    ></button>
                  </div>
                  <img 
                    src={demoContent[activeTab].image} 
                    alt={demoContent[activeTab].title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-perf-accent">
              {demoContent[activeTab].title}
            </h3>
            <p className="text-perf-text/80 mb-6">
              {demoContent[activeTab].description}
            </p>
            
            {/* Demo features list */}
            <ul className="space-y-4">
              {['Performance Tracking', 'Data Visualization', 'Personalized Insights'].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-perf-accent mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-8 btn-primary">
              Request Full Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TabButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => {
  return (
    <button
      className={cn(
        "px-6 py-3 transition-all whitespace-nowrap",
        active
          ? "text-perf-accent border-b-2 border-perf-accent font-medium"
          : "text-perf-text/70 hover:text-perf-text"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Demo;
