"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ServicesBackground from '../assets/ServicesBackground.png';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a full detail typically take?",
      answer: "A full detail usually takes between 4-8 hours depending on the vehicle's size and condition. For ceramic coating or paint correction services, this could extend to 1-2 days."
    },
    {
      question: "Do I need to prepare my vehicle before the service?",
      answer: "We recommend removing personal belongings from your vehicle. However, no other preparation is necessary - we'll take care of everything else!"
    },
    {
      question: "What's the difference between a ceramic coating and traditional wax?",
      answer: "Ceramic coatings provide longer-lasting protection (2-5 years) compared to wax (2-3 months). They offer superior resistance to UV rays, chemicals, and scratches, though they are more expensive initially."
    },
    {
      question: "Do you offer mobile detailing services?",
      answer: "Yes, we offer mobile detailing services within the Belfast area. However we require access to water and power supply."
    },
    {
      question: "How often should I get my car detailed?",
      answer: "For optimal protection, we recommend a maintenance detail every 4-6 weeks, with a full detail annually. However, this can vary based on usage and exposure to elements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, card payments, and bank transfers. For certain services, a deposit may be required at booking."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Customer satisfaction is our priority. If you're not completely satisfied, inform us immediately and we'll address your concerns promptly according to our satisfaction guarantee."
    },
    {
      question: "Can you remove all scratches and swirl marks?",
      answer: "Most light to medium scratches and swirl marks can be removed through our paint correction service. However, deep scratches that penetrate the clear coat may require repainting."
    }
  ];

  return (
    <>
      <Announcement />
      <Navbar />
      <main className="pt-32 relative min-h-screen">
        <Image
          src={ServicesBackground}
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-white/80 text-center mb-12">
              Everything you need to know about our detailing services
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="text-white font-semibold text-left">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <FaChevronUp className="text-blue-500 ml-4" />
                    ) : (
                      <FaChevronDown className="text-blue-500 ml-4" />
                    )}
                  </button>
                  <div 
                    className={`px-6 transition-all duration-200 ease-in-out overflow-hidden ${
                      openIndex === index ? 'py-4 max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="text-white/80">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}