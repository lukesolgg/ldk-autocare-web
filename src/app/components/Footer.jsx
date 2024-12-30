import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-blue-500 min-h-[50vh] flex flex-col justify-between py-6 md:py-8">
      {/* Get in Touch Section */}
      <div className="container mx-auto px-4 py-4 md:py-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Get in Touch</h2>
        <Link 
          href="https://wa.me/your-number-here" 
          target="_blank"
          className="inline-flex items-center gap-2 text-white hover:text-blue-500 transition duration-300 text-sm md:text-base"
        >
          <FaWhatsapp className="text-xl md:text-2xl" />
          <span>Send us a message on WhatsApp</span>
        </Link>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 md:gap-6 mt-3 md:mt-4">
          <Link 
            href="https://instagram.com/your-handle" 
            target="_blank"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaInstagram className="text-xl md:text-2xl" />
          </Link>
          <Link 
            href="https://tiktok.com/@your-handle" 
            target="_blank"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaTiktok className="text-xl md:text-2xl" />
          </Link>
          <Link 
            href="https://youtube.com/your-channel" 
            target="_blank"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaYoutube className="text-xl md:text-2xl" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
          {/* Company Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-blue-500 font-bold mb-2 md:mb-4 text-lg md:text-xl">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/book" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">How to Book</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Services</Link></li>
              <li><Link href="/reviews" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Reviews</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-blue-500 font-bold mb-2 md:mb-4 text-lg md:text-xl">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Other Column */}
          <div>
            <h3 className="text-blue-500 font-bold mb-2 md:mb-4 text-lg md:text-xl">Other</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Contact Us</Link></li>
              <li><Link href="/guide" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Maintenance Guide</Link></li>
              <li><Link href="/resources" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Useful Resources</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-4 md:mt-8">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} LDK Autocare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;