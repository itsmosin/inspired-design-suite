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
        <div className="absolute inset-0" />
        <div className="halftone-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center font-poppins">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-roboto-condensed font-bold leading-[1.0] mb-6 animate-fade-in tracking-tight opacity-0" style={{ animationDelay: '0.1s' }}>
          Framing Stories<br />
          That Move the World.
        </h1>
        
        <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up font-normal leading-relaxed opacity-0" style={{ animationDelay: '0.3s' }}>
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

        <BrandsCarousel />
      </div>
    </section>
  );
};

export default Hero;
