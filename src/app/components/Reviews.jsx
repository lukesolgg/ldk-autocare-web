"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CarBg4 from '../assets/carbg4.jpg';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reviews = [
    {
      text: "Absolutely amazing service! My car looks better than when I first bought it. The attention to detail is outstanding.",
      rating: 5,
      name: "John Smith",
      location: "Belfast, UK"
    },
    {
      text: "Professional, friendly, and thorough. The ceramic coating has made maintaining my car so much easier.",
      rating: 5,
      name: "Sarah Williams",
      location: "Carrickfergus, UK"
    },
    {
      text: "Best detailing service in Belfast! The team went above and beyond to restore my car's paintwork.",
      rating: 5,
      name: "Mike Johnson",
      location: "Bangor, UK"
    },
    {
      text: "Incredible results with the paint correction. Would highly recommend to anyone looking for premium car care.",
      rating: 5,
      name: "Emma Thompson",
      location: "Holywood, UK"
    },
    {
      text: "Five-star service from start to finish. The team's dedication to perfection is truly remarkable.",
      rating: 5,
      name: "David Wilson",
      location: "Lisburn, UK"
    }
  ];

  const nextSlide = () => {
    const maxSlides = isMobile ? reviews.length : reviews.length - 3;
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = isMobile ? reviews.length : reviews.length - 3;
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  return (
    <div className="relative min-h-[80vh] md:h-screen flex items-center py-10 md:py-0">
      <Image
        src={CarBg4}
        alt="Reviews Background"
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
          Reviews
        </h2>
        <p className="text-base md:text-xl text-white text-center mb-8 md:mb-12 px-4">
          Don't just take our word for it, See what our clients have to say:
        </p>

        <div className="relative max-w-7xl mx-auto px-4">
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-[-40px] top-1/2 transform -translate-y-1/2 
              text-white text-3xl md:text-4xl hover:text-blue-500 transition-colors duration-300 
              z-20 p-4 md:p-0"
          >
            <IoIosArrowBack />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 overflow-hidden">
            {reviews.slice(currentSlide, currentSlide + (isMobile ? 1 : 4)).map((review, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-xl transform transition-all duration-300
                  hover:scale-105 active:scale-95 md:hover:scale-105"
              >
                <p className="italic text-gray-700 mb-4 text-sm md:text-base">
                  "{review.text}"
                </p>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <AiFillStar key={i} className="text-xl md:text-2xl" />
                  ))}
                </div>
                <p className="text-gray-600 font-semibold text-sm md:text-base">
                  {review.name}
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {review.location}
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-[-40px] top-1/2 transform -translate-y-1/2 
              text-white text-3xl md:text-4xl hover:text-blue-500 transition-colors duration-300 
              z-20 p-4 md:p-0"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;