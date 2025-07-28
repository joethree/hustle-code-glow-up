import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ebooks.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('featured-ebooks')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Success and Personal Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Limited Time Offers</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Mindset
            </span>
            <br />
            Unlock Your{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Potential
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Discover powerful ebooks designed to elevate your personal development journey. 
            From self-mastery to building unshakeable confidence - start your transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-primary hover:bg-gradient-hero transition-all duration-300 transform hover:scale-105 shadow-glow"
              onClick={scrollToProducts}
            >
              Browse Ebooks 📚
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
          
          <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9⭐</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Digital Delivery</div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block">
          {/* This space is for the background image to show through */}
        </div>
      </div>
    </section>
  );
};

export default Hero;