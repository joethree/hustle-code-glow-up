import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Card className="border-0 shadow-hover bg-gradient-to-br from-card to-primary/5 overflow-hidden">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">⚡ Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to{' '}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Life?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait for the perfect moment. Your journey to personal mastery and success starts now. 
              Get instant access to our complete collection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-primary hover:bg-gradient-hero transition-all duration-300 transform hover:scale-105 shadow-glow"
                onClick={() => window.open('https://hustleandcode.myshopify.com/collections/all', '_blank')}
              >
                Shop All Ebooks 🚀
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://hustleandcode.myshopify.com', '_blank')}
              >
                Visit Store
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Instant Download
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Money-Back Guarantee
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Lifetime Access
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;