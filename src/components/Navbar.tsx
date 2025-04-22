import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-perf-background/90 backdrop-blur-md py-3 shadow-lg" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center text-2xl font-poppins font-bold text-perf-text">
          <img 
            src="/lovable-uploads/3443d947-397f-4863-aacd-ffd0823846d3.png" 
            alt="Perf Analysis Logo" 
            className="h-10 mr-3"
          />
          <span className="text-perf-accent">Perf</span>Analysis
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#demo">Demo</NavLink>
          <NavLink href="#contact" className="btn-primary py-2">Contact Us</NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-perf-text"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-perf-background/95 backdrop-blur-md absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
            <MobileNavLink href="#features" onClick={toggleMobileMenu}>Features</MobileNavLink>
            <MobileNavLink href="#demo" onClick={toggleMobileMenu}>Demo</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact Us</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className={cn(
      "font-medium text-perf-text hover:text-perf-accent transition-colors relative",
      "after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0",
      "after:bg-perf-accent after:origin-bottom-right after:transition-transform",
      "hover:after:scale-x-100 hover:after:origin-bottom-left",
      className
    )}
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick,
  children 
}: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="block py-2 px-4 text-perf-text hover:bg-white/10 rounded-md transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
