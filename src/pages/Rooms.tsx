import React, { useState, Children } from 'react';
import { SlidersIcon, BedIcon, Users2Icon, WifiIcon, UtensilsIcon, TvIcon, ExpandIcon } from 'lucide-react';
import RoomCard from '../components/UI/RoomCard';
const Rooms = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const roomTypes = [{
    id: 'all',
    name: 'All Rooms'
  }, {
    id: 'standard',
    name: 'Standard Rooms'
  }, {
    id: 'deluxe',
    name: 'Deluxe Rooms'
  }, {
    id: 'suite',
    name: 'Suites'
  }, {
    id: 'family',
    name: 'Family Rooms'
  }];
  const rooms = [{
    id: 'standard-king',
    name: 'Standard King Room',
    description: 'Comfortable room with a king-size bed, perfect for solo travelers or couples seeking a cozy retreat.',
    price: 199,
    capacity: 2,
    size: 28,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    amenities: ['King Bed', 'Free WiFi', 'TV', 'Mini Fridge', 'Work Desk'],
    type: 'standard'
  }, {
    id: 'standard-twin',
    name: 'Standard Twin Room',
    description: 'Practical room with two comfortable twin beds, ideal for friends or colleagues traveling together.',
    price: 219,
    capacity: 2,
    size: 30,
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    amenities: ['Twin Beds', 'Free WiFi', 'TV', 'Mini Fridge', 'Work Desk'],
    type: 'standard'
  }, {
    id: 'deluxe-king',
    name: 'Deluxe King Room',
    description: 'Spacious room with a plush king-size bed and elegant furnishings for a comfortable and luxurious stay.',
    price: 299,
    capacity: 2,
    size: 35,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    amenities: ['King Bed', 'Free WiFi', 'Smart TV', 'Mini Bar', 'Work Desk', 'Bathrobe'],
    type: 'deluxe'
  }, {
    id: 'deluxe-ocean',
    name: 'Deluxe Ocean View',
    description: 'Enjoy stunning ocean views from this elegantly appointed room featuring a king-size bed and premium amenities.',
    price: 349,
    capacity: 2,
    size: 38,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    amenities: ['King Bed', 'Ocean View', 'Free WiFi', 'Smart TV', 'Mini Bar', 'Bathrobe'],
    type: 'deluxe'
  }, {
    id: 'junior-suite',
    name: 'Junior Suite',
    description: 'Spacious suite with a separate living area, king-size bed, and premium amenities for a truly comfortable stay.',
    price: 499,
    capacity: 2,
    size: 45,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    amenities: ['King Bed', 'Separate Living Area', 'Free WiFi', 'Smart TV', 'Mini Bar', 'Bathrobe', 'Coffee Machine'],
    type: 'suite'
  }, {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Luxurious suite with a separate bedroom, spacious living area, and premium amenities for an indulgent experience.',
    price: 599,
    capacity: 2,
    size: 55,
    image: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    amenities: ['King Bed', 'Separate Living Area', 'Free WiFi', 'Smart TV', 'Mini Bar', 'Bathrobe', 'Coffee Machine', 'Dining Area'],
    type: 'suite'
  }, {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'Our most luxurious accommodation featuring a master bedroom, elegant living and dining areas, and exclusive amenities.',
    price: 999,
    capacity: 4,
    size: 85,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    amenities: ['King Bed', 'Multiple Rooms', 'Free WiFi', 'Smart TV', 'Full Bar', 'Bathrobe', 'Coffee Machine', 'Dining Area', 'Butler Service'],
    type: 'suite'
  }, {
    id: 'family-room',
    name: 'Family Room',
    description: 'Comfortable room designed for families, featuring a king-size bed and two twin beds to accommodate parents and children.',
    price: 399,
    capacity: 4,
    size: 48,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    amenities: ['King Bed', 'Twin Beds', 'Free WiFi', 'Smart TV', 'Mini Bar', 'Bathrobe', "Children's Amenities"],
    type: 'family'
  }];
  const filteredRooms = activeFilter === 'all' ? rooms : rooms.filter(room => room.type === activeFilter);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Luxury hotel room" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">
            Our Rooms & Suites
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our range of elegantly appointed accommodations designed
            for your comfort and relaxation.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Options */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center">
              <SlidersIcon className="h-5 w-5 text-blue-900 mr-2" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {roomTypes.map(type => <button key={type.id} onClick={() => setActiveFilter(type.id)} className={`px-4 py-2 rounded-full transition-colors ${activeFilter === type.id ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {type.name}
                </button>)}
            </div>
          </div>
          {/* Room Features Overview */}
          <div className="bg-blue-50 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-serif font-bold text-blue-900 mb-4">
              Room Features & Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                  <BedIcon className="h-6 w-6 text-blue-900" />
                </div>
                <span className="text-sm text-gray-700">Premium Bedding</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                  <WifiIcon className="h-6 w-6 text-blue-900" />
                </div>
                <span className="text-sm text-gray-700">Free WiFi</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                  <TvIcon className="h-6 w-6 text-blue-900" />
                </div>
                <span className="text-sm text-gray-700">Smart TV</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                  <UtensilsIcon className="h-6 w-6 text-blue-900" />
                </div>
                <span className="text-sm text-gray-700">Room Service</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                  <Users2Icon className="h-6 w-6 text-blue-900" />
                </div>
                <span className="text-sm text-gray-700">
                  Daily Housekeeping
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                  <ExpandIcon className="h-6 w-6 text-blue-900" />
                </div>
                <span className="text-sm text-gray-700">Spacious Rooms</span>
              </div>
            </div>
          </div>
          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map(room => <RoomCard key={room.id} id={room.id} name={room.name} description={room.description} price={room.price} capacity={room.capacity} size={room.size} image={room.image} amenities={room.amenities} />)}
          </div>
          {filteredRooms.length === 0 && <div className="text-center py-12">
              <p className="text-gray-600">
                No rooms found matching your criteria.
              </p>
            </div>}
        </div>
      </section>
    </div>;
};
export default Rooms;