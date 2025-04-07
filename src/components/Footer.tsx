
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4">Bento<span className="text-blue-400">Craft</span></h3>
            <p className="text-gray-400 mb-4">
              We craft digital experiences that help businesses grow and connect with their audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/branding" className="text-gray-400 hover:text-white transition">Branding</Link></li>
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-white transition">Web Development</Link></li>
              <li><Link to="/services/ui-ux-design" className="text-gray-400 hover:text-white transition">UI/UX Design</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-400 hover:text-white transition">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                info@bentocraft.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                +1 (123) 456-7890
              </li>
              <li className="text-gray-400">
                123 Creative St.<br />
                San Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bento Craft Agency. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
