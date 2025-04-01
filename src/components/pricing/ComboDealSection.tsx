
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComboDealSection = () => {
  return (
    <section className="py-16 bg-cs-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Value Packages</h2>
          <p className="text-lg text-cs-gray max-w-3xl mx-auto">
            Save with our combined service packages designed to provide comprehensive career support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-cs-gold">
            <div className="bg-cs-gold text-cs-navy text-center py-2 font-medium">
              Most Popular Combination
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-center mb-2">Career Starter</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold">£299</span>
                <span className="text-cs-gray ml-2 line-through">£427</span>
                <span className="text-cs-gold font-medium ml-2">Save 30%</span>
              </div>
              <p className="text-cs-gray text-center mb-6">
                Complete package for professionals starting their job search.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">Professional CV (Professional package)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">Cover Letter Writing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">LinkedIn Optimization (Basic package)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">Job Application Strategy Session (30 min)</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-cs-gold text-cs-navy hover:bg-cs-gold/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-center mb-2">Career Accelerator</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold">£499</span>
                <span className="text-cs-gray ml-2 line-through">£747</span>
                <span className="text-cs-gold font-medium ml-2">Save 33%</span>
              </div>
              <p className="text-cs-gray text-center mb-6">
                Premium package for professionals aiming for career advancement.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">Executive CV</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">Cover Letter & Thank You Letter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">LinkedIn Optimization (Professional package)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">Single Interview Coaching Session</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-cs-gray">Priority Support & Delivery</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-cs-navy text-white hover:bg-cs-navy/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboDealSection;
