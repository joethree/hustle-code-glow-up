import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EbookCardProps {
  title: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  isPopular?: boolean;
  shopifyUrl: string;
}

const EbookCard = ({ title, originalPrice, salePrice, image, isPopular, shopifyUrl }: EbookCardProps) => {
  const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  return (
    <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
      {isPopular && (
        <Badge className="absolute top-4 left-4 z-10 bg-gradient-cta text-accent-foreground border-0">
          🔥 BESTSELLER
        </Badge>
      )}
      
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          {discount > 0 && (
            <Badge variant="destructive" className="text-xs">
              -{discount}%
            </Badge>
          )}
          <span className="text-2xl font-bold text-primary">
            ${salePrice}
          </span>
          {originalPrice > salePrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        
        <Button 
          className="w-full bg-gradient-primary hover:bg-gradient-hero transition-all duration-300 transform hover:scale-105 shadow-glow"
          onClick={() => window.open(shopifyUrl, '_blank')}
        >
          Get Instant Access
        </Button>
      </CardContent>
    </Card>
  );
};

export default EbookCard;