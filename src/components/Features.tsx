
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(featureRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={featureRef}
      className={cn(
        "feature-card",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "transition-all duration-500"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 text-perf-accent w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-perf-text/70">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
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

  const features = [
    {
      title: "AI-Driven Insights",
      description: "Our proprietary algorithms analyze movement patterns and performance indicators to provide actionable recommendations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9v0" />
          <path d="M12 15v0" />
          <path d="M9 12h0" />
          <path d="M15 12h0" />
        </svg>
      )
    },
    {
      title: "Real-Time Stat Tracking",
      description: "Monitor key metrics during live games and practices, with instant updates and alerts for critical performance thresholds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
          <path d="M8 13h2" />
          <path d="M8 17h2" />
          <path d="M14 13h2" />
          <path d="M14 17h2" />
        </svg>
      )
    },
    {
      title: "Multi-Sport Support",
      description: "Configurable metrics and analysis for a wide range of sports, from team-based to individual competitions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.9 4.9 14.2 14.2" />
        </svg>
      )
    },
    {
      title: "Mobile-Friendly Dashboard",
      description: "Access insights anywhere with our responsive design that works on phones, tablets, and desktops.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      )
    },
    {
      title: "Performance Comparisons",
      description: "Compare current performance to historical data, teammates, or industry benchmarks to identify areas for improvement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7" />
          <path d="M12 14v7" />
          <path d="m5 14 7-3 7 3" />
        </svg>
      )
    },
    {
      title: "Continuous Learning Algorithms",
      description: "Our system gets smarter with each use, adapting to player development and changing performance patterns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74" />
          <path d="M5 19h14" />
          <path d="M5 15v-2a7 7 0 0 1 14 0v2" />
        </svg>
      )
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-gradient-to-b from-perf-background via-perf-background/95 to-perf-background">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-perf-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-perf-accent2/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <h2 
            className={cn(
              "section-title inline-block mb-4 after:left-1/2 after:-translate-x-1/2",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            Powerful Features
          </h2>
          <p 
            className={cn(
              "text-lg text-perf-text/80",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            From real-time analytics to predictive insights, our platform provides everything you need to maximize performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
