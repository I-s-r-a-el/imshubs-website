
import { Button } from "@/components/ui/button";

const Community = () => {
  const teamMembers = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      role: "Founder & CEO",
      description: "Leading product vision and strategy, with background in fintech and blockchain."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 17.3a9.9 9.9 0 0 0 4-1.3"></path>
          <path d="M8 16a9.9 9.9 0 0 1-4-1.3"></path>
          <path d="M12 17.3V21"></path>
          <path d="M8 16l-4.8 2.4A1 1 0 0 0 3 19.4V21"></path>
          <path d="M16 16l4.8 2.4a1 1 0 0 1 .2 1V21"></path>
          <path d="M19 6.3V10"></path>
          <path d="M5 6.3V10"></path>
          <path d="M12 6a4 4 0 0 0-4 4c0 1.7.9 3.2 3 5 1.4-1.3 3-2.3 3-5a4 4 0 0 0-2-3"></path>
          <path d="M19 5a7 7 0 0 0-7-3"></path>
          <path d="M5 5a7 7 0 0 1 7-3"></path>
        </svg>
      ),
      role: "Development Team",
      description: "Frontend developers, Web3 specialists, and blockchain engineers building the platform."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path>
        </svg>
      ),
      role: "Operations Team",
      description: "Community managers, marketing specialists, and customer support across African markets."
    },
  ];

  return (
    <section id="community" className="py-20 px-4 bg-raven-dark-blue/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Meet Our <span className="gradient-text">Team</span></h2>
          <p className="text-lg text-raven-light-gray max-w-2xl mx-auto">
            A bold, agile team shaping the future of African commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-raven-dark-blue p-6 rounded-lg gradient-border flex flex-col items-center text-center">
              <div className="text-imshubs-primary mb-4">
                {member.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{member.role}</h3>
              <p className="text-raven-light-gray">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="bg-raven-dark-blue p-8 rounded-lg gradient-border">
            <h3 className="h3 mb-4">Join Our Waitlist</h3>
            <p className="text-raven-light-gray mb-6">
              Be among the first to experience IMSHUBS and help shape the future of digital commerce in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md bg-raven-dark text-white border border-imshubs-primary/50 focus:outline-none focus:border-imshubs-primary"
              />
              <Button 
                className="bg-gradient-to-r from-imshubs-primary to-imshubs-secondary hover:opacity-90 transition-opacity"
                onClick={() => window.open("https://waitlist.imshubs.com", "_blank")}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
