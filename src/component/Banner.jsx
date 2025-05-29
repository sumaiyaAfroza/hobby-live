import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Typewriter } from 'react-simple-typewriter';

const banners = [
  {
    id: 1,
    image: 'https://i.ibb.co/vvQQJBwT/slider1.jpg',
    alt: 'Banner 1',
    title: 'Discover Your Hobby',
    description: 'Explore new passions and make your free time fun and fulfilling.',
    buttonText: 'Explore Now',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/nMM2kjfn/slider2.jpg',
    alt: 'Banner 2',
    title: 'Creative Arts',
    description: 'Unleash your creativity with painting, drawing, and more!',
    buttonText: 'Start Creating',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/Kx5tbmHV/slider3.jpg',
    alt: 'Banner 3',
    title: 'Join Our Community',
    description: 'Connect with hobbyists around the world and share your journey.',
    buttonText: 'Join Now',
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent(current === 0 ? banners.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === banners.length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
      {/* Text section */}
      <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 w-full md:w-1/2 z-10 bg-white dark:bg-gray-900">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-all duration-500">
          <Typewriter
            words={[banners[current].title]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 transition-all duration-500">
          {banners[current].description}
        </p>
        <div className="group relative">
          <button className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 sm:px-5 py-2 rounded-md transition text-sm sm:text-base">
            {banners[current].buttonText}
          </button>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg">
            {banners[current].buttonText}
          </span>
        </div>
      </div>

      {/* Image slider section */}
      <div className="relative w-full md:w-1/2 h-[200px] sm:h-[300px] md:h-full">
        {banners.map((banner, index) => (
          <img
            key={banner.id}
            src={banner.image}
            alt={banner.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Navigation Buttons */}
        <div className="group relative">
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 bg-opacity-50 p-2 rounded-full text-white z-20"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg">
            Previous Slide
          </span>
        </div>
        <div className="group relative">
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 bg-opacity-50 p-2 rounded-full text-white z-20"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg">
            Next Slide
          </span>
        </div>
      </div>
    </div>
  );
}