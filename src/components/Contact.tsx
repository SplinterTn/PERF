
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
    newsletter: false
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Message sent successfully! We'll be in touch soon.");
    setFormData({
      name: '',
      email: '',
      role: '',
      message: '',
      newsletter: false
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-perf-background to-transparent"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-perf-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className={cn(
              "transition-all duration-500",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h2 className="section-title mb-6 text-4xl font-bold">Get in Touch</h2>
            <p className="text-perf-text/80 mb-8">
              Ready to revolutionize your sports performance analytics? 
              Reach out to learn how Perf Analysis can help you achieve peak performance.
            </p>
            
            <div className="mb-12">
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-2">Email Us</h4>
                <a 
                  href="mailto:info@perfanalysis.com" 
                  className="text-perf-accent hover:underline"
                >
                  info@perfanalysis.com
                </a>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'instagram', 'youtube'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social}`}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-perf-accent hover:text-perf-accent transition-colors"
                    >
                      <SocialIcon type={social as 'twitter' | 'linkedin' | 'instagram' | 'youtube'} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-perf-accent/10 border border-perf-accent/30">
              <h4 className="text-xl font-bold mb-2">Ready to see the difference?</h4>
              <p className="mb-4">Schedule a personalized demo with our team.</p>
              <button className="btn-primary">Book a Demo</button>
            </div>
          </div>
          
          <div 
            className={cn(
              "transition-all duration-500",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: '0.2s' }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="role" className="block mb-2 font-medium">Your Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Select your role</option>
                  <option value="athlete">Athlete</option>
                  <option value="coach">Coach</option>
                  <option value="club">Sports Club</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleCheckbox}
                    className="rounded border-white/20 bg-transparent text-perf-accent focus:ring-perf-accent"
                  />
                  <span>Subscribe to our newsletter</span>
                </label>
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{
  type: 'twitter' | 'linkedin' | 'instagram' | 'youtube';
}> = ({ type }) => {
  switch (type) {
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'youtube':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );
  }
};

export default Contact;
