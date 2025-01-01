"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import i20image1 from "../../assets/servicesAssets/i20/i20image1.png";
import i20image2 from "../../assets/servicesAssets/i20/i20image2.png";
import i20image3 from "../../assets/servicesAssets/i20/i20image3.png";
import i20image4 from "../../assets/servicesAssets/i20/i20image4.png";
import i20snowfoam from "../../assets/servicesAssets/i20/i20snowfoam1.png";

export default function NewCarProtectionPage() {
  const [mainImage, setMainImage] = useState(0);
  const images = [i20image1, i20image2, i20image3, i20image4, i20snowfoam];

  return (
    <main className="pt-32 bg-black min-h-screen">
  {/* Image Gallery Section */}
  <section className="container mx-auto px-4 py-12">
    <div className="space-y-4">
    <div className="relative w-full rounded-lg overflow-hidden max-w-5xl mx-auto" style={{ height: '400px' }}>
  <Image
    src={images[mainImage]}
    alt="New Car Protection Service Main Image"
    fill
    quality={100}
    priority
    sizes="(max-width: 1024px) 100vw, 1024px"
    className="object-contain"
  />
</div>

      <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setMainImage(index)}
            className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer
              ${mainImage === index ? 'ring-2 ring-blue-500' : ''}
              hover:opacity-80 transition-opacity shadow-lg`}
          >
            <Image
  src={image}
  alt={`New Car Protection Service Image ${index + 1}`}
  fill
  quality={75}
  sizes="(max-width: 768px) 20vw, 200px"
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
            New Car Protection Package
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
          Protect your investment from day one with our comprehensive new car protection package. 
    We apply the latest ceramic coating technology and paint protection solutions to ensure 
    your vehicle maintains its showroom finish for years to come.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Exterior Services */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Exterior Services
              </h2>
              <ul className="space-y-3">
                {[
                  "Paint protection film application",
                "Ceramic coating protection",
                "Glass treatment and coating",
                "Wheel face ceramic coating",
                "Caliper protection",
                "Exterior trim protection"
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
                  "Leather protection coating",
                "Fabric protection treatment",
                "Dashboard UV protection",
                "Interior trim coating",
                "Carpet protection",
                "Documentation and warranty"
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