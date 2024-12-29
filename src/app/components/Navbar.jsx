"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full fixed top-8 z-40 border-b-2 border-blue-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="LDK Autocare Logo"
                width={70}
                height={70}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-500 transition duration-300">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-500 transition duration-300">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition duration-300">
              Contact
            </Link>
            <Link href="/gallery" className="hover:text-blue-500 transition duration-300">
              Gallery
            </Link>
          </div>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <Link href="/book">
              <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-black w-full absolute left-0 top-20 border-t border-blue-500 transition-all duration-300`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="hover:text-blue-500 transition duration-300">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-500 transition duration-300">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition duration-300">
              Contact
            </Link>
            <Link href="/gallery" className="hover:text-blue-500 transition duration-300">
              Gallery
            </Link>
            
            {/* Mobile Book Now Button */}
            <Link href="/book">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-[200px]">
                Book Now
              </button>
            </Link>

            {/* Social Media Icons */}
            <div className="flex space-x-6 pt-4">
              <Link href="https://instagram.com" target="_blank" className="hover:text-blue-500">
                <InstagramIcon />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500">
                <FacebookIcon />
              </Link>
              {/* Add TikTok icon once you have the correct import */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;