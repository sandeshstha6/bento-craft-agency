
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-6 w-fit">
              <span className="text-sm font-medium">Premium Digital Experience Agency</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We craft <span className="text-primary">digital experiences</span> that transform businesses
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              Our team of elite designers and developers create stunning websites, memorable brands, 
              and effective digital strategies that drive measurable results for ambitious clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <span className="text-foreground/60 text-sm">Trusted by industry leaders:</span>
              <div className="flex space-x-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="Meta" className="h-5 opacity-50 hover:opacity-70 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5 opacity-50 hover:opacity-70 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" className="h-5 opacity-50 hover:opacity-70 transition-opacity" />
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/30 rounded-full blur-sm"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=800&q=80" 
              alt="Professional digital team at work" 
              className="rounded-2xl shadow-2xl border border-white/10 relative z-10 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
