"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesBackground from "../../assets/ServicesBackground.png";

export default function CeramicCoatingPage() {
  const [mainImage, setMainImage] = useState(0);
  const images = Array(6).fill(ServicesBackground);

  return (
    <main className="pt-32 bg-black min-h-screen">
      {/* Image Gallery Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-4">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src={images[mainImage]}
              alt="Ceramic Coating Service Main Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {images.slice(0, 5).map((image, index) => (
              <div
                key={index}
                onClick={() => setMainImage(index)}
                className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer
                  ${mainImage === index ? 'ring-2 ring-blue-500' : ''}
                  hover:opacity-80 transition-opacity shadow-lg`}
              >
                <Image
                  src={image}
                  alt={`Ceramic Coating Service Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="container mx-auto px-4 py-12 border-b-2 border-[#85A5F5]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Ceramic Coating Protection
          </h1>
          <Link href="/book">
            <button className="px-8 py-3 
              bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)]
              rounded-lg text-white font-bold
              hover:scale-105 transition-all duration-300">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-12">
        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-4xl">
          Our premium ceramic coating service provides unparalleled protection for your vehicle's paintwork. 
          This advanced technology creates a permanent bond with your car's paint, offering exceptional 
          durability, stunning gloss, and superior protection against environmental contaminants.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ceramic Process */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ceramic Coating Process
            </h2>
            <ul className="space-y-3">
              {[
                "Paint correction and preparation",
                "Surface decontamination",
                "Multi-stage paint correction",
                "IPA wipedown",
                "Ceramic coating application",
                "Multiple layer application",
                "Curing process monitoring"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <span className="mr-2 text-blue-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Protection Benefits */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Protection Benefits
            </h2>
            <ul className="space-y-3">
              {[
                "9H hardness protection",
                "UV damage prevention",
                "Chemical resistance",
                "Hydrophobic properties",
                "Self-cleaning effect",
                "Enhanced gloss finish",
                "5-year durability"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <span className="mr-2 text-blue-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}