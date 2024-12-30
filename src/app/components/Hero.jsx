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
        <div className="flex gap-4 md:gap-6">
  <Link href="/services">
    <button className="relative w-[150px] md:w-[200px] px-6 py-3 md:px-8 md:py-4 
      bg-gradient-to-r from-blue-400 to-blue-600 
      hover:scale-110 transition-all duration-300 
      text-white text-sm md:text-base font-medium
      border-2 border-transparent
      hover:border-blue-300
      text-center">
      Services
    </button>
  </Link>
  <Link href="/contact">
    <button className="relative w-[150px] md:w-[200px] px-6 py-3 md:px-8 md:py-4 
      bg-transparent 
      hover:scale-110 transition-all duration-300 
      text-white text-sm md:text-base font-medium
      border-2
      [background-clip:padding-box]
      [border-image:linear-gradient(to_right,#60a5fa,#3b82f6)_1]
      text-center">
      Contact Us
    </button>
  </Link>
</div>
      </div>
    </div>
  );
}

export default Hero;