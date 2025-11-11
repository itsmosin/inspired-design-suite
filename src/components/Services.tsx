import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Video, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Pre-Production",
      description: "Pre-production is the backbone of any creative project. It's where ideas take shape, budgets get set, schedules are made, and all the important details are planned out before production begins.",
      delay: '0.1s'
    },
    {
      icon: Video,
      title: "Production",
      description: "This is where the magic happens. Our experienced team brings your vision to life with state-of-the-art equipment and creative expertise, capturing every perfect frame.",
      delay: '0.3s'
    },
    {
      icon: Sparkles,
      title: "Post-Production",
      description: "The final touch that makes everything shine. From editing to color grading, sound design to visual effects, we polish every detail to perfection.",
      delay: '0.5s'
    }
  ];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-section-bg/50 via-transparent to-section-bg/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block mb-6 opacity-0 animate-fade-in">
            <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Our Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-[0.95] opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From Concept
            <br />
            <span className="text-foreground/60">To Creation</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Every frame tells a story. Let us help you tell yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative opacity-0 animate-slide-up"
                style={{ animationDelay: service.delay }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card border-2 border-border rounded-3xl p-10 hover:border-foreground/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="mb-8">
                    <div className="inline-flex p-5 bg-foreground/5 rounded-2xl group-hover:bg-foreground/10 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-10 w-10" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="mb-1">
                    <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase">
                      Step {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-semibold text-base hover:bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2 duration-300" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg hover:scale-105 transition-transform duration-300">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
