
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Eco-Friendly Brand Redesign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Tech Startup Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Food Delivery App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  }
];

export const PortfolioGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {portfolioItems.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-all group">
            <div className="relative overflow-hidden h-64">
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="outline" className="bg-white text-black hover:bg-white/90">
                  View Project
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-blue-600 mb-1">{item.category}</p>
              <h3 className="font-bold text-lg">{item.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" size="lg" asChild>
          <Link to="/portfolio">
            See More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
