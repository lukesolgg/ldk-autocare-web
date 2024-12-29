import React from 'react';
import Image from 'next/image';
import AboutBackground from '../assets/AboutBackground.png';

function BookNow() {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <Image
        src={AboutBackground}
        alt="Background"
        fill
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Booking Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg p-8 shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-4">
              Book On Our Website or via WhatsApp
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg p-8 shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-4">
              Drop your car off & let us take care of the rest
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg p-8 shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-4">
              Pick your car up and enjoy the luxury of a detailed vehicle
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;