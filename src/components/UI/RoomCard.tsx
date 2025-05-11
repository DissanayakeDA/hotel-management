import React from 'react';
import { Link } from 'react-router-dom';
import { Users2Icon, BedIcon, ExpandIcon, WifiIcon } from 'lucide-react';
import Button from './Button';
interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  image: string;
  amenities: string[];
}
const RoomCard = ({
  id,
  name,
  description,
  price,
  capacity,
  size,
  image,
  amenities
}: RoomCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
          ${price}/night
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-blue-900 mb-2">
          {name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-gray-700">
            <Users2Icon className="h-4 w-4 mr-1" />
            <span className="text-sm">{capacity} Guests</span>
          </div>
          <div className="flex items-center text-gray-700">
            <BedIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">King Bed</span>
          </div>
          <div className="flex items-center text-gray-700">
            <ExpandIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">{size} m²</span>
          </div>
          <div className="flex items-center text-gray-700">
            <WifiIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">Free WiFi</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/booking?room=${id}`}>
            <Button variant="primary">Book Now</Button>
          </Link>
          <Link to={`/rooms/${id}`} className="text-blue-900 hover:text-blue-700 text-sm font-medium">
            View Details
          </Link>
        </div>
      </div>
    </div>;
};
export default RoomCard;