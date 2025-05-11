import React, { memo } from 'react';
import { AwardIcon, HeartIcon, UsersIcon, StarIcon } from 'lucide-react';
const About = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Hotel exterior" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">
            About Luxe Haven
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our story, our values, and our commitment to providing
            exceptional luxury experiences.
          </p>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 1995, Luxe Haven began with a vision to create a
                sanctuary of elegance and comfort for travelers seeking
                exceptional experiences. What started as a boutique hotel with
                just 15 rooms has evolved into one of the most prestigious
                luxury hotel chains in the world.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been defined by an unwavering commitment to
                excellence, attention to detail, and personalized service. We
                believe that luxury is not just about opulent surroundings, but
                about creating meaningful connections and memorable moments for
                our guests.
              </p>
              <p className="text-gray-700">
                Today, Luxe Haven stands as a symbol of sophistication and
                hospitality, welcoming guests from around the globe to
                experience the perfect blend of traditional charm and modern
                luxury.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" alt="Hotel lobby" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-3">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Luxe Haven.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AwardIcon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every detail, from service to
                amenities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Passion
              </h3>
              <p className="text-gray-600">
                Our team is driven by a genuine passion for hospitality and
                service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Respect
              </h3>
              <p className="text-gray-600">
                We respect our guests, our team members, and our environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-medium text-blue-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously evolve to exceed the expectations of our guests.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Message from the Founder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Robert Thompson, Founder" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
                A Message from Our Founder
              </h2>
              <blockquote className="border-l-4 border-blue-900 pl-4 italic text-gray-700 mb-6">
                "When I founded Luxe Haven, my vision was to create more than
                just a place to stay. I wanted to create a sanctuary where
                travelers could experience the true meaning of luxury—where
                every detail is thoughtfully considered, where service is
                genuine and warm, and where memories are created that last a
                lifetime."
              </blockquote>
              <p className="text-gray-700 mb-4">
                At Luxe Haven, we believe that luxury is personal. It's about
                understanding our guests and anticipating their needs. It's
                about creating spaces that inspire and comfort. And most
                importantly, it's about making every guest feel special and
                valued.
              </p>
              <p className="text-gray-700">
                As we continue to grow and evolve, our commitment to these
                principles remains unwavering. We look forward to welcoming you
                to the Luxe Haven experience.
              </p>
              <div className="mt-4">
                <p className="font-serif text-blue-900 font-bold">
                  Robert Thompson
                </p>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-3">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals who ensure your stay exceeds
              expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Sarah Johnson" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-blue-900">Sarah Johnson</h3>
                <p className="text-gray-600 text-sm">General Manager</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-blue-900">Michael Chen</h3>
                <p className="text-gray-600 text-sm">Executive Chef</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Rodriguez" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-blue-900">Emily Rodriguez</h3>
                <p className="text-gray-600 text-sm">Director of Operations</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="David Kim" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-blue-900">David Kim</h3>
                <p className="text-gray-600 text-sm">
                  Customer Experience Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;