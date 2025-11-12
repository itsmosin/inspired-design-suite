import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/40" />
        <div className="halftone-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-6 animate-fade-in tracking-tight opacity-0" style={{ animationDelay: '0.1s' }}>
          Framing Stories That Move the World.
        </h1>
        
        <p className="text-sm md:text-base text-foreground/60 max-w-xl mx-auto mb-10 animate-slide-up font-normal leading-relaxed opacity-0" style={{ animationDelay: '0.3s' }}>
          For brands that believe in emotion, not just exposure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-scale-in opacity-0" style={{ animationDelay: '0.7s' }}>
          <Button 
            size="lg" 
            className="text-base px-8 py-6 rounded-full group hover:scale-110 hover:shadow-xl transition-all duration-500 ease-out"
            asChild
          >
            <a href="https://calendly.com/business-cadrage" target="_blank" rel="noopener noreferrer">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base px-8 py-6 rounded-full group hover:scale-110 hover:shadow-xl transition-all duration-500 ease-out"
            asChild
          >
            <a href="https://docsend.com/v/935q6/cadrage" target="_blank" rel="noopener noreferrer">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
