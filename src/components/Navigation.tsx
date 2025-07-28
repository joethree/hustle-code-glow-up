import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">H&C</span>
          </div>
          <span className="font-bold text-xl">Hustle & Code</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#featured-ebooks" className="text-foreground hover:text-primary transition-colors">
            Ebooks
          </a>
          <a 
            href="https://hustleandcode.myshopify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Store
          </a>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open('https://hustleandcode.myshopify.com/collections/all', '_blank')}
          >
            Shop Now
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open('https://hustleandcode.myshopify.com', '_blank')}
          >
            Shop
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;