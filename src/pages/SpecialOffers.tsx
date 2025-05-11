import { CalendarIcon } from "lucide-react";
import OfferCard from "../components/UI/OfferCard";
const SpecialOffers = () => {
  const offers = [
    {
      id: "early-bird",
      title: "Early Bird Special",
      description:
        "Book at least 30 days in advance and save on your stay. Includes daily breakfast.",
      discount: "20% OFF",
      validUntil: "December 31, 2023",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      code: "EARLY20",
    },
    {
      id: "weekend-escape",
      title: "Weekend Escape",
      description:
        "Enjoy a perfect weekend getaway with special rates for Friday and Saturday night stays.",
      discount: "15% OFF",
      validUntil: "November 30, 2023",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      code: "WEEKEND15",
    },
    {
      id: "spa-package",
      title: "Spa & Wellness Package",
      description:
        "Book any room and receive a complimentary spa treatment per person during your stay.",
      discount: "Free Spa",
      validUntil: "October 31, 2023",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      code: "SPAFREE",
    },
    {
      id: "honeymoon",
      title: "Honeymoon Special",
      description:
        "Celebrate your love with our romantic package including champagne, flowers, and a candlelit dinner.",
      discount: "25% OFF",
      validUntil: "December 31, 2023",
      image:
        "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      code: "LOVE25",
    },
    {
      id: "family-fun",
      title: "Family Fun Package",
      description:
        "Book a family room and receive complimentary meals for children under 12 and special kids activities.",
      discount: "Kids Stay Free",
      validUntil: "September 30, 2023",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      code: "FAMILY",
    },
    {
      id: "extended-stay",
      title: "Extended Stay Offer",
      description:
        "Stay for 7 nights or more and enjoy significant savings on your entire booking.",
      discount: "30% OFF",
      validUntil: "November 15, 2023",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      code: "EXTENDED30",
    },
  ];
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-amber-600">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury hotel room with a view"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">
            Special Offers & Packages
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Discover our exclusive deals and make your stay even more special
            with these limited-time offers.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Offer */}
          <div className="bg-blue-900 rounded-lg overflow-hidden shadow-xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  Limited Time Offer
                </div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">
                  Summer Getaway Special
                </h2>
                <p className="text-blue-100 mb-6">
                  Enjoy the perfect summer vacation with our exclusive package
                  including luxury accommodation, daily breakfast, a welcome
                  drink, and access to all hotel amenities.
                </p>
                <div className="flex items-center text-amber-300 mb-6">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>Valid until August 31, 2023</span>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6">
                  <p className="text-white font-medium">
                    Use code:{" "}
                    <span className="text-amber-300 font-bold">SUMMER25</span>
                  </p>
                  <p className="text-blue-200 text-sm mt-1">
                    Enter this code during booking to receive 25% off your stay
                  </p>
                </div>
                <div>
                  <a
                    href="/booking?offer=summer-special"
                    className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 rounded transition-colors duration-300"
                  >
                    Book This Offer
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                  alt="Summer getaway"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-amber-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                  25% OFF
                </div>
              </div>
            </div>
          </div>
          {/* All Offers */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-3">
              Current Offers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our selection of special offers and packages designed to
              enhance your stay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                id={offer.id}
                title={offer.title}
                description={offer.description}
                discount={offer.discount}
                validUntil={offer.validUntil}
                image={offer.image}
                code={offer.code}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-blue-900 mb-3">
                Stay Updated on Special Offers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about our
                exclusive deals and promotions.
              </p>
            </div>
            <form className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-3 text-center">
                By subscribing, you agree to receive marketing emails from us.
                You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SpecialOffers;
