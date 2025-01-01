"use client";
import React, { useState } from "react";
import Image from "next/image";
import ServicesBackground from "../assets/ServicesBackground.png";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// i20 Images
import i20image1 from "../assets/servicesAssets/i20/i20image1.png";
import i20image2 from "../assets/servicesAssets/i20/i20image2.png";
import i20image3 from "../assets/servicesAssets/i20/i20image3.png";
import i20image4 from "../assets/servicesAssets/i20/i20image4.png";
import i20snowfoam from "../assets/servicesAssets/i20/i20snowfoam1.png";

// Golf Images
import golf1 from "../assets/servicesAssets/golf/golf1.webp";
import golf2 from "../assets/servicesAssets/golf/golf2.webp";
import golf3 from "../assets/servicesAssets/golf/golf3.webp";
import golf4 from "../assets/servicesAssets/golf/golf4.webp";
import golf5 from "../assets/servicesAssets/golf/golf5.webp";

// MX5 Images
import mx51 from "../assets/servicesAssets/mx5/mx51.png";
import mx52 from "../assets/servicesAssets/mx5/mx52.png";
import mx53 from "../assets/servicesAssets/mx5/mx53.png";
import mx54 from "../assets/servicesAssets/mx5/mx54.png";
import mx55 from "../assets/servicesAssets/mx5/mx54.png";

export default function GalleryPage() {
  const projects = [
    {
      title: "2024 Hyundai i20 N-Line Edition",
      service: "New Car Protection",
      description: "A complete transformation of this i20 N-Line, bringing back the deep gloss and shine to the paintwork while removing any surface imperfections.",
      workCompleted: [
        "Full Vehicle Decontamination",
        "Two Stage Paint Correction",
        "Premium Wax Protection",
        "Interior Deep Clean",
        "Wheel & Tire Detail"
      ],
      images: [i20image1, i20image2, i20image3, i20image4, i20snowfoam]
    },
    {
      title: "2013 Volkswagen Golf 1.6 TDI BlueMotion",
      service: "Ceramic Coating",
      description: "Protection and perfection combined. This Golf received our premium ceramic coating package for long-lasting results.",
      workCompleted: [
        "Paint Correction",
        "Ceramic Coating Application",
        "Interior Protection",
        "Glass Treatment",
        "Wheel Coating"
      ],
      images: [golf1, golf2, golf3, golf4, golf5]
    },
    {
      title: "1991 Mazda MX-5",
      service: "Full Paint Correction",
      description: "Restoring this performance vehicle to better than showroom condition with our comprehensive paint correction service.",
      workCompleted: [
        "Multi-Stage Paint Correction",
        "Swirl Removal",
        "Paint Enhancement",
        "Surface Protection",
        "Interior Detailing"
      ],
      images: [mx51, mx52, mx53, mx54, mx55]
    }
  ];

  const ProjectSection = ({ project, index }: { project: any; index: number }) => {
    const [mainImage, setMainImage] = useState(0);
    const isEven = index % 2 === 0;

    return (
      <section className="min-h-screen relative flex items-center">
        <Image
          src={ServicesBackground}
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className={`relative z-10 container mx-auto px-4 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}>
          {/* Images Side */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src={project.images[mainImage]}
                alt={`${project.title} main image`}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {project.images.slice(0, 5).map((image: any, idx: number) => (
                <div
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer
                    ${mainImage === idx ? 'ring-2 ring-blue-500' : ''}
                    hover:opacity-80 transition-opacity shadow-lg`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <h3 className="text-xl md:text-2xl text-blue-400 mb-6">
              {project.service}
            </h3>
            <p className="text-white/80 text-lg mb-8">
              {project.description}
            </p>
            <div className="space-y-3 mb-8">
              {project.workCompleted.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center text-white">
                  <span className="mr-2 text-blue-400">•</span>
                  {item}
                </div>
              ))}
            </div>
            <button className="w-full md:w-auto px-8 py-3 
              bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)]
              rounded-lg text-white font-bold
              hover:scale-105 transition-all duration-300
              text-center self-start">
              Book Your Car In Today
            </button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <main className="">
        {projects.map((project, index) => (
          <ProjectSection key={index} project={project} index={index} />
        ))}
      </main>
      <Footer />
    </>
  );
}