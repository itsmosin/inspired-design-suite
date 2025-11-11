const TrustedBy = () => {
  const clients = [
    "Four Seasons",
    "Raffles", 
    "Hyatt",
    "Red Bull",
    "Nykaa Fashion",
    "Hilton"
  ];

  return (
    <section className="py-16 md:py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xs md:text-sm font-medium text-muted-foreground mb-10 md:mb-12 tracking-widest uppercase">
          Trusted by teams of every scale
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="text-foreground/40 hover:text-foreground transition-colors duration-300 text-xs md:text-sm font-semibold tracking-wide"
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
