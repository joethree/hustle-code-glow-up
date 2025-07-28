import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Entrepreneur",
      content: "The self-mastery guide completely changed my approach to goal setting. I've achieved more in 3 months than I did all last year!",
      rating: 5,
      verified: true
    },
    {
      name: "Marcus Johnson", 
      role: "Software Developer",
      content: "These ebooks are pure gold. The practical strategies actually work - my confidence has skyrocketed!",
      rating: 5,
      verified: true
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Manager", 
      content: "Finally found resources that don't just motivate but provide real, actionable steps. Highly recommend!",
      rating: 5,
      verified: true
    }
  ];

  const stats = [
    { label: "Active Readers", value: "2.5K+", icon: "👥" },
    { label: "Success Stories", value: "500+", icon: "🎯" },
    { label: "Average Rating", value: "4.9/5", icon: "⭐" },
    { label: "Countries Reached", value: "50+", icon: "🌍" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Readers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of people who have transformed their lives with our proven strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  {testimonial.verified && (
                    <Badge variant="secondary" className="text-xs">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;