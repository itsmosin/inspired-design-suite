import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6 max-w-6xl">
        <div className="flex items-center justify-between bg-background/10 backdrop-blur-md shadow-md border border-border/10 transition-all duration-300 rounded-full px-6 py-3 font-poppins">
          <div className="text-xl sm:text-2xl font-black tracking-tight">CADRAGE®</div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#work" className="text-sm font-medium hover:text-primary transition-colors">
              Our Work
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <Button 
            size="sm" 
            className="rounded-full text-xs sm:text-sm px-4 sm:px-6 hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://calendly.com/business-cadrage" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
