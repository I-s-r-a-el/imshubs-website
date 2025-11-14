import { Button } from "@/components/ui/button";
import { Code, Book, Boxes, Github } from "lucide-react";

const ForBuilders = () => {
  const features = [
    {
      icon: Code,
      text: 'import "@imshubs/escrow.sol";'
    },
    {
      icon: Book,
      text: "Full developer documentation"
    },
    {
      icon: Boxes,
      text: "JavaScript SDK"
    },
    {
      icon: Github,
      text: "Open-source reference client"
    }
  ];

  return (
    <section id="builders" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="h2 mb-6">Ready to <span className="gradient-text">Build?</span></h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use our open-source, audited smart contracts to launch your marketplace in weeks, not years.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-mono text-sm md:text-base">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-foreground hover:bg-primary/10 hover:border-accent text-lg px-8 py-6 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBuilders;