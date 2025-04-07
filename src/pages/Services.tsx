
import { CompanyServices } from "@/components/CompanyServices";
import { ServicesBento } from "@/components/ServicesBento";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-primary mb-2 tracking-wider">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Exceptional <span className="text-primary">digital</span> services<br/>for extraordinary results
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mb-10">
            We combine strategic thinking, creative innovation, and technical expertise
            to deliver solutions that exceed expectations and drive business growth.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-16">What We Offer</h2>
          <ServicesBento />
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-16">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and target audience to understand your unique challenges."
              },
              {
                number: "02",
                title: "Strategy",
                description: "We develop a tailored plan that aligns with your objectives and leverages our expertise."
              },
              {
                number: "03",
                title: "Creation",
                description: "Our team brings your vision to life through meticulous design and development."
              },
              {
                number: "04",
                title: "Optimization",
                description: "We continuously refine and improve to ensure exceptional performance and results."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-extrabold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/60">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-0 w-full h-[2px] bg-primary/20">
                    <ArrowRight className="absolute -right-3 -top-2 text-primary/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services List */}
      <CompanyServices />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
            Ready to transform your digital presence?
          </h2>
          <p className="text-foreground/60 mb-10 max-w-xl mx-auto">
            Let's collaborate and create something extraordinary together.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Let's Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
