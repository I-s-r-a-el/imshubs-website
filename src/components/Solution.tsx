import { Wallet, Star, Globe } from "lucide-react";

const Solution = () => {
  const pillars = [
    {
      icon: Wallet,
      title: "Non-Custodial Escrow",
      description: "Users always control their funds. No intermediaries."
    },
    {
      icon: Star,
      title: "Portable Reputation", 
      description: "Build your reputation across all IMSHUBS apps."
    },
    {
      icon: Globe,
      title: "Censorship-Resistant Listings",
      description: "Listings live on IPFS, beyond anyone's control."
    }
  ];

  return (
    <section id="solution" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">Introducing the <span className="gradient-text">IMSHUBS Protocol</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We build the foundational smart contracts. You build revolutionary marketplaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;