
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "What is IMSHUBS?",
      answer: "IMSHUBS is a Pan-African digital ecosystem for commerce, freelancing, and financial transactions — powered by blockchain technology. Our platform allows vendors to sell products and services, freelancers to earn from their digital skills, and users to instantly convert crypto to local currency."
    },
    {
      question: "How does the marketplace work?",
      answer: "Our marketplace connects vendors and buyers across Africa, with secure payment options, escrow protection, and dispute resolution. Vendors can list products and services, while buyers can browse, purchase, and leave reviews, all within a secure blockchain environment."
    },
    {
      question: "How do I start freelancing on IMSHUBS?",
      answer: "To start freelancing, create an account, verify your identity, complete your profile with skills and experience, and start bidding on projects or listing your services. You'll receive payments through our secure escrow system, with options to convert to local currency or cryptocurrency."
    },
    {
      question: "What cryptocurrencies are supported?",
      answer: "IMSHUBS supports major cryptocurrencies including Bitcoin, Ethereum, and selected stablecoins. We're continuously expanding our supported currencies based on market demand and regulatory compliance across African markets."
    },
    {
      question: "How does the token economy work?",
      answer: "The IMSHUBS token economy rewards platform participation, provides governance rights, and enables discounted fees. Token holders can participate in platform decisions, stake for rewards, and access premium features, creating a sustainable ecosystem for all participants."
    },
    {
      question: "What countries do you currently operate in?",
      answer: "IMSHUBS has not yet launched operations in any country. Our roadmap includes an initial launch phase targeting key African markets with plans to expand progressively across the continent, prioritizing regions with high digital adoption and regulatory clarity."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-imshubs-coral/8 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-imshubs-primary/6 rounded-full blur-lg opacity-50"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-raven-light-gray">
            Find answers to common questions about IMSHUBS and how it works.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-b border-imshubs-primary/30"
            >
              <AccordionTrigger className="text-base md:text-lg font-medium py-5 hover:text-imshubs-primary transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-raven-light-gray text-sm md:text-base pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
