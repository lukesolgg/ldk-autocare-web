"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesBackground from '../assets/ServicesBackground.png';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ResourcesPage() {
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
          <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-8 shadow-2xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Resources
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Our detailed resource section is currently under development.
              Check back soon for helpful guides and tips about car detailing!
            </p>
            <Link href="/">
              <button className="px-8 py-3 
                bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)]
                rounded-lg text-white font-bold
                hover:scale-105 transition-all duration-300">
                Return to Home
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}