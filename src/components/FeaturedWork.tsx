
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FeaturedWork = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Best Work</h2>
        
        <h3 className="text-3xl md:text-4xl font-bold mt-10 mb-12">
          Behold our greatest masterpiece ever created!
        </h3>
        
        <div className="relative rounded-lg overflow-hidden bg-black">
          <img 
            src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&w=1600&q=80" 
            alt="Featured project - Pandora MV" 
            className="w-full h-[60vh] object-cover opacity-90"
          />
          
          {/* Purple Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
              <span className="text-sm text-primary mb-2 block">NAME: [MF01] - PANDORA MV</span>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <span className="text-xs text-foreground/60">3D EXPERIMENT</span>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/portfolio/pandora">Details & artwork</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
