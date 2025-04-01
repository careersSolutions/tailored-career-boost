
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, testimonial, rating, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-14 h-14 rounded-full mr-4 object-cover" />
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-cs-gray text-sm">{position}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-cs-gold fill-cs-gold' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-cs-gray italic flex-grow">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
