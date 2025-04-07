
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Star, Zap, Shield, Check, Users, Trophy, Sparkles } from "lucide-react";
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
              Crafting <span className="text-primary">digital experiences</span> that inspire and engage
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
              <Button variant="outline" size="lg" className="text-lg font-medium px-8 border-white/20 hover:bg-white/5">
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
      
      {/* What We Offer Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-foreground/70">
              Our comprehensive suite of services is designed to elevate your digital presence and drive real business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Digital Strategy",
                description: "We develop comprehensive strategies that align with your business goals and target audience needs."
              },
              {
                icon: <Sparkles className="h-10 w-10 text-primary" />,
                title: "UI/UX Design",
                description: "Our designers create intuitive, engaging interfaces that delight users and increase conversions."
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Development",
                description: "We build robust, scalable applications using cutting-edge technologies and best practices."
              }
            ].map((service, index) => (
              <div key={index} className="bg-muted p-8 rounded-xl border border-white/5 hover:border-primary/20 transition-all hover:translate-y-[-5px]">
                <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <Link to="/services" className="text-primary hover:text-primary/80 inline-flex items-center group">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "10+", label: "Years Experience", icon: <Shield className="h-6 w-6 text-primary" /> },
              { value: "200+", label: "Projects Completed", icon: <Zap className="h-6 w-6 text-primary" /> },
              { value: "50+", label: "Happy Clients", icon: <Star className="h-6 w-6 text-primary" /> }
            ].map((stat, index) => (
              <div key={index} className="flex items-center p-8 bg-muted rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                <div className="mr-6 p-4 bg-primary/10 rounded-xl">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-foreground/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-foreground/70">
              We follow a structured methodology that ensures exceptional results for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We immerse ourselves in your business to understand your goals, audience, and challenges."
              },
              {
                number: "02",
                title: "Strategy",
                description: "We develop a comprehensive plan that aligns with your objectives and leverages our expertise."
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
              <div key={index} className="bg-muted p-8 rounded-xl border border-white/5 hover:border-primary/20 transition-all relative">
                <div className="text-6xl font-extrabold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className="text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <FeaturedWork />
      
      {/* Project Showcase */}
      <ProjectShowcase />
      
      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-lg text-foreground/70">
              We're not just another agency. We're your strategic partner committed to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-10 w-10 text-primary" />,
                title: "Industry Expertise",
                description: "Our team brings years of experience across various industries, ensuring solutions tailored to your specific needs."
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Cutting-edge Technology",
                description: "We stay at the forefront of technological advances to deliver innovative solutions that keep you ahead of the competition."
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Dedicated Support",
                description: "Our commitment doesn't end at launch. We provide ongoing support to ensure your continued success."
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-muted rounded-xl border border-white/5 hover:border-primary/20 transition-all hover:translate-y-[-5px]">
                <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TeamTestimonials />
      
      {/* CTA Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 max-w-3xl mx-auto">
            Ready to transform your <span className="text-primary">digital presence?</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Let's collaborate and create something extraordinary together. Your vision, our expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white/20 hover:bg-white/5">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
