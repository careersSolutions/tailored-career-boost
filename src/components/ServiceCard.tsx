
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-cs-light rounded-full flex items-center justify-center text-cs-navy">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-cs-gray text-center mb-6">{description}</p>
      <div className="flex justify-center">
        <Link to={link}>
          <Button className="group bg-cs-navy text-white hover:bg-cs-navy/90">
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
