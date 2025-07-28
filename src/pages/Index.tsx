import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedEbooks from "@/components/FeaturedEbooks";
import SocialProof from "@/components/SocialProof";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedEbooks />
      <SocialProof />
      <CallToAction />
    </div>
  );
};

export default Index;
