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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">CADRAGE®</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-foreground/60 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-foreground/60 transition-colors">
              About
            </a>
            <a href="#work" className="text-sm font-medium hover:text-foreground/60 transition-colors">
              Our Work
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-foreground/60 transition-colors">
              Contact
            </a>
          </div>

          <Button size="sm" className="rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
