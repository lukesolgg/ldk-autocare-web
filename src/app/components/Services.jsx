import React from 'react';
import Link from "next/link";
import Image from "next/image";
import ServicesBackground from "../assets/ServicesBackground.png";
import HeroBackground from "../assets/HeroBackground.png";

function Services() {
  const packages = [
    { name: "MAINTENANCE", time: "4 hr 30 mins", price: "100" },
    { name: "FULL VALET", time: "4 hr 30 mins", price: "100" },
    { name: "CLAY AND SEAL", time: "4 hr 30 mins", price: "100" },
    { name: "CERAMIC COATING", time: "4 hr 30 mins", price: "100" },
    { name: "NEW CAR PROTECTION", time: "4 hr 30 mins", price: "100" },
  ];

  return (
    <div className="relative min-h-screen py-8 md:py-20">
      <Image
        src={ServicesBackground}
        alt="Services Background"
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4">
  <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
    Our Services
  </h2>
  <p className="text-lg md:text-xl text-white/80 text-center mb-12">
    Professional Car Detailing Services in Belfast
  </p>

  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 max-w-6xl mx-auto">
  {packages.map((pkg, index) => (
    <div 
      key={index}
      className={`bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)] 
        rounded-lg overflow-hidden shadow-xl 
        hover:scale-105 active:scale-95 transition-transform duration-300
        h-[300px] md:h-[350px]
        ${index >= packages.length - 2 ? 'md:col-span-2' : 'md:col-span-2'}`}
      style={{
        gridColumnStart: index === packages.length - 2 ? '2' : 
                        index === packages.length - 1 ? '4' : 
                        index * 2 + 1
      }}
    >
      <div className="relative h-[70%] w-full">
        <Image
          src={HeroBackground}
          alt={pkg.name}
          fill
          className="object-cover"
        />
      </div>
              
              <div className="p-3 md:p-4 h-[30%] flex items-end justify-between">
                <div className="text-white">
                  <h3 className="text-base md:text-lg font-bold">{pkg.name}</h3>
                  <p className="text-xs md:text-sm">{pkg.time}</p>
                  <p className="text-sm md:text-base font-bold">From £{pkg.price}</p>
                </div>
                <Link href="/services">
                  <button className="bg-white text-blue-600 px-3 md:px-4 py-1 md:py-1.5 
                    rounded-md hover:bg-gray-100 transition duration-300 
                    text-xs md:text-sm whitespace-nowrap">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
}

export default Services;