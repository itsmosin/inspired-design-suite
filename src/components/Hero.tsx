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
          We Seize The
          <br />
          <span className="block mt-1">Perfect Frame.</span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up font-normal leading-relaxed opacity-0" style={{ animationDelay: '0.4s' }}>
          In a world rushing forward, we pause.
          <br />
          We frame. We remember.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-scale-in opacity-0" style={{ animationDelay: '0.7s' }}>
          <Button size="lg" className="text-base px-8 py-6 rounded-full group hover:scale-105 transition-transform duration-300">
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full group hover:scale-105 transition-transform duration-300">
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
