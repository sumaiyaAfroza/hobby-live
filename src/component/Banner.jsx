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
    <div className="relative w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row aspect-[4/2] md:aspect-[16/5]">
      {/* Text section */}
      <div className="flex flex-col justify-center items-start p-8 w-full md:w-1/2 z-10 bg-white dark:bg-gray-900">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-500">
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
        <p className="text-gray-600 dark:text-gray-300 mb-6 transition-all duration-500">
          {banners[current].description}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition">
          {banners[current].buttonText}
        </button>
      </div>

      {/* Image slider section */}
      <div className="relative w-full md:w-1/2 h-full">
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
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 bg-opacity-50 p-2 rounded-full text-white z-20"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 bg-opacity-50 p-2 rounded-full text-white z-20"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}





// import React, { useState, useEffect } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// const banners = [
//   {
//     id: 1,
//     image: 'https://i.ibb.co/vvQQJBwT/slider1.jpg',
//     alt: 'Banner 1',
//     title: 'Discover Your Hobby',
//     description: 'Explore new passions and make your free time fun and fulfilling.',
//     buttonText: 'Explore Now',
//   },
//   {
//     id: 2,
//     image: 'https://i.ibb.co/nMM2kjfn/slider2.jpg',
//     alt: 'Banner 2',
//     title: 'Creative Arts',
//     description: 'Unleash your creativity with painting, drawing, and more!',
//     buttonText: 'Start Creating',
//   },
//   {
//     id: 3,
//     image: 'https://i.ibb.co/Kx5tbmHV/slider3.jpg',
//     alt: 'Banner 3',
//     title: 'Join Our Community',
//     description: 'Connect with hobbyists around the world and share your journey.',
//     buttonText: 'Join Now',
//   },
// ];

// export default function Banner() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () =>
//     setCurrent(current === 0 ? banners.length - 1 : current - 1);
//   const nextSlide = () =>
//     setCurrent(current === banners.length - 1 ? 0 : current + 1);

//   return (
//     <div className="relative w-full gap-6 max-w-7xl mx-auto  dark:bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row aspect-[4/2] md:aspect-[16/5]">
//       {/* Text section */}
//       <div className="flex flex-col justify-center items-start p-8 w-full md:w-1/2 z-10 dark:bg-gray-900">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-500">
//           {banners[current].title}
//         </h1>
//         <p className="text-gray-600 dark:text-gray-300 mb-6 transition-all duration-500">
//           {banners[current].description}
//         </p>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition">
//           {banners[current].buttonText}
//         </button>
//       </div>

//       {/* Image slider section */}
//       <div className="relative w-full md:w-1/2 h-full">
//         {banners.map((banner, index) => (
//           <img
//             key={banner.id}
//             src={banner.image}
//             alt={banner.alt}
//             className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === current ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//         ))}
//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 bg-opacity-50 p-2 rounded-full text-white z-20"
//         >
//           <ChevronLeftIcon className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 bg-opacity-50 p-2 rounded-full text-white z-20"
//         >
//           <ChevronRightIcon className="w-6 h-6" />
//         </button>
//       </div>
//     </div>
//   );
// }

