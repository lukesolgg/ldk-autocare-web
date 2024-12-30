import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaCarSide, FaCheckCircle } from 'react-icons/fa';
import AboutBackground from '../assets/AboutBackground.png';

function BookNow() {
  const steps = [
    {
      number: "1",
      icon: <FaWhatsapp className="text-4xl md:text-6xl mb-4" />,
      title: "Book On Our Website or via WhatsApp"
    },
    {
      number: "2",
      icon: <FaCarSide className="text-4xl md:text-6xl mb-4" />,
      title: "Drop your car off & let us take care of the rest"
    },
    {
      number: "3",
      icon: <FaCheckCircle className="text-4xl md:text-6xl mb-4" />,
      title: "Pick your car up and enjoy the luxury of a detailed vehicle"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center py-20">
      <Image
        src={AboutBackground}
        alt="Background"
        fill
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          Our Booking Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg 
                aspect-square flex flex-col items-center justify-center p-8 md:p-12
                shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300
                relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 text-4xl md:text-5xl font-bold text-white/80">
                {step.number}
              </div>
              <div className="text-white">{step.icon}</div>
              <h3 className="text-lg md:text-2xl font-bold text-white text-center">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookNow;