import { DollarSign, Shield, Lock } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "High Fees",
      description: "Platforms take 20-30% of your earnings."
    },
    {
      icon: Shield,
      title: "Censorship", 
      description: "Your account and funds can be frozen arbitrarily."
    },
    {
      icon: Lock,
      title: "Lock-In",
      description: "Your reputation is trapped, owned by platforms, not you."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6 gradient-text">Commerce is Broken.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-destructive/10 group-hover:bg-destructive/20 transition-all duration-300">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;