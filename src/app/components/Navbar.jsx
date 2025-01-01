"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-black text-white w-full fixed top-8 pt-2 z-40 border-b-[3px] border-[#85A5F5]">
      <div className="container mx-auto px-4">
    <div className="flex justify-between items-center h-20">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 p-2">
          <Link href="/">
            <Image
              src={logo}
              alt="LDK Autocare Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="hover:text-blue-500 transition duration-300 py-8">
          Home
        </Link>
        <Link href="/services" className="hover:text-blue-500 transition duration-300 py-8">
          Services
        </Link>
        <Link href="/contact" className="hover:text-blue-500 transition duration-300 py-8">
          Contact
        </Link>
        <Link href="/gallery" className="hover:text-blue-500 transition duration-300 py-8">
          Gallery
        </Link>
      </div>

            {/* Desktop Book Now Button */}
<div className="hidden md:block my-auto">
  <Link href="/book">
    <button className="px-8 py-3 
                bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)]
                rounded-lg text-white font-bold
                hover:scale-105 transition-all duration-300">
      Book Now
    </button>
  </Link>
</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } fixed inset-0 bg-black/95 z-40 transition-all duration-300 md:hidden`}
          style={{ top: '7rem' }}
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            <Link href="/" className="text-xl hover:text-blue-500 transition duration-300">
              Home
            </Link>
            <Link href="/services" className="text-xl hover:text-blue-500 transition duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-xl hover:text-blue-500 transition duration-300">
              Contact
            </Link>
            <Link href="/gallery" className="text-xl hover:text-blue-500 transition duration-300">
              Gallery
            </Link>
            
            {/* Mobile Book Now Button */}
            <Link href="/book">
              <button className="bg-blue-500 text-white px-8 py-3 my-8 rounded-md hover:bg-blue-600 transition duration-300 text-xl">
                Book Now
              </button>
            </Link>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-6">
              <Link 
                href="https://instagram.com/your-handle" 
                target="_blank"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <FaInstagram className="text-2xl" />
              </Link>
              <Link 
                href="https://tiktok.com/@your-handle" 
                target="_blank"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <FaTiktok className="text-2xl" />
              </Link>
              <Link 
                href="https://youtube.com/your-channel" 
                target="_blank"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <FaYoutube className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;