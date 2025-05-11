import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Rooms',
    href: '/rooms'
  }, {
    name: 'Gallery',
    href: '/gallery'
  }, {
    name: 'Special Offers',
    href: '/special-offers'
  }, {
    name: 'About',
    href: '/about'
  }];
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-blue-900">
                Luxe Haven
              </span>
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`${isActive(item.href) ? 'text-blue-900 font-medium' : 'text-gray-600 hover:text-blue-800'} px-2 py-1 text-sm font-medium transition-colors duration-200`}>
                {item.name}
              </Link>)}
          </nav>
          <div className="hidden md:flex">
            <Link to="/booking" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors duration-300 flex items-center font-medium">
              Book Now
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-900 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`${isActive(item.href) ? 'bg-blue-50 text-blue-900' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-800'} block px-3 py-2 rounded-md text-base font-medium`} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
            <Link to="/booking" className="block w-full text-center bg-blue-900 text-white px-4 py-2 mt-3 rounded hover:bg-blue-800 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>}
    </header>;
};
export default Header;