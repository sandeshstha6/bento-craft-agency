
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Star, Zap, Shield } from "lucide-react";
import { CompanyServices } from "@/components/CompanyServices";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { TeamTestimonials } from "@/components/TeamTestimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-6 w-fit">
              <Star className="h-4 w-4 mr-2" /> 
              <span className="text-sm font-medium">Award-winning design agency</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              Crafting <span className="gradient-text">digital experiences</span> that inspire and engage
            </h1>
            
            <p className="text-foreground/70 text-xl max-w-2xl mb-10">
              We blend creativity with technology to transform your ideas into 
              remarkable digital experiences that captivate audiences and drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg font-medium px-8">
                <Link to="/contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg font-medium px-8">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-foreground/60">Trusted by:</span>
              <div className="flex space-x-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="Meta" className="h-6 opacity-50" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 opacity-50" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" className="h-6 opacity-50" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Purple Glow Effect */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10"></div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "10+", label: "Years Experience", icon: <Shield className="h-6 w-6 text-primary" /> },
              { value: "200+", label: "Projects Completed", icon: <Zap className="h-6 w-6 text-primary" /> },
              { value: "50+", label: "Happy Clients", icon: <Star className="h-6 w-6 text-primary" /> }
            ].map((stat, index) => (
              <div key={index} className="flex items-center p-6 bg-muted rounded-lg">
                <div className="mr-4 p-3 bg-primary/10 rounded-full">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-foreground/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading">Our Vision</h2>
              <p className="text-3xl md:text-4xl font-bold leading-tight max-w-xl mb-8">
                We create digital experiences that delight users and drive business growth
              </p>
              
              <p className="text-foreground/70 mb-6">
                Our collaborative approach combines strategic thinking, creative innovation, 
                and technical expertise to deliver solutions that stand out and make an impact.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "User-centered design that puts people first",
                  "Strategic approach aligned with business goals",
                  "Technical excellence and attention to detail"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/about" className="text-primary hover:underline inline-flex items-center group">
                Learn More About Us 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Creative team working together" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <CompanyServices />
      
      {/* Featured Work Section */}
      <FeaturedWork />
      
      {/* Project Showcase */}
      <ProjectShowcase />
      
      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-16">Why Choose Prospire</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "Industry Expertise",
                description: "Our team brings years of experience across various industries, ensuring solutions tailored to your specific needs."
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Cutting-edge Technology",
                description: "We stay at the forefront of technological advances to deliver innovative solutions that keep you ahead of the competition."
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Dedicated Support",
                description: "Our commitment doesn't end at launch. We provide ongoing support to ensure your continued success."
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-muted rounded-lg transition-transform hover:scale-105">
                <div className="p-4 bg-primary/10 rounded-lg inline-block mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TeamTestimonials />
      
      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 max-w-3xl mx-auto">
            Ready to transform your <span className="gradient-text">digital presence?</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Let's collaborate and create something extraordinary together. Your vision, our expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
