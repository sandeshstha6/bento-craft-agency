
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-2xl">
            Bento<span className="text-blue-600">Craft</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition">Team</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
          </nav>
          
          <div className="hidden md:block">
            <Button as={Link} to="/contact">Get in Touch</Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition">Team</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
            <Button as={Link} to="/contact" className="w-full">Get in Touch</Button>
          </div>
        </div>
      )}
    </header>
  );
};
