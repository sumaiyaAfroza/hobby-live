
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const banners = [
    { id: 1, image: 'https://i.ibb.co/vvQQJBwT/slider1.jpg', alt: 'Banner 1' },
    { id: 2, image: 'https://i.ibb.co/nMM2kjfn/slider2.jpg', alt: 'Banner 2' },
    { id: 3, image: 'https://i.ibb.co/Kx5tbmHV/slider3.jpg', alt: 'Banner 3' },
];

export default function Banner() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => setCurrent(current === 0 ? banners.length - 1 : current - 1);
    const nextSlide = () => setCurrent(current === banners.length - 1 ? 0 : current + 1);

    return (
        <div className="relative w-full aspect-[3/1] mx-auto overflow-hidden bg-black">
            {banners.map((banner, index) => (
                <img
                    key={banner.id}
                    src={banner.image}
                    alt={banner.alt}
                    className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                        index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 bg-opacity-50 p-2 rounded-full text-white"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 bg-opacity-50 p-2 rounded-full text-white"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    );
}
