
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CompanyServices = () => {
  const services = [
    {
      title: "Mobile & Website Design",
      link: "/services/web-mobile",
      active: true
    },
    {
      title: "2&3 Dimension Design",
      link: "/services/3d-design",
      active: true
    },
    {
      title: "Product Design",
      link: "/services/product-design",
      active: true
    },
    {
      title: "Motion Graphic",
      link: "/services/motion-graphics",
      active: false
    },
    {
      title: "Branding",
      link: "/services/branding",
      active: false
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Services</h2>
        
        <div className="mt-12 space-y-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`border-b border-border py-6 flex flex-wrap items-center justify-between group ${!service.active ? 'opacity-40' : ''}`}
            >
              <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              {service.active ? (
                <Link 
                  to={service.link} 
                  className="mt-2 md:mt-0 text-sm text-foreground/60 group-hover:text-primary transition-colors duration-300"
                >
                  View case →
                </Link>
              ) : (
                <span className="mt-2 md:mt-0 text-sm text-foreground/60">
                  Coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
