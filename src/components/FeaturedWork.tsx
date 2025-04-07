
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FeaturedWork = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h2>
          <p className="text-lg text-foreground/70">
            Explore our most impactful projects that showcase our creativity and technical expertise.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden bg-black border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&w=1600&q=80" 
            alt="Featured project - Pandora MV" 
            className="w-full h-[70vh] object-cover opacity-90"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="bg-black/60 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <span className="text-primary mb-3 block font-medium">FEATURED PROJECT</span>
              <h3 className="text-3xl font-bold mb-4">PANDORA MV</h3>
              <p className="text-foreground/70 mb-6 max-w-2xl">
                An immersive 3D experiment showcasing cutting-edge visual effects and interactive elements
                for a revolutionary music video experience.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm text-foreground/60 bg-white/5 px-4 py-2 rounded-full">3D EXPERIMENT</span>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/portfolio/pandora">View Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
