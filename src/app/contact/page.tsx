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
      <main className="pt-16 relative min-h-screen">
        <Image
          src={ServicesBackground}
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
  
        <div className="relative z-10 container mx-auto px-4 py-16 pt-32">
          <div className="max-w-6xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
            <div className="flex flex-col-reverse md:flex-row">
              {/* Left Side - Contact Info */}
              <div className="w-full md:w-1/3 bg-[linear-gradient(135deg,#85A5F5,#1877F2,#4AF9F9)] p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/80 mb-2">Connect with us:</p>
                    <p className="text-white font-semibold">+44 7752 038819</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-2">Email us at:</p>
                    <p className="text-white font-semibold">enquiries@ldkautocare.com</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-2">Find us at:</p>
                    <p className="text-white font-semibold">Belfast, Northern Ireland</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-2">Business Hours:</p>
                    <p className="text-white font-semibold">Mon - Sat: 8am - 8pm</p>
                  </div>
                </div>
              </div>
  
              {/* Right Side - Contact Form */}
              <div className="w-full md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg 
                          focus:outline-none focus:border-blue-500 placeholder-gray-500"
                        required
                      />
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
                  </div>
  
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg 
                        focus:outline-none focus:border-blue-500 placeholder-gray-500"
                      required
                    />
                  </div>
  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea
                      id="message"
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