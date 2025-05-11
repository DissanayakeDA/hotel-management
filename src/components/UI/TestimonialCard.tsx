import React from 'react';
import { StarIcon } from 'lucide-react';
interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  image: string;
  rating: number;
}
const TestimonialCard = ({
  name,
  location,
  quote,
  image,
  rating
}: TestimonialCardProps) => {
  const renderStars = () => {
    return Array.from({
      length: 5
    }, (_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />);
  };
  return <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="flex mb-4">{renderStars()}</div>
      <blockquote className="text-gray-700 italic mb-0">"{quote}"</blockquote>
    </div>;
};
export default TestimonialCard;