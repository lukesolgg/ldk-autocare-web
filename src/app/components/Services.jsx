import React from 'react';
import Link from "next/link";
import Image from "next/image";
import ServicesBackground from "../assets/ServicesBackground.png";
import HeroBackground from "../assets/HeroBackground.png";

function Services() {
    const packages = [
        {
          name: "Maintenance Detail",
          time: "2-3 Hours",
          price: "40",
          slug: "maintenance"
        },
        {
          name: "Full Valet",
          time: "4-6 Hours",
          price: "70",
          slug: "full-valet"
        },
        {
          name: "Clay & Seal",
          time: "5-7 Hours",
          price: "120",
          slug: "clay-seal"
        },
        {
          name: "Ceramic Coating",
          time: "1-2 Days",
          price: "400",
          slug: "ceramic-coating"
        },
        {
          name: "New Car Protection",
          time: "1-2 Days",
          price: "POA",
          slug: "new-car-protection"
        }
      ];

      return (
        <div className="relative min-h-screen py-4 md:py-12">
          <Image
            src={ServicesBackground}
            alt="Services Background"
            fill
            className="object-cover"
            priority
          />
          
          <div className="absolute inset-0 bg-black/50" />
      
          <div className="relative z-10 container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-2">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-white/80 text-center mb-24">
              Professional Car Detailing Services in Belfast
            </p>
      
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)] 
                    rounded-lg overflow-hidden shadow-xl 
                    hover:scale-105 active:scale-95 transition-transform duration-300
                    h-[200px] md:h-[250px]
                    ${index >= packages.length - 2 ? 'md:col-span-2' : 'md:col-span-2'}`}
                  style={{
                    gridColumnStart: index === packages.length - 2 ? '2' : 
                                   index === packages.length - 1 ? '4' : 
                                   index * 2 + 1
                  }}
                >
                  <div className="relative h-[50%] w-full">
                    <Image
                      src={HeroBackground}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[50%]">
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-white mb-1">
                        {pkg.name}
                      </h3>
                      <p className="text-xs md:text-sm text-white/80">
                        Duration: {pkg.time}
                      </p>
                      <p className="text-xs md:text-sm text-white/80">
                        From £{pkg.price}
                      </p>
                    </div>
                    <div className="flex justify-end w-full">
                      <Link href={`/services/${pkg.slug}`}>
                        <button className="bg-white text-blue-600 px-3 py-1 
                          rounded-md hover:bg-gray-100 transition duration-300 
                          text-xs whitespace-nowrap">
                          See More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Services;