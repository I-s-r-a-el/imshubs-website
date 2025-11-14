
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ForBuilders from "@/components/ForBuilders";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter']">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ForBuilders />
      <Team />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
