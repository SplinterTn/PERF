
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface ObjectiveCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ title, description, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
        "flex flex-col items-center text-center transition-all duration-500",
        "hover:border-perf-accent/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center text-perf-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-perf-text/70">{description}</p>
    </div>
  );
};

const Objectives: React.FC = () => {
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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-perf-background to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-perf-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-perf-accent2/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <h2 
            className={cn(
              "section-title inline-block mb-4 after:left-1/2 after:-translate-x-1/2",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            Our Mission
          </h2>
          <p 
            className={cn(
              "text-lg text-perf-text/80 mb-8",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            We're democratizing sports analytics by combining AI and real-time statistics, 
            making professional-level insights accessible to athletes and teams at every level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ObjectiveCard
            title="AI-Powered Engine"
            description="Advanced machine learning algorithms that identify patterns and insights beyond human perception."
            delay={300}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                <path d="M20 12a8 8 0 1 0-8 8" />
                <circle cx="12" cy="12" r="1" />
                <path d="M17 12a5 5 0 0 0-5-5" />
              </svg>
            }
          />
          <ObjectiveCard
            title="Real-Time Stats"
            description="Instant performance metrics that update live during games and training sessions."
            delay={400}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            }
          />
          <ObjectiveCard
            title="Player & Team Insights"
            description="Detailed analytics for individual player development and team strategy optimization."
            delay={500}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <ObjectiveCard
            title="Scalable for All Sports"
            description="Flexible platform adaptable to any sport, from soccer and basketball to tennis and beyond."
            delay={600}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m4.9 4.9 14.2 14.2" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Objectives;
