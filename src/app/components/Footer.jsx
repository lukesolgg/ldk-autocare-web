import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white/80 border-t-[3px] border-[#85A5F5]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
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
          <div className="mb-6 md:mb-0">
            <h3 className="text-blue-500 font-bold mb-2 md:mb-4 text-lg md:text-xl">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Blog</Link></li>
              <li><Link href="/resources" className="hover:text-blue-500 transition duration-300 text-sm md:text-base">Useful Resources</Link></li>
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-blue-500 font-bold mb-2 md:mb-4 text-lg md:text-xl">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="https://wa.me/447752038819" target="_blank" rel="noopener noreferrer" 
                className="text-2xl hover:text-green-500 transition duration-300">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/ldkautocare" target="_blank" rel="noopener noreferrer" 
                className="text-2xl hover:text-pink-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/ldkautocare" target="_blank" rel="noopener noreferrer" 
                className="text-2xl hover:text-blue-500 transition duration-300">
                <FaFacebook />
              </a>
              <a href="https://tiktok.com/@ldkautocare" target="_blank" rel="noopener noreferrer" 
                className="text-2xl hover:text-gray-500 transition duration-300">
                <FaTiktok />
              </a>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <span className="text-blue-500">Email:</span> enquiries@ldkautocare.com
              </p>
              <p>
                <span className="text-blue-500">Location:</span> Belfast, Northern Ireland
              </p>
              <p>
                <span className="text-blue-500">Hours:</span> Mon - Sat: 8am - 8pm
              </p>
            </div>
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