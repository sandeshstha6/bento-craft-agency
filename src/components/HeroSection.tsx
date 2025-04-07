
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We craft <span className="text-blue-600">digital experiences</span> that stand out
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Bento Craft Agency helps businesses create memorable brands, 
              stunning websites, and effective digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Creative team working together" 
                className="rounded-xl shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
