"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CarBg4 from '../assets/carbg4.jpg';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    },
    {
      text: "Transformed my old car into something that looks brand new. Exceptional service!",
      rating: 5,
      name: "Lucy Parker",
      location: "Newtownards, UK"
    },
    {
      text: "The level of professionalism and expertise is unmatched. Worth every penny!",
      rating: 5,
      name: "James Anderson",
      location: "Belfast, UK"
    },
    {
      text: "Fantastic service and amazing results. My car has never looked better!",
      rating: 5,
      name: "Rebecca Moore",
      location: "Banbridge, UK"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (reviews.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (reviews.length - 3)) % (reviews.length - 3));
  };

  return (
    <div className="relative h-screen flex items-center">
      <Image
        src={CarBg4}
        alt="Reviews Background"
        fill
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Reviews
        </h2>
        <p className="text-xl text-white text-center mb-12">
          DON'T JUST TAKE OUR WORD FOR IT, SEE WHAT OUR CLIENTS HAVE TO SAY:
        </p>

        <div className="relative max-w-7xl mx-auto">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-blue-500 transition-colors duration-300 z-20"
          >
            <IoIosArrowBack />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {reviews.slice(currentSlide, currentSlide + 4).map((review, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <p className="italic text-gray-700 mb-4">"{review.text}"</p>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <AiFillStar key={i} className="text-2xl" />
                  ))}
                </div>
                <p className="text-gray-600 font-semibold">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-blue-500 transition-colors duration-300 z-20"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;