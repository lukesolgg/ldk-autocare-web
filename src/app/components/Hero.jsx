import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBackground from '../assets/HeroBackground.png';
import LogoTransparent from '../assets/logotransparent.png';

function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src={HeroBackground}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src={LogoTransparent}
            alt="LDK Logo"
            width={400}
            height={400}
            className="w-auto h-auto"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          SERVICING THE GREATER BELFAST AREA
        </h1>
        
        <p className="text-sm md:text-lg mb-8 max-w-2xl">
          WE ALSO OFFER PAINT CORRECTIONS, CERAMIC COATINGS & STYLING OPTIONS FOR YOUR CAR!
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/services">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              Services
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;