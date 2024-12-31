"use client";
import React, { useState } from "react";
import Image from "next/image";
import ServicesBackground from "../assets/ServicesBackground.png";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      images: Array(6).fill(ServicesBackground)
    },
    {
      title: "BMW M4 2023",
      service: "Ceramic Coating",
      description: "Protection and perfection combined. This M4 received our premium ceramic coating package for long-lasting results.",
      workCompleted: [
        "Paint Correction",
        "Ceramic Coating Application",
        "Interior Protection",
        "Glass Treatment",
        "Wheel Coating"
      ],
      images: Array(6).fill(ServicesBackground)
    },
    {
      title: "Mercedes C63 AMG 2021",
      service: "Full Paint Correction",
      description: "Restoring this performance vehicle to better than showroom condition with our comprehensive paint correction service.",
      workCompleted: [
        "Multi-Stage Paint Correction",
        "Swirl Removal",
        "Paint Enhancement",
        "Surface Protection",
        "Interior Detailing"
      ],
      images: Array(6).fill(ServicesBackground)
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
      <main className="pt-16">
        {projects.map((project, index) => (
          <ProjectSection key={index} project={project} index={index} />
        ))}
      </main>
      <Footer />
    </>
  );
}