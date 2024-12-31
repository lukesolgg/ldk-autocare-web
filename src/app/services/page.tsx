import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesBackground from "../assets/ServicesBackground.png";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
    const services = [
        {
          title: "MAINTENANCE DETAIL",
          slug: "maintenance",
          description: "Our comprehensive maintenance valet service keeps your vehicle in pristine condition. Perfect for regular upkeep and maintaining that showroom finish.",
          includes: [
            "Full exterior wash and decontamination",
            "Interior deep clean and sanitization",
            "Wheel and tire detail",
            "Window cleaning inside and out",
            "Interior vacuum and dust removal"
          ],
          price: "100"
        },
        {
          title: "FULL VALET",
          slug: "full-valet",
          description: "A complete transformation for your vehicle, inside and out. Our full valet service restores your car to its former glory.",
          includes: [
            "Complete exterior detail",
            "Interior deep cleaning",
            "Leather treatment",
            "Paint correction",
            "Engine bay cleaning"
          ],
          price: "150"
        },
        {
          title: "CLAY AND SEAL",
          slug: "clay-seal",
          description: "Professional paint correction and protection service. Removes contaminants and adds a protective layer to your vehicle's paintwork.",
          includes: [
            "Clay bar treatment",
            "Paint decontamination",
            "Sealant application",
            "Swirl mark removal",
            "Paint enhancement"
          ],
          price: "200"
        },
        {
          title: "CERAMIC COATING",
          slug: "ceramic-coating",
          description: "Premium long-lasting protection for your vehicle. Our ceramic coating provides exceptional durability and shine.",
          includes: [
            "Paint correction",
            "Surface preparation",
            "Ceramic coating application",
            "Curing process",
            "Final inspection"
          ],
          price: "500"
        },
        {
          title: "NEW CAR PROTECTION",
          slug: "new-car-protection",
          description: "Preserve your new car's finish from day one. Complete protection package for new vehicles.",
          includes: [
            "Paint protection film",
            "Ceramic coating",
            "Interior protection",
            "Wheel protection",
            "Documentation"
          ],
          price: "750"
        }
      ];
  return (
    <>
      
      <main className="pt-16">
        {services.map((service, index) => (
          <section 
            key={index}
            className="relative min-h-screen flex items-center py-20"
          >
            {/* Background Image */}
            <Image
              src={ServicesBackground}
              alt="Background"
              fill
              className="object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            <div className={`relative z-10 container mx-auto px-4 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}>
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={ServicesBackground}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {service.title}
                </h2>
                <p className="text-white/80 text-lg md:text-xl mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-center text-white text-lg">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Prices from £{service.price}
                </p>
                <Link href={`/services/${service.slug}`}>
    <button className="w-full md:w-auto px-8 py-3 
      bg-[linear-gradient(90deg,#85A5F5,#1877F2,#4AF9F9)]
      rounded-lg text-white font-bold
      hover:scale-105 transition-all duration-300">
      Learn More
    </button>
  </Link>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}