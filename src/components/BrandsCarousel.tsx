import rafflesLogo from "@/assets/raffles-logo.jpeg";
import hyattLogo from "@/assets/hyatt-logo.png";
import fourSeasonsLogo from "@/assets/four-seasons-logo.png";
import redBullLogo from "@/assets/red-bull-logo.png";
import fairmontLogo from "@/assets/fairmont-logo.webp";
import beautifulDestinationsLogo from "@/assets/beautiful-destinations-logo.png";
import sayajiLogo from "@/assets/sayaji-logo.jpg";

const BrandsCarousel = () => {
  const brands = [
    { name: "Hyatt", logo: hyattLogo },
    { name: "Red Bull", logo: redBullLogo },
    { name: "Fairmont", logo: fairmontLogo },
    { name: "Beautiful Destinations", logo: beautifulDestinationsLogo },
    { name: "Raffles", logo: rafflesLogo },
    { name: "Four Seasons", logo: fourSeasonsLogo },
    { name: "Sayaji", logo: sayajiLogo },
  ];

  return (
    <div className="mt-16 md:mt-20 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
      <p className="text-center text-xs md:text-sm font-medium text-gray-700 mb-8 md:mb-10 tracking-widest uppercase font-poppins">
        BRANDS WE'VE WORKED WITH
      </p>
      
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-hide px-4">
        <div className="flex items-center gap-6 pb-2" style={{ width: 'max-content' }}>
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-10 w-auto object-contain max-w-[100px]  grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Flex Wrap */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
        {brands.map((brand, index) => (
          <div key={index} className="transition-transform duration-300 hover:scale-110">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="h-10 md:h-12 w-auto object-contain max-w-[100px]  grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsCarousel;