
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedWork } from "@/components/FeaturedWork";

const Portfolio = () => {
  const portfolioProjects = [
    {
      title: "PANDORA MV",
      category: "3D EXPERIMENT",
      description: "A captivating 3D music video experience that pushes creative boundaries.",
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&w=1600&q=80",
      url: "/portfolio/pandora"
    },
    {
      title: "DARK",
      category: "Website Design",
      description: "A sleek, modern website design for a luxury brand with immersive user experience.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1600&q=80",
      url: "/portfolio/dark"
    },
    {
      title: "COSMICITY",
      category: "Mobile Design",
      description: "An innovative mobile app interface for a space exploration platform.",
      image: "https://images.unsplash.com/photo-1601772576216-111ca1307bf9?auto=format&fit=crop&w=1600&q=80",
      url: "/portfolio/cosmicity"
    },
    {
      title: "META",
      category: "Product Design",
      description: "A comprehensive product design system for a tech startup's flagship offering.",
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=1600&q=80",
      url: "/portfolio/meta"
    },
    {
      title: "LUMINARY",
      category: "Branding",
      description: "Complete brand identity creation for an emerging lighting design company.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=80",
      url: "/portfolio/luminary"
    },
    {
      title: "ORBITAL",
      category: "Motion Design",
      description: "Dynamic motion graphics package for a scientific documentary series.",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1600&q=80",
      url: "/portfolio/orbital"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-primary mb-2 tracking-wider">Our Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Showcasing our <span className="text-primary">creative</span><br/>masterpieces
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mb-10">
            Explore our collection of work across various disciplines, 
            each project representing our commitment to excellence and innovation.
          </p>
        </div>
      </section>
      
      {/* Featured Project */}
      <FeaturedWork />
      
      {/* Portfolio Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-16">All Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Link 
                key={index} 
                to={project.url}
                className="group block"
              >
                <div className="bg-muted rounded-lg overflow-hidden h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">View Project</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary mb-2 block">{project.category}</span>
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-foreground/60 text-sm mb-4">{project.description}</p>
                    <span className="text-primary group-hover:underline inline-flex items-center">
                      View details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
            Ready to create your own success story?
          </h2>
          <p className="text-foreground/60 mb-10 max-w-xl mx-auto">
            Let's collaborate on your next project and bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
