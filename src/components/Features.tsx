
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Digital Marketplace",
      description: "A platform for vendors to sell products and services across Africa, with secure payment options and dispute resolution.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H21M3 12H21M3 18H21" 
            stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="3" y1="6" x2="21" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#D6BCFA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Freelance Gig Platform",
      description: "Connect freelancers with clients seeking digital skills, with secure escrow payments and verification systems.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L12 20M12 20L15 17M12 20L9 17M9 4L7 6L9 8M15 4L17 6L15 8M5 10H19C20.1046 10 21 10.8954 21 12V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V12C3 10.8954 3.89543 10 5 10Z" 
            stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="3" y1="4" x2="21" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#D6BCFA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Crypto-to-Fiat Exchange",
      description: "Instantly convert cryptocurrency to local African currencies, with competitive rates and seamless user experience.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V18M12 6L7 11M12 6L17 11M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z" 
            stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="3" y1="4" x2="21" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#D6BCFA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Smart Wallet Solution",
      description: "Multi-payment options wallet with blockchain security, allowing for easy transactions and asset management.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M16.6438 16.1429C15.6229 14.8193 14.0399 14 12.2326 14C10.4252 14 8.84229 14.8193 7.8214 16.1429C7.59173 16.717 7.46531 17.3438 7.46531 18V20M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" 
            stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="2" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#D6BCFA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Blockchain Identity",
      description: "Secure, self-sovereign digital identity solution with verification and reputation systems for trusted transactions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
            stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#D6BCFA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "DAO Governance",
      description: "Community-driven decision making through decentralized autonomous organization principles and token voting.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" 
            stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#D6BCFA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">
            What Is <span className="gradient-text">IMSHUBS</span>?
          </h2>
          <p className="text-lg text-raven-light-gray max-w-2xl mx-auto">
            IMSHUBS is a Pan-African digital ecosystem for commerce, freelancing, and financial transactions — powered by blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-raven-dark-blue border-0 gradient-border hover:-translate-y-1 transition-transform duration-300"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-raven-light-gray text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="p-6 rounded-lg bg-raven-dark-blue/30 border border-imshubs-primary/20">
            <h3 className="text-xl font-bold mb-4">The Problem</h3>
            <p className="text-raven-light-gray mb-6">
              African users face several barriers despite growing digital interest: limited market access, payment restrictions, crypto frustration, and platform fragmentation. IMSHUBS is a unifying solution for trade, skills, and financial empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
