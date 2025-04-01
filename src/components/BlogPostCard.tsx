
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  date, 
  author, 
  category
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/blog/${id}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-cs-light text-cs-navy text-xs font-medium px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-cs-navy transition-colors">{title}</h3>
        </Link>
        <p className="text-cs-gray mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center text-xs text-cs-gray">
          <div className="flex items-center mr-4">
            <User className="h-3 w-3 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
