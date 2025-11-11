import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clapperboard, Camera, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Clapperboard,
      title: "Pre-Production",
      description: "Pre-production is the backbone of any creative project. It's where ideas take shape, budgets get set, schedules are made, and all the important details are planned out before production begins."
    },
    {
      icon: Camera,
      title: "Production",
      description: "This is where the magic happens. Our experienced team brings your vision to life with state-of-the-art equipment and creative expertise, capturing every perfect frame."
    },
    {
      icon: Sparkles,
      title: "Post-Production",
      description: "The final touch that makes everything shine. From editing to color grading, sound design to visual effects, we polish every detail to perfection."
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            From Concept
            <br />
            To Creation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every frame tells a story. Let us help you tell yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl group"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                  animation: 'slideUp 0.8s ease-out forwards'
                }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-foreground/5 rounded-2xl w-fit group-hover:bg-foreground/10 transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
