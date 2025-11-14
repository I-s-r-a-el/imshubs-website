const Team = () => {
  return (
    <section id="team" className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">Founded by Those Who <span className="gradient-text">Need It Most</span></h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                  <img 
                    src="/lovable-uploads/c0caf66f-6760-4cd8-b1b1-369bd8fc51bf.png" 
                    alt="Israel Segun Akanji" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Israel Segun Akanji</h3>
                <p className="text-primary font-semibold mb-4">Founder</p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Building IMSHUBS to solve the economic challenges I've witnessed firsthand in Nigeria's trade landscape. 
                  With deep experience in both traditional commerce and blockchain technology, I'm committed to creating 
                  infrastructure that empowers African entrepreneurs and traders worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;