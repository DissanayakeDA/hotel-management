import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  UtensilsIcon,
  WifiIcon,
  DumbbellIcon,
  SparklesIcon,
  BedIcon,
} from "lucide-react";
import Button from "../components/UI/Button";
import TestimonialCard from "../components/UI/TestimonialCard";
const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-blue-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury hotel suite"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Experience Luxury Like Never Before
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Indulge in exceptional comfort and world-class service at Luxe
              Haven.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button variant="secondary" size="lg">
                  Book Now
                </Button>
              </Link>
              <Link to="/rooms">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white bg-opacity-10 text-white border-white hover:bg-white hover:bg-opacity-20"
                >
                  Explore Rooms
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Amenities */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-3">
              Exceptional Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the finest facilities and services designed for your
              comfort and convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Infinity Pool
              </h3>
              <p className="text-gray-600">
                Enjoy our stunning infinity pool with panoramic views of the
                surroundings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <UtensilsIcon className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Gourmet Restaurant
              </h3>
              <p className="text-gray-600">
                Savor exquisite cuisine prepared by our award-winning chefs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <SparklesIcon className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Luxury Spa
              </h3>
              <p className="text-gray-600">
                Rejuvenate your body and mind with our premium spa treatments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <DumbbellIcon className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Fitness Center
              </h3>
              <p className="text-gray-600">
                Stay fit with our state-of-the-art equipment and personal
                trainers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <WifiIcon className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                High-Speed WiFi
              </h3>
              <p className="text-gray-600">
                Stay connected with complimentary high-speed internet throughout
                the hotel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <BedIcon className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Premium Bedding
              </h3>
              <p className="text-gray-600">
                Sleep in absolute comfort with our luxury linens and premium
                mattresses.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Room Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-3">
              Elegant Accommodations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of beautifully appointed rooms and
              suites.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Deluxe Room"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Deluxe Room</h3>
                <p className="text-blue-100 mb-3">From $299 per night</p>
                <Link
                  to="/rooms"
                  className="text-white flex items-center text-sm hover:text-blue-200 transition-colors"
                >
                  Explore <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Executive Suite"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Executive Suite
                </h3>
                <p className="text-blue-100 mb-3">From $499 per night</p>
                <Link
                  to="/rooms"
                  className="text-white flex items-center text-sm hover:text-blue-200 transition-colors"
                >
                  Explore <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Presidential Suite"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Presidential Suite
                </h3>
                <p className="text-blue-100 mb-3">From $999 per night</p>
                <Link
                  to="/rooms"
                  className="text-white flex items-center text-sm hover:text-blue-200 transition-colors"
                >
                  Explore <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/rooms">
              <Button variant="primary">View All Rooms</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-3">
              Guest Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our guests have to say about their stay with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Emily Johnson"
              location="New York, USA"
              quote="Absolutely incredible experience! The staff went above and beyond to make our anniversary special. The room was immaculate and the views were breathtaking."
              image="https://randomuser.me/api/portraits/women/12.jpg"
              rating={5}
            />
            <TestimonialCard
              name="Michael Chen"
              location="Toronto, Canada"
              quote="This hotel sets the standard for luxury accommodations. The attention to detail is remarkable and the restaurant serves the best food I've had in years."
              image="https://randomuser.me/api/portraits/men/32.jpg"
              rating={5}
            />
            <TestimonialCard
              name="Sophia Rodriguez"
              location="London, UK"
              quote="I travel frequently for business, and this is by far the most comfortable hotel I've stayed in. The amenities are top-notch and the staff is incredibly professional."
              image="https://randomuser.me/api/portraits/women/32.jpg"
              rating={4}
            />
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="relative py-20 bg-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury hotel lobby"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Ready to Experience Luxe Haven?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your stay today and discover why our guests keep coming back.
          </p>
          <Link to="/booking">
            <Button variant="secondary" size="lg">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Home;
