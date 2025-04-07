
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUp 
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter">
            PRO<span className="text-primary">SPIRE</span>
          </h2>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Home</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-foreground/60 hover:text-primary text-sm">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-foreground/60 hover:text-primary text-sm">Portfolio</Link></li>
              <li><Link to="/about" className="text-foreground/60 hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-foreground/60 hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/web-mobile" className="text-foreground/60 hover:text-primary text-sm">Web & Mobile Design</Link></li>
              <li><Link to="/services/3d-design" className="text-foreground/60 hover:text-primary text-sm">3D Design</Link></li>
              <li><Link to="/services/product-design" className="text-foreground/60 hover:text-primary text-sm">Product Design</Link></li>
              <li><Link to="/services/branding" className="text-foreground/60 hover:text-primary text-sm">Branding</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Social</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-foreground/60 text-sm">
                <Mail size={14} className="mr-2" />
                info@prospire.com
              </li>
              <li className="flex items-center text-foreground/60 text-sm">
                <Phone size={14} className="mr-2" />
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/40 text-sm">
              © {currentYear} Prospire. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-foreground/40 hover:text-primary text-sm transition">Privacy Policy</Link>
              <Link to="/terms" className="text-foreground/40 hover:text-primary text-sm transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
