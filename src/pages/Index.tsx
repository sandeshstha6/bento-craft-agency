
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { ServicesBento } from "@/components/ServicesBento";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactCTA } from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <ServicesBento />
      </div>
      
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Work</h2>
          <PortfolioGrid />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <TestimonialSection />
      </div>
      
      <ContactCTA />
    </div>
  );
};

export default Index;
