"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesBackground from "../../assets/ServicesBackground.png";
import Footer from "../../components/Footer";

export default function MaintenancePage() {
  const [mainImage, setMainImage] = useState(0);
  const images = Array(6).fill(ServicesBackground);

  return (
    <>
      <main className="pt-16 bg-black min-h-screen">
        {/* Image Gallery Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <Image
                src={images[mainImage]}
                alt="Maintenance Service Main Image"
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail Grid */}
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
                    alt={`Maintenance Service Image ${index + 1}`}
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
              Maintenance Detail
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
            Our comprehensive maintenance service is designed to keep your vehicle in pristine condition. 
            Perfect for regular upkeep and maintaining that showroom finish, this service covers both exterior 
            and interior detailing to ensure your car looks its best inside and out.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Exterior Services */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Exterior Services
              </h2>
              <ul className="space-y-3">
                {[
                  "Full exterior wash and decontamination",
                  "Wheels deep cleaned and protected",
                  "Glass cleaned and protected",
                  "Paintwork polished and protected",
                  "Tire dressing applied",
                  "Door shuts cleaned and dressed"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/80">
                    <span className="mr-2 text-blue-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interior Services */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Interior Services
              </h2>
              <ul className="space-y-3">
                {[
                  "Full interior vacuum",
                  "Leather/upholstery cleaned",
                  "Dashboard and plastics cleaned",
                  "Air vents detailed",
                  "Windows cleaned inside",
                  "Boot/trunk cleaned"
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
    </>
  );
}