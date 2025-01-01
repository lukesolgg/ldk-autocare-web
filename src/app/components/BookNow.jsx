import React from 'react';
import Image from 'next/image';
import { FaCalendarCheck, FaClipboardList, FaCar, FaRegStar } from 'react-icons/fa';
import AboutBackground from '../assets/AboutBackground.png';

export default function BookNow() {
  const steps = [
    {
      number: "1",
      title: "Book Your Detail",
      description: "Easily book your appointment through our website or connect via WhatsApp for personal assistance",
      icon: <FaCalendarCheck className="text-4xl mb-4 text-white" />
    },
    {
      number: "2",
      title: "Tailored Selection",
      description: "Our experts will guide you to the perfect detailing package for your vehicle's needs",
      icon: <FaClipboardList className="text-4xl mb-4 text-white" />
    },
    {
      number: "3",
      title: "Flexible Options",
      description: "Choose between our professional facility or our convenient mobile service at your location",
      icon: <FaCar className="text-4xl mb-4 text-white" />
    },
    {
      number: "4",
      title: "Premium Results",
      description: "Experience the exceptional finish and protection your vehicle deserves",
      icon: <FaRegStar className="text-4xl mb-4 text-white" />
    }
  ];

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <Image
        src={AboutBackground}
        alt="Background"
        fill
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-black/50" />
  
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-2 md:mb-4">
          Premium Booking Process
        </h2>
        <p className="text-base md:text-xl text-white/80 text-center mb-12 md:mb-24">
          Experience excellence in automotive care through our streamlined booking journey
        </p>

        {/* Timeline */}
        <div className="hidden md:flex justify-center items-center mb-16 relative max-w-7xl mx-auto px-8">
          <div className="absolute h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-blue-500 to-transparent top-1/2 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center flex-1">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center 
                ${index < 2 ? 'bg-[linear-gradient(90deg,#85A5F5,#1877F2)]' : 'bg-gray-700'} 
                text-white font-bold text-2xl z-10 border-2 border-white/20
                transition-all duration-300 shadow-lg`}>
                {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
  {steps.map((step, index) => (
    <div 
    key={index}
    className="bg-[linear-gradient(135deg,#85A5F5,#1877F2,#4AF9F9)] rounded-xl 
      p-8 text-center
      shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
      hover:shadow-[0_8px_30px_rgba(24,119,242,0.3)]
      hover:scale-105 transition-all duration-300
      backdrop-blur-sm"
  >
    <div className="flex justify-center items-center">
      {step.icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">
      {step.title}
    </h3>
    <p className="text-white/90 leading-relaxed">
      {step.description}
    </p>
  </div>
  ))}
</div>
      </div>
    </div>
  );
}