"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import ServicesBackground from "../assets/ServicesBackground.png";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LDKLogo from "../assets/logotransparent.png";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    serviceType: "dropoff", // default to drop-off
    address: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    package: "",
    condition: "",
    fabricType: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission
  };

  const ThankYouMessage = () => (
    <div className="text-center py-12 px-4">
      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Thank You for Your Booking!
        </h2>
        <div className="relative w-48 h-48 mx-auto mt-8">
        <Image
          src={LDKLogo}
          alt="LDK Autocare Logo"
          fill
          className="object-contain animate-pulse"
        />
      </div>
        <div className="space-y-4 text-white/80 text-lg">
          <p>
            We appreciate you choosing LDK Autocare for your vehicle detailing needs.
          </p>
          <p>
            Our team will review your booking details and contact you via WhatsApp
            shortly to confirm your appointment and discuss any specific requirements.
          </p>
          <p>
            If you have any immediate questions, feel free to reach out to us
            directly through WhatsApp or give us a call.
          </p>
          <div className="mt-8 text-white font-semibold">
            <p>Thank you for trusting us with your vehicle!</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <Announcement />
    <Navbar />
    <main className="pt-16 bg-black min-h-screen">
      <div className="relative">
        <Image
          src={ServicesBackground}
          alt="Background"
          fill
          className="object-cover fixed"
        />
        <div className="absolute inset-0 bg-black/50" />
  
        <div className="relative z-10 container mx-auto px-4 py-12">
          {!isSubmitted ? (
            <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Book Your Service
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>
  
                  <div>
                    <label className="block text-white mb-2">Service Type</label>
                    <select
                      name="serviceType"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                      defaultValue="dropoff"
                    >
                      <option value="dropoff">Drop Off</option>
                      <option value="mobile">Mobile Service</option>
                    </select>
                  </div>
                </div>
  
                {formData.serviceType === "mobile" && (
                  <div>
                    <label className="block text-white mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                )}
  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white mb-2">Vehicle Make</label>
                    <input
                      type="text"
                      name="vehicleMake"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>
  
                  <div>
                    <label className="block text-white mb-2">Vehicle Model</label>
                    <input
                      type="text"
                      name="vehicleModel"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>
  
                  <div>
                    <label className="block text-white mb-2">Vehicle Year</label>
                    <input
                      type="text"
                      name="vehicleYear"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white mb-2">Package</label>
                    <select
                      name="package"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    >
                      <option value="">Select Package</option>
                      <option value="full-valet">Full Valet</option>
                      <option value="clay-seal">Clay & Seal</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="new-car-protection">New Car Protection</option>
                    </select>
                  </div>
  
                  <div>
                    <label className="block text-white mb-2">Vehicle Condition</label>
                    <select
                      name="condition"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    >
                      <option value="">Select Condition</option>
                      <option value="poor">Poor</option>
                      <option value="fair">Fair</option>
                      <option value="good">Good</option>
                      <option value="excellent">Excellent</option>
                      <option value="like-new">Like New</option>
                    </select>
                  </div>
  
                  <div>
                    <label className="block text-white mb-2">Fabric Type</label>
                    <select
                      name="fabricType"
                      required
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                        text-white focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    >
                      <option value="">Select Fabric</option>
                      <option value="leather">Leather</option>
                      <option value="alcantara">Alcantara</option>
                      <option value="fabric">Fabric</option>
                    </select>
                  </div>
                </div>
  
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 
                    bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)]
                    rounded-lg text-white font-bold
                    hover:scale-105 transition-all duration-300"
                >
                  Submit Booking
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-8 shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Thank You for Your Booking!
              </h2>
              <div className="relative w-48 h-48 mx-auto mt-8">
        <Image
          src={LDKLogo}
          alt="LDK Autocare Logo"
          fill
          className="object-contain animate-pulse"
        />
      </div>
              <div className="space-y-4 text-white/80 text-lg">
                <p>
                  We appreciate you choosing LDK Autocare for your vehicle detailing needs.
                </p>
                <p>
                  Our team will review your booking details and contact you via WhatsApp
                  shortly to confirm your appointment and discuss any specific requirements.
                </p>
                <p>
                  If you have any immediate questions, feel free to reach out to us
                  directly through WhatsApp or give us a call.
                </p>
                <div className="mt-8 text-white font-semibold">
                  <p>Thank you for trusting us with your vehicle!</p>
                </div>
              </div>
            </div>
          )}
  
          {/* WhatsApp Section */}
          <a 
          href="https://wa.me/447752038819"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer">
          <div className="max-w-4xl mx-auto mt-12 bg-black/30 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Not Sure What You Need?
                </h2>
                <p className="text-white/80">
                  Message us on WhatsApp and we'll help you choose the right package for your vehicle
                </p>
              </div>
              <span
                
                className="text-5xl text-green-500 hover:scale-110 transition-transform"
              >
                <FaWhatsapp />
              </span>
            </div>
          </div>
          </a>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}