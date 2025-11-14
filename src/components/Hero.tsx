import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";
import BrandsCarousel from "@/components/BrandsCarousel";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
        <div className="absolute inset-0 bg-white/20" />
        <div className="halftone-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center font-poppins mt-8 md:mt-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-roboto-condensed font-bold leading-[0.9] mb-2 animate-fade-in tracking-tight opacity-0" style={{ animationDelay: '0.1s' }}>
          Framing Stories<br />
          That Move the World.
        </h1>
        
        <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-4 animate-slide-up font-normal leading-relaxed opacity-0" style={{ animationDelay: '0.3s' }}>
          For brands that believe in emotion, not just exposure.
        </p>

        <div className="flex justify-center animate-scale-in opacity-0" style={{ animationDelay: '0.7s' }}>
          <Button 
            size="lg" 
            className="text-base px-8 py-4 rounded-full group hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out"
            asChild
          >
            <a href="https://calendly.com/business-cadrage" target="_blank" rel="noopener noreferrer">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <BrandsCarousel />
      </div>
    </section>
  );
};

export default Hero;
