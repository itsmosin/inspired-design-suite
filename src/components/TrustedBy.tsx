import rafflesLogo from "@/assets/raffles-logo.jpeg";
import hyattLogo from "@/assets/hyatt-logo.png";
import fourSeasonsLogo from "@/assets/four-seasons-logo.png";
import redBullLogo from "@/assets/red-bull-logo.png";
import fairmontLogo from "@/assets/fairmont-logo.webp";
import beautifulDestinationsLogo from "@/assets/beautiful-destinations-logo.png";
import sayajiLogo from "@/assets/sayaji-logo.jpg";

const TrustedBy = () => {
  const clients = [
    { name: "Four Seasons", logo: fourSeasonsLogo },
    { name: "Raffles", logo: rafflesLogo },
    { name: "Hyatt", logo: hyattLogo },
    { name: "Red Bull", logo: redBullLogo },
    { name: "Fairmont", logo: fairmontLogo },
    { name: "Beautiful Destinations", logo: beautifulDestinationsLogo },
    { name: "Sayaji", logo: sayajiLogo },
  ];

  return (
    <section className="py-16 md:py-20 bg-section-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xs md:text-sm font-medium text-muted-foreground mb-10 md:mb-12 tracking-widest uppercase">
          Brands We've Worked With
        </h2>
        
        {/* Scrolling Logo Strip */}
        <div className="relative">
          <div className="logo-scroll-container">
            <div className="logo-scroll-track">
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div 
                  key={`first-${index}`}
                  className="logo-item"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div 
                  key={`second-${index}`}
                  className="logo-item"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
