"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ServicesBackground from "../assets/ServicesBackground.png";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Contact Info */}
              <div className="w-full md:w-5/12 bg-[linear-gradient(135deg,#85A5F5,#1877F2,#4AF9F9)] p-6 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get in Touch</h2>
                
                <div className="space-y-6 text-white">
                  <h3 className="text-2xl font-bold">LDK Autocare</h3>
                  
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-xl" />
                    <a href="tel:+447752038819" className="hover:text-blue-100">+44 77520 38819</a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-xl" />
                    <a href="mailto:ldkautocare@gmail.com" className="hover:text-blue-100">ldkautocare@gmail.com</a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-xl" />
                    <p>Finchley Park, Belfast, BT4 2HZ</p>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex space-x-6 pt-8">
                    <a href="https://wa.me/447752038819" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform">
                      <FaWhatsapp />
                    </a>
                    <a href="https://instagram.com/ldkautocare" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform">
                      <FaInstagram />
                    </a>
                    <a href="https://tiktok.com/@ldkautocare" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform">
                      <FaTiktok />
                    </a>
                    <a href="https://youtube.com/@ldkautocare" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
<div className="w-full md:w-7/12 bg-black p-6 md:p-12 flex flex-col justify-center">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Got an Enquiry?</h2>
  
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
        <input
          type="text"
          id="firstName"
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg 
            focus:outline-none focus:border-blue-500 placeholder-gray-500"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg 
            focus:outline-none focus:border-blue-500 placeholder-gray-500"
          required
        />
      </div>
    </div>
    
    <div>
      <label htmlFor="email" className="block text-white mb-2">Email</label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg 
          focus:outline-none focus:border-blue-500 placeholder-gray-500"
        required
      />
    </div>
    
    <div>
      <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
      <input
        type="tel"
        id="phone"
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg 
          focus:outline-none focus:border-blue-500 placeholder-gray-500"
        required
      />
    </div>
    
    <div>
      <label htmlFor="enquiry" className="block text-white mb-2">Enquiry</label>
      <textarea
        id="enquiry"
        rows={4}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg 
          focus:outline-none focus:border-blue-500 resize-none placeholder-gray-500"
        required
      ></textarea>
    </div>
    
    <div className="flex justify-end">
  <button
    type="submit"
    className="w-full md:w-auto px-8 py-3 
      bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)]
      rounded-lg text-white font-bold
      hover:scale-105 transition-all duration-300"
  >
    Send Message
  </button>
</div>
  </form>
</div>
</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}