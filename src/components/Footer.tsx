
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cs-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">CAREER SOLUTIONS</h3>
            <p className="mb-6 text-gray-300">
              Empowering professionals to advance their careers through expert CV writing and career services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cs-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-cs-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-cs-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-cs-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/cv-writing" className="text-gray-300 hover:text-cs-gold transition-colors">CV Writing</Link>
              </li>
              <li>
                <Link to="/services/cover-letter" className="text-gray-300 hover:text-cs-gold transition-colors">Cover Letter</Link>
              </li>
              <li>
                <Link to="/services/linkedin-optimization" className="text-gray-300 hover:text-cs-gold transition-colors">LinkedIn Optimization</Link>
              </li>
              <li>
                <Link to="/services/interview-coaching" className="text-gray-300 hover:text-cs-gold transition-colors">Interview Coaching</Link>
              </li>
              <li>
                <Link to="/cv-review" className="text-gray-300 hover:text-cs-gold transition-colors">Free CV Review</Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cs-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-cs-gold transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-cs-gold transition-colors">Career Resources</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-cs-gold transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-cs-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-cs-gold transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-cs-gold" />
                <span className="text-gray-300">123 Career Street, London, UK</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-cs-gold" />
                <span className="text-gray-300">+44 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-cs-gold" />
                <span className="text-gray-300">info@careersolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CAREER SOLUTIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
