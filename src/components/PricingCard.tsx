
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  link: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  link 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${popular ? 'ring-2 ring-cs-gold' : ''} transition-transform hover:-translate-y-1 duration-300`}>
      {popular && (
        <div className="bg-cs-gold text-cs-navy text-center py-1 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">{price}</span>
        </div>
        <p className="text-cs-gray text-center mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
              <span className="text-sm text-cs-gray">{feature}</span>
            </li>
          ))}
        </ul>
        <Link to={link} className="block">
          <Button className={`w-full ${popular ? 'bg-cs-gold text-cs-navy hover:bg-cs-gold/90' : 'bg-cs-navy text-white hover:bg-cs-navy/90'}`}>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
