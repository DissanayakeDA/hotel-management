import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Luxe Haven</h3>
            <p className="text-blue-100 mb-4">
              Experience luxury and comfort in the heart of paradise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/special-offers" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 text-blue-200 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  123 Luxury Avenue, Paradise Bay, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-blue-200" />
                <a href="tel:+11234567890" className="text-blue-100 hover:text-white transition-colors duration-300">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-blue-200" />
                <a href="mailto:info@luxehaven.com" className="text-blue-100 hover:text-white transition-colors duration-300">
                  info@luxehaven.com
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-blue-100 mb-3">
              Subscribe to our newsletter for special offers and updates
            </p>
            <form className="space-y-2">
              <input type="email" placeholder="Your email address" className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Luxe Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;