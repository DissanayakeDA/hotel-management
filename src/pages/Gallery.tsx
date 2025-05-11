import React, { useEffect, useState } from 'react';
import { XIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const categories = [{
    id: 'all',
    name: 'All'
  }, {
    id: 'rooms',
    name: 'Rooms & Suites'
  }, {
    id: 'amenities',
    name: 'Amenities'
  }, {
    id: 'dining',
    name: 'Dining'
  }, {
    id: 'surroundings',
    name: 'Surroundings'
  }];
  const galleryImages = [{
    id: 1,
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Luxury Suite',
    category: 'rooms'
  }, {
    id: 2,
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Hotel Swimming Pool',
    category: 'amenities'
  }, {
    id: 3,
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Gourmet Restaurant',
    category: 'dining'
  }, {
    id: 4,
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Presidential Suite',
    category: 'rooms'
  }, {
    id: 5,
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Hotel Spa',
    category: 'amenities'
  }, {
    id: 6,
    src: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Beach View',
    category: 'surroundings'
  }, {
    id: 7,
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Deluxe Room',
    category: 'rooms'
  }, {
    id: 8,
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Executive Room',
    category: 'rooms'
  }, {
    id: 9,
    src: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Fine Dining',
    category: 'dining'
  }, {
    id: 10,
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Cocktail Bar',
    category: 'dining'
  }, {
    id: 11,
    src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Fitness Center',
    category: 'amenities'
  }, {
    id: 12,
    src: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Mountain View',
    category: 'surroundings'
  }];
  const filteredImages = activeCategory === 'all' ? galleryImages : galleryImages.filter(img => img.category === activeCategory);
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  const goToPrevious = () => {
    setCurrentImageIndex(prevIndex => prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1);
  };
  const goToNext = () => {
    setCurrentImageIndex(prevIndex => prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1);
  };
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Hotel spa" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our luxurious accommodations, amenities, dining options, and
            beautiful surroundings.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category.id ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category.name}
              </button>)}
          </div>
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => <div key={image.id} className="relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openLightbox(index)}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>)}
          </div>
        </div>
      </section>
      {/* Lightbox */}
      {lightboxOpen && filteredImages.length > 0 && <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10" aria-label="Close lightbox">
            <XIcon className="h-8 w-8" />
          </button>
          <button onClick={goToPrevious} className="absolute left-4 text-white hover:text-gray-300 z-10" aria-label="Previous image">
            <ArrowLeftIcon className="h-8 w-8" />
          </button>
          <button onClick={goToNext} className="absolute right-4 text-white hover:text-gray-300 z-10" aria-label="Next image">
            <ArrowRightIcon className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[80vh] relative">
            <img src={filteredImages[currentImageIndex].src} alt={filteredImages[currentImageIndex].alt} className="max-w-full max-h-[80vh] object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
              {filteredImages[currentImageIndex].alt}
            </div>
          </div>
        </div>}
    </div>;
};
export default Gallery;