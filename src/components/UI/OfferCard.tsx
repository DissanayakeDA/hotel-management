import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, TagIcon } from 'lucide-react';
import Button from './Button';
interface OfferCardProps {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
  code: string;
}
const OfferCard = ({
  id,
  title,
  description,
  discount,
  validUntil,
  image,
  code
}: OfferCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
      <div className="relative h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {discount}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-blue-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 mb-5">
          <div className="flex items-center text-gray-700">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">Valid until: {validUntil}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <TagIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">
              Code: <span className="font-medium">{code}</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <Link to={`/booking?offer=${id}`}>
            <Button variant="secondary">Claim Offer</Button>
          </Link>
          <Link to={`/special-offers/${id}`} className="text-blue-900 hover:text-blue-700 text-sm font-medium">
            View Details
          </Link>
        </div>
      </div>
    </div>;
};
export default OfferCard;