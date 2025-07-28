import EbookCard from "./EbookCard";

const FeaturedEbooks = () => {
  const ebooks = [
    {
      title: "A Guide To Self Mastery",
      originalPrice: 20,
      salePrice: 15,
      image: "https://hustleandcode.myshopify.com/cdn/shop/files/photo_2025-07-2119.16.39.jpg?v=1753144885&width=533",
      isPopular: true,
      shopifyUrl: "https://hustleandcode.myshopify.com/products/a-guide-to-self-mastery"
    },
    {
      title: "Believe In Your Vision", 
      originalPrice: 25,
      salePrice: 20,
      image: "https://hustleandcode.myshopify.com/cdn/shop/files/BelieveInYourVision-Photoroom.jpg?v=1753226660&width=533",
      shopifyUrl: "https://hustleandcode.myshopify.com/products/believe-in-your-vision"
    },
    {
      title: "Boost Self Esteem",
      originalPrice: 25, 
      salePrice: 15,
      image: "https://hustleandcode.myshopify.com/cdn/shop/files/BoostSelfEsteem-Photoroom.jpg?v=1753223865&width=533",
      shopifyUrl: "https://hustleandcode.myshopify.com/products/boost-self-esteem"
    }
  ];

  return (
    <section id="featured-ebooks" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">📈 Bestselling Collection</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Ebooks
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hand-picked resources to accelerate your personal growth and professional success. 
            Each ebook is crafted with actionable strategies and proven frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ebooks.map((ebook, index) => (
            <EbookCard key={index} {...ebook} />
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => window.open('https://hustleandcode.myshopify.com/collections/all', '_blank')}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-semibold transition-colors"
          >
            View All Ebooks
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEbooks;