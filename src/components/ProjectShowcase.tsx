
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ProjectShowcase = () => {
  const projects = [
    {
      name: "DARK",
      category: "Website Design",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      name: "COSMICITY",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1601772576216-111ca1307bf9?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      name: "META",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Witness the beauty of our<br />other stunning masterpieces
          </h2>
          <Link to="/portfolio" className="text-primary hover:underline inline-flex items-center gap-2">
            See More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link 
              key={index} 
              to={`/portfolio/${project.name.toLowerCase()}`}
              className="group"
            >
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">View Project</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">{project.name}</h3>
                  <p className="text-foreground/60 text-sm">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
