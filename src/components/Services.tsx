import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Pre-Production",
      description: "The backbone of any creative project. Where ideas take shape, budgets get set, schedules are made, and all important details are planned.",
      delay: '0.1s'
    },
    {
      number: "02",
      title: "Production",
      description: "Where the magic happens. Our experienced team brings your vision to life with state-of-the-art equipment and creative expertise.",
      delay: '0.2s'
    },
    {
      number: "03",
      title: "Post-Production",
      description: "The final touch that makes everything shine. From editing to color grading, sound design to visual effects, we polish every detail.",
      delay: '0.3s'
    },
    {
      number: "04",
      title: "Social Media Management",
      description: "Strategic content planning and community engagement. We help you build and maintain a strong presence across all social platforms.",
      delay: '0.4s'
    },
    {
      number: "05",
      title: "Content Production",
      description: "From concept to delivery, we create compelling visual stories. High-quality content tailored to resonate with your audience.",
      delay: '0.5s'
    },
    {
      number: "06",
      title: "PR & Communications",
      description: "Strategic public relations that amplify your message. We craft narratives that connect with media and audiences alike.",
      delay: '0.6s'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-section-bg/30 via-transparent to-section-bg/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4 opacity-0 animate-fade-in">
            <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-muted-foreground">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From Concept To Creation
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-normal opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Every frame tells a story. Let us help you tell yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative opacity-0 animate-slide-up"
              style={{ animationDelay: service.delay }}
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-foreground/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-6">
                  <span className="text-6xl md:text-7xl font-black text-foreground/10 group-hover:text-foreground/20 transition-colors duration-300">
                    {service.number}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-semibold text-sm md:text-base hover:bg-transparent w-fit"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-2 duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" variant="outline" className="rounded-full px-8 py-5 text-sm md:text-base hover:scale-105 transition-transform duration-300">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
