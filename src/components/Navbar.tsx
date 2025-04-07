
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter">
            PRO<span className="text-primary">SPIRE</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.path} 
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors",
                  isActive(item.path) 
                    ? "text-primary font-medium" 
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <Button className="ml-4 bg-primary hover:bg-primary/90">
              <Link to="/contact">Hire Us</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full border-b border-white/5">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.path} 
                className={cn(
                  "uppercase tracking-widest transition-colors",
                  isActive(item.path) 
                    ? "text-primary font-medium" 
                    : "text-foreground/80 hover:text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <Button className="bg-primary hover:bg-primary/90 w-full mt-4">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Hire Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
