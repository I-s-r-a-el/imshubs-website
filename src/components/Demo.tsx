
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Briefcase, TrendingUp, User, MapPin, Clock, DollarSign } from "lucide-react";

const Demo = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const marketplaceItems = [
    {
      id: 1,
      name: "Handwoven Kente Cloth",
      price: 85,
      currency: "USD",
      seller: "Kwame Textiles",
      location: "Accra, Ghana",
      rating: 4.8,
      image: "🧵",
      category: "Fashion"
    },
    {
      id: 2,
      name: "Organic Shea Butter",
      price: 25,
      currency: "USD",
      seller: "Fatima's Naturals",
      location: "Lagos, Nigeria",
      rating: 4.9,
      image: "🧴",
      category: "Beauty"
    },
    {
      id: 3,
      name: "Wooden Sculpture",
      price: 120,
      currency: "USD",
      seller: "Amara Arts",
      location: "Nairobi, Kenya",
      rating: 4.7,
      image: "🗿",
      category: "Art"
    }
  ];

  const freelanceGigs = [
    {
      id: 1,
      title: "Mobile App Development",
      budget: "500-1500",
      currency: "USD",
      client: "TechStart Kenya",
      skills: ["React Native", "Firebase", "UI/UX"],
      duration: "2-4 weeks",
      proposals: 12,
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Social Media Marketing Campaign",
      budget: "200-500",
      currency: "USD",
      client: "Fashion Brand Nigeria",
      skills: ["Instagram", "Content Creation", "Analytics"],
      duration: "1-2 weeks",
      proposals: 8,
      posted: "1 day ago"
    },
    {
      id: 3,
      title: "Website Redesign",
      budget: "800-1200",
      currency: "USD",
      client: "Restaurant Chain Ghana",
      skills: ["WordPress", "Graphic Design", "SEO"],
      duration: "3-5 weeks",
      proposals: 15,
      posted: "4 hours ago"
    }
  ];

  const cryptoRates = [
    { symbol: "BTC", name: "Bitcoin", price: 42500, change: "+2.4%", toNaira: 52000000 },
    { symbol: "ETH", name: "Ethereum", price: 2800, change: "+1.8%", toNaira: 3430000 },
    { symbol: "USDT", name: "Tether", price: 1.00, change: "0.0%", toNaira: 1225 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <section id="demo" className="py-20 px-4 bg-raven-dark-blue/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">
            Experience <span className="gradient-text">IMSHUBS</span> Demo
          </h2>
          <p className="text-lg text-raven-light-gray max-w-2xl mx-auto">
            Get a preview of Africa's future digital economy platform. Explore the marketplace, browse freelance opportunities, and check crypto rates.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="marketplace" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-raven-dark-blue border border-imshubs-primary/30">
              <TabsTrigger value="marketplace" className="data-[state=active]:bg-imshubs-primary/20">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Marketplace
              </TabsTrigger>
              <TabsTrigger value="freelance" className="data-[state=active]:bg-imshubs-primary/20">
                <Briefcase className="mr-2 h-4 w-4" />
                Freelance Gigs
              </TabsTrigger>
              <TabsTrigger value="crypto" className="data-[state=active]:bg-imshubs-primary/20">
                <TrendingUp className="mr-2 h-4 w-4" />
                Crypto Exchange
              </TabsTrigger>
            </TabsList>

            <TabsContent value="marketplace" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Digital Marketplace</h3>
                <Badge variant="outline" className="bg-imshubs-primary/10 text-imshubs-primary border-imshubs-primary/30">
                  {cart.length} items in cart
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketplaceItems.map((item) => (
                  <Card key={item.id} className="bg-raven-dark-blue border-imshubs-primary/20 hover:border-imshubs-primary/40 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-4xl mb-2">{item.image}</div>
                        <Badge variant="secondary" className="bg-imshubs-coral/20 text-imshubs-coral">
                          {item.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {item.seller}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-imshubs-gold">
                          ${item.price}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-imshubs-gold text-imshubs-gold" />
                          <span className="text-sm">{item.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-4 text-sm text-raven-light-gray">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                      <Button 
                        onClick={() => addToCart(item)}
                        className="w-full bg-gradient-to-r from-imshubs-primary to-imshubs-secondary hover:opacity-90"
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="freelance" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Freelance Opportunities</h3>
                <Badge variant="outline" className="bg-imshubs-primary/10 text-imshubs-primary border-imshubs-primary/30">
                  {freelanceGigs.length} active gigs
                </Badge>
              </div>
              
              <div className="space-y-4">
                {freelanceGigs.map((gig) => (
                  <Card key={gig.id} className="bg-raven-dark-blue border-imshubs-primary/20 hover:border-imshubs-primary/40 transition-colors">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg mb-2">{gig.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mb-2">
                            <User className="h-4 w-4" />
                            {gig.client}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-imshubs-gold">
                            ${gig.budget}
                          </div>
                          <div className="text-sm text-raven-light-gray">{gig.currency}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {gig.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-imshubs-coral/20 text-imshubs-coral">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-raven-light-gray mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {gig.duration}
                        </div>
                        <div>{gig.proposals} proposals</div>
                        <div>Posted {gig.posted}</div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-imshubs-primary to-imshubs-secondary hover:opacity-90">
                        Submit Proposal
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="crypto" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Crypto to Fiat Exchange</h3>
                <Badge variant="outline" className="bg-imshubs-primary/10 text-imshubs-primary border-imshubs-primary/30">
                  Live Rates
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cryptoRates.map((crypto) => (
                  <Card key={crypto.symbol} className="bg-raven-dark-blue border-imshubs-primary/20">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg">{crypto.symbol}</CardTitle>
                          <CardDescription>{crypto.name}</CardDescription>
                        </div>
                        <Badge 
                          variant={crypto.change.includes('+') ? 'default' : 'destructive'}
                          className={crypto.change.includes('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}
                        >
                          {crypto.change}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="text-2xl font-bold text-imshubs-gold">
                            ${crypto.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-raven-light-gray">USD Price</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">
                            ₦{crypto.toNaira.toLocaleString()}
                          </div>
                          <div className="text-sm text-raven-light-gray">Nigerian Naira</div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-imshubs-gold to-imshubs-orange hover:opacity-90">
                          <DollarSign className="mr-2 h-4 w-4" />
                          Convert Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-raven-dark-blue border-imshubs-primary/20">
                <CardHeader>
                  <CardTitle>Quick Convert</CardTitle>
                  <CardDescription>Convert your crypto to local currency instantly</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">From</label>
                      <select className="w-full p-3 bg-raven-dark border border-imshubs-primary/30 rounded-lg text-white">
                        <option>Bitcoin (BTC)</option>
                        <option>Ethereum (ETH)</option>
                        <option>Tether (USDT)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">To</label>
                      <select className="w-full p-3 bg-raven-dark border border-imshubs-primary/30 rounded-lg text-white">
                        <option>Nigerian Naira (NGN)</option>
                        <option>Ghanaian Cedi (GHS)</option>
                        <option>Kenyan Shilling (KES)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Amount</label>
                      <input 
                        type="number" 
                        placeholder="0.001"
                        className="w-full p-3 bg-raven-dark border border-imshubs-primary/30 rounded-lg text-white"
                      />
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-imshubs-primary to-imshubs-secondary hover:opacity-90">
                    Get Exchange Rate
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-16">
          <div className="bg-raven-dark-blue p-8 rounded-lg border border-imshubs-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Ready to Experience the Full Platform?</h3>
            <p className="text-raven-light-gray mb-6">
              This demo shows just a glimpse of what IMSHUBS will offer. Join our waitlist to be among the first to access the complete platform when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-imshubs-primary to-imshubs-secondary hover:opacity-90"
                onClick={() => window.open("https://waitlist.imshubs.com", "_blank")}
              >
                Join Early Access
              </Button>
              <Button 
                variant="outline" 
                className="border-imshubs-gold text-imshubs-gold hover:bg-imshubs-gold/10"
                onClick={() => window.open("https://drive.google.com/uc?export=download&id=1paMYeXcin_7aAX0w__pKRY_yzrFRqyZC", "_blank")}
              >
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
