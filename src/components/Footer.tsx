
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Protocol",
      links: [
        { name: "Smart Contracts", href: "#solution" },
        { name: "SDK & APIs", href: "#for-builders" },
        { name: "Infrastructure", href: "#solution" },
        { 
          name: "Litepaper", 
          href: "https://drive.google.com/file/d/1pyXR69KeAlew_pcmrCB5sBZnzpoNNTco/view?usp=sharing",
          isExternal: true 
        },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#for-builders" },
        { name: "GitHub", href: "#for-builders" },
        { name: "FAQ", href: "#faq" },
        { name: "Roadmap", href: "#how-it-works" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "About", href: "#solution" },
        { name: "Team", href: "#team" },
        { name: "Discord", href: "#" },
        { name: "Governance", href: "#how-it-works" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-raven-dark-blue to-raven-dark pt-16 pb-8 px-4 border-t border-imshubs-primary/20 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-imshubs-primary/5 rounded-full blur-2xl opacity-70"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-imshubs-gold/8 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/c0caf66f-6760-4cd8-b1b1-369bd8fc51bf.png" 
                  alt="IMSHUBS Logo" 
                  className="h-10 w-10 transition-all duration-300 group-hover:scale-105 filter group-hover:brightness-110"
                />
              </div>
              <h1 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                IMSHUBS
              </h1>
            </div>
            <p className="text-raven-light-gray mb-6 max-w-md leading-relaxed text-sm md:text-base">
              IMSHUBS provides the decentralized infrastructure for uncensorable, non-custodial marketplaces. 
              No platform fees. No borders. No central control.
            </p>
            <div className="flex gap-4">
              {[0, 1, 2, 3].map((index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-raven-light-gray hover:text-imshubs-primary transition-colors duration-300 p-2 rounded-full hover:bg-imshubs-primary/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-4 text-imshubs-primary">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-raven-light-gray hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm md:text-base"
                      {...(link.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-imshubs-primary/20 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-raven-light-gray text-sm">
                &copy; {currentYear} IMSHUBS. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-imshubs-primary to-imshubs-secondary hover:from-imshubs-secondary hover:to-imshubs-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                onClick={() => window.open("https://discord.gg/UQkSV7xhTT", "_blank")}
              >
                Join Discord
              </Button>
              <Button 
                variant="outline" 
                className="border-imshubs-primary hover:bg-imshubs-primary/10 hover:border-imshubs-secondary transition-all duration-300 text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                onClick={() => window.open("https://drive.google.com/file/d/1pyXR69KeAlew_pcmrCB5sBZnzpoNNTco/view?usp=sharing", "_blank")}
              >
                Read Litepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
