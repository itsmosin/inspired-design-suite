const TrustedBy = () => {
  const clients = [
    "Beautiful Destinations",
    "Nikah Fashion", 
    "Sayaji Hotels",
    "Palace",
    "Hyatt Regency",
    "Raffles",
    "Villa Palladio",
    "HSBC",
    "Red Bull"
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-medium text-muted-foreground mb-12 tracking-wider uppercase">
          Trusted by teams of every scale
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="text-foreground/40 hover:text-foreground transition-colors duration-300 text-sm md:text-base font-semibold tracking-wide"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards'
              }}
            >
              {client.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
