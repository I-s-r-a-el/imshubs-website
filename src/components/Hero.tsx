import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Logo section */}
          <div className="mb-8 animate-fade-in">
            <div className="relative group inline-block">
              <img 
                src="/lovable-uploads/c0caf66f-6760-4cd8-b1b1-369bd8fc51bf.png" 
                alt="IMSHUBS Logo" 
                className="h-16 md:h-20 w-16 md:w-20 mx-auto mb-6 drop-shadow-lg group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
          
          <h1 className="h1 mb-6 animate-fade-in">
            Build on the Protocol for <span className="gradient-text">Sovereign Commerce</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            IMSHUBS provides the decentralized infrastructure for uncensorable, non-custodial marketplaces. 
            No platform fees. No borders. No central control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent transition-all duration-500 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105"
              onClick={() => window.open("https://discord.gg/UQkSV7xhTT", "_blank")}
            >
              Join the Discord
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-foreground hover:bg-primary/10 hover:border-accent text-lg px-8 py-6 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500"
              onClick={() => {
                const litepaperUrl = "https://drive.google.com/file/d/1pyXR69KeAlew_pcmrCB5sBZnzpoNNTco/view?usp=sharing";
                window.open(litepaperUrl, "_blank");
              }}
            >
              Read the Litepaper
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#problem" className="text-primary opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform block">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;