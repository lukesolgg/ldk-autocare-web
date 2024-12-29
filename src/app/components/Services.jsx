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
    <div className="relative h-screen flex items-center">
      <Image
        src={ServicesBackground}
        alt="Services Background"
        fill
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-blue-600 to-blue-900 
                rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 h-[350px]
                ${index > 2 ? 'md:col-span-1.5 md:translate-x-1/2' : ''}`}
            >
              <div className="relative h-[70%] w-full">
                <Image
                  src={HeroBackground}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4 h-[30%] flex items-end justify-between">
                <div className="text-white">
                  <h3 className="text-lg font-bold">{pkg.name}</h3>
                  <p className="text-sm">{pkg.time}</p>
                  <p className="text-base font-bold">From £{pkg.price}</p>
                </div>
                <Link href="/services">
                  <button className="bg-white text-blue-600 px-4 py-1.5 rounded-md hover:bg-gray-100 transition duration-300 text-sm">
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