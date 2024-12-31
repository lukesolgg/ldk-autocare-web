"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesBackground from "../../assets/ServicesBackground.png";

export default function ClayAndSealPage() {
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
              alt="Clay and Seal Service Main Image"
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
                  alt={`Clay and Seal Service Image ${index + 1}`}
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
            Clay & Seal Treatment
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
          Our Clay & Seal treatment removes embedded contaminants and restores your paint's smooth finish. 
          This specialized service includes clay bar decontamination followed by a protective sealant, 
          providing lasting protection and an incredible shine.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Paint Correction Services */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Paint Correction Process
            </h2>
            <ul className="space-y-3">
              {[
                "Full paint decontamination",
                "Clay bar treatment",
                "Paint correction stage",
                "Swirl mark removal",
                "Paint sealant application",
                "Paint depth readings",
                "Final inspection and quality check"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <span className="mr-2 text-blue-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <ul className="space-y-3">
              {[
                "Wheels deep cleaned",
                "Glass decontamination",
                "Trim restoration",
                "Paint protection sealant",
                "Door jamb detail",
                "Wheel arch cleaning",
                "Tire dressing"
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