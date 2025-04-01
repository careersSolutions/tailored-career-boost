
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-cs-navy font-serif font-bold text-2xl">CAREER SOLUTIONS</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-cs-gray hover:text-cs-navy font-medium transition-colors">Home</Link>
            
            {/* Services dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-cs-gray hover:text-cs-navy font-medium transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="/" className="block px-4 py-2 text-sm text-cs-gray hover:bg-cs-light hover:text-cs-navy" role="menuitem">CV Writing</Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-cs-gray hover:bg-cs-light hover:text-cs-navy" role="menuitem">Cover Letter</Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-cs-gray hover:bg-cs-light hover:text-cs-navy" role="menuitem">LinkedIn Optimization</Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-cs-gray hover:bg-cs-light hover:text-cs-navy" role="menuitem">Interview Coaching</Link>
                </div>
              </div>
            </div>
            
            <Link to="/cv-review" className="text-cs-gray hover:text-cs-navy font-medium transition-colors">Free CV Review</Link>
            <Link to="/pricing" className="text-cs-gray hover:text-cs-navy font-medium transition-colors">Pricing</Link>
            <Link to="/" className="text-cs-gray hover:text-cs-navy font-medium transition-colors">About Us</Link>
            <Link to="/" className="text-cs-gray hover:text-cs-navy font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-cs-gray hover:text-cs-navy font-medium transition-colors">Contact</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/">
              <Button variant="outline" className="border-cs-navy text-cs-navy hover:bg-cs-navy hover:text-white">Login</Button>
            </Link>
            <Link to="/cv-review">
              <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90">Free CV Review</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-cs-navy" />
            ) : (
              <Menu className="h-6 w-6 text-cs-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-cs-gray hover:text-cs-navy font-medium transition-colors" onClick={toggleMenu}>Home</Link>
            
            {/* Services dropdown mobile */}
            <div>
              <button 
                className="flex items-center text-cs-gray hover:text-cs-navy font-medium transition-colors w-full text-left"
                onClick={toggleServices}
              >
                Services <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-4 pt-2 flex flex-col space-y-2">
                  <Link to="/" className="text-sm text-cs-gray hover:text-cs-navy" onClick={toggleMenu}>CV Writing</Link>
                  <Link to="/" className="text-sm text-cs-gray hover:text-cs-navy" onClick={toggleMenu}>Cover Letter</Link>
                  <Link to="/" className="text-sm text-cs-gray hover:text-cs-navy" onClick={toggleMenu}>LinkedIn Optimization</Link>
                  <Link to="/" className="text-sm text-cs-gray hover:text-cs-navy" onClick={toggleMenu}>Interview Coaching</Link>
                </div>
              )}
            </div>
            
            <Link to="/cv-review" className="text-cs-gray hover:text-cs-navy font-medium transition-colors" onClick={toggleMenu}>Free CV Review</Link>
            <Link to="/pricing" className="text-cs-gray hover:text-cs-navy font-medium transition-colors" onClick={toggleMenu}>Pricing</Link>
            <Link to="/" className="text-cs-gray hover:text-cs-navy font-medium transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/" className="text-cs-gray hover:text-cs-navy font-medium transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="text-cs-gray hover:text-cs-navy font-medium transition-colors" onClick={toggleMenu}>Contact</Link>
            
            <div className="pt-2 flex flex-col space-y-3">
              <Link to="/" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-cs-navy text-cs-navy hover:bg-cs-navy hover:text-white">Login</Button>
              </Link>
              <Link to="/cv-review" onClick={toggleMenu}>
                <Button className="w-full bg-cs-gold text-cs-navy hover:bg-cs-gold/90">Free CV Review</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
