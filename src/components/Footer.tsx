
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <a href="#home" className="text-2xl font-semibold tracking-tight mb-4 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                AO Tech
              </span>
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Providing innovative IT solutions and consulting services to help businesses thrive in the digital era.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Software Development</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Data Analytics</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">IT Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">San Francisco, CA</li>
              <li><a href="mailto:contact@aotech.com" className="text-gray-600 hover:text-black transition-colors">contact@aotech.com</a></li>
              <li><a href="tel:+15551234567" className="text-gray-600 hover:text-black transition-colors">+1 (555) 123-4567</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} AO Tech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
