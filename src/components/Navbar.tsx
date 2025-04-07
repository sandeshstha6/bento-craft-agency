
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter">
            PRO<span className="text-primary">SPIRE</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
            <Link to="/" className="text-foreground/80 hover:text-primary transition">Home</Link>
            <Link to="/services" className="text-foreground/80 hover:text-primary transition">Services</Link>
            <Link to="/portfolio" className="text-foreground/80 hover:text-primary transition">Portfolio</Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition">About Us</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition">Contact</Link>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <Link to="/" className="text-foreground/80 hover:text-primary transition uppercase tracking-wider">Home</Link>
            <Link to="/services" className="text-foreground/80 hover:text-primary transition uppercase tracking-wider">Services</Link>
            <Link to="/portfolio" className="text-foreground/80 hover:text-primary transition uppercase tracking-wider">Portfolio</Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition uppercase tracking-wider">About Us</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition uppercase tracking-wider">Contact</Link>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Hire Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
