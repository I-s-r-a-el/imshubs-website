import { Wallet, Package, DollarSign, Truck, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Wallet,
      title: "Connect Wallet",
      description: "Secure, decentralized identity"
    },
    {
      number: 2,
      icon: Package,
      title: "List Item",
      description: "Upload to IPFS permanently"
    },
    {
      number: 3,
      icon: DollarSign,
      title: "Buyer Pays to Escrow",
      description: "Funds locked safely in smart contract"
    },
    {
      number: 4,
      icon: Truck,
      title: "Seller Fulfills Order",
      description: "Ship or deliver the product"
    },
    {
      number: 5,
      icon: CheckCircle,
      title: "Funds Released & Reputation Updated",
      description: "Automatic settlement and reputation building"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">From Vision to <span className="gradient-text">Transaction</span></h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop horizontal layout */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Step content */}
                <div className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 border-2 border-primary/30">
                    <step.icon className="w-10 h-10 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground max-w-[140px]">{step.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-[140px]">{step.description}</p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 -right-16 flex items-center">
                    <div className="w-24 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50"></div>
                    <div className="w-2 h-2 bg-accent rounded-full transform translate-x-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile vertical layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-8 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-accent/50"></div>
                  )}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;