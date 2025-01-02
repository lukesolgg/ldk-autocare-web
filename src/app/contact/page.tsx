"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ServicesBackground from "../assets/ServicesBackground.png";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import logotransparent from "../assets/logotransparent.png";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setSuccess(true);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <Announcement />
        <Navbar />
        <main className="pt-16 relative min-h-screen bg-black">
          <Image
            src={ServicesBackground}
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-center space-y-8">
              <Image
                src={logotransparent}
                alt="LDK Autocare Logo"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h2 className="text-3xl font-bold text-white">Thank You!</h2>
              <p className="text-gray-300">Your message has been sent successfully.</p>
              <p className="text-gray-300">We'll get back to you soon.</p>
              <Link 
                href="/"
                className="z-100 inline-block px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  


  return (
    <>
      <Announcement />
      <Navbar />
      <main className="pt-16 relative min-h-screen bg-black">
        <Image
          src={ServicesBackground}
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information Section */}
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-white">Contact Us</h1>
              <p className="text-gray-300">Get in touch with us for any inquiries about our services.</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white">
                  <FaPhone className="w-5 h-5" />
                  <a href="tel:+447123456789">+44 7123 456789</a>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <FaEnvelope className="w-5 h-5" />
                  <a href="mailto:info@ldkautocare.com">info@ldkautocare.com</a>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>123 Auto Street, City, UK</span>
                </div>
              </div>
  
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-500">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-pink-500">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-red-500">
                  <FaTiktok className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-red-600">
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
  
            {/* Contact Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-lg backdrop-blur-sm">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full p-3 rounded border bg-white/10 border-white/20 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full p-3 rounded border bg-white/10 border-white/20 text-white"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="w-full p-3 rounded border bg-white/10 border-white/20 text-white"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={4}
                className="w-full p-3 rounded border bg-white/10 border-white/20 text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}