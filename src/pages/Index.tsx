
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CompanyServices } from "@/components/CompanyServices";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { TeamTestimonials } from "@/components/TeamTestimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-primary mb-2 tracking-wider">Prospire / Your Vision</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              Crafting your fantasies with a twist of <span className="gradient-text">creativity.</span>
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mb-10">
              With Prospire by your side, design evolves into the
              spectacular. Come find out why our design team strives to 
              bring your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Purple Glow Effect */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/30 rounded-full blur-[120px] -z-10"></div>
        
        {/* Compass Graphic */}
        <div className="hidden md:block absolute top-20 right-10 w-40 h-40 opacity-60">
          <img src="/lovable-uploads/a91ff1a8-4eda-4a06-bcc7-cb528b5181a4.png" alt="Compass" className="w-full h-full object-contain" />
        </div>
      </section>
      
      {/* Our Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Our Vision</h2>
          <p className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mb-20">
            Our designs bring your imagination to life, effortlessly and joyfully realizing your greatest ambitions.
          </p>
          
          <p className="text-foreground/60 max-w-2xl">
            Design should be a fun and collaborative process. We work 
            with clients to easily take ideas into reality and bring 
            them to life. We're able to craft a unique product that stands 
            out from your competitors and is recognizable without any context.
          </p>
          
          <div className="flex justify-end mt-6">
            <Link to="/about" className="text-primary hover:underline inline-flex items-center gap-2">
              See Details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <CompanyServices />
      
      {/* Featured Work Section */}
      <FeaturedWork />
      
      {/* Project Showcase */}
      <ProjectShowcase />
      
      {/* Testimonials */}
      <TeamTestimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 max-w-2xl mx-auto">
            Creative twists on your bold ideas
          </h2>
          <p className="text-foreground/60 mb-10 max-w-xl mx-auto">
            Don't wait any longer, let's unleash your imagination and create something revolutionary together!
          </p>
          <Button size="lg">
            <Link to="/contact">Hire Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
