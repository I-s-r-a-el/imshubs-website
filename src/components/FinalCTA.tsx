import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWebhookInput, setShowWebhookInput] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Triggering Zapier webhook for email:", email);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
          source: "IMSHUBS Newsletter Signup"
        }),
      });

      toast({
        title: "Success!",
        description: "You've been subscribed for updates. Welcome to the community!",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 mb-6 animate-fade-in">
            The Future of Commerce is <span className="gradient-text">Sovereign</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in">
            Join our community of builders and pioneers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent transition-all duration-500 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105"
              onClick={() => window.open("https://discord.gg/UQkSV7xhTT", "_blank")}
            >
              Join the Discord
            </Button>
          </div>
          
          <div className="max-w-md mx-auto animate-fade-in">
            <p className="text-sm text-muted-foreground mb-4">Subscribe for updates</p>
            
            {!showWebhookInput ? (
              <div className="text-center mb-4">
                <Button 
                  variant="link" 
                  onClick={() => setShowWebhookInput(true)}
                  className="text-primary hover:text-primary/80"
                >
                  Setup Newsletter Subscription
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    Zapier Webhook URL (Create a Zap with webhook trigger first)
                  </label>
                  <Input
                    type="url"
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="bg-background/50 border-border focus:border-primary text-xs"
                  />
                </div>
                
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-border focus:border-primary"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? "..." : "Subscribe"}
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground">
                  Need help? <a href="https://zapier.com/apps/webhook/integrations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Learn how to create a Zapier webhook</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;