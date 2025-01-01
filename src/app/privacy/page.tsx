"use client";
import React from 'react';
import Image from 'next/image';
import ServicesBackground from '../assets/ServicesBackground.png';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Announcement />
      <Navbar />
      <main className="pt-16 relative min-h-screen">
        <Image
          src={ServicesBackground}
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Privacy Policy
            </h1>
            
            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>LDK Autocare ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Name and contact information</li>
                  <li>Vehicle details</li>
                  <li>Service preferences and history</li>
                  <li>Payment information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Process payments</li>
                  <li>Communicate with you about services</li>
                  <li>Send promotional materials (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
                <p>We process your personal data under the following legal bases:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Contract fulfillment</li>
                  <li>Legal obligations</li>
                  <li>Legitimate interests</li>
                  <li>Consent (where applicable)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">5. Data Sharing and Security</h2>
                <p>We do not sell your personal information. We may share your data with:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Service providers who assist our operations</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p>Under UK GDPR, you have rights to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request data erasure</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">7. Contact Information</h2>
                <p>For privacy-related inquiries, contact us at:</p>
                <p className="mt-2">Email: enquiries@ldkautocare.com</p>
                <p>Phone: +44 7752 038819</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">8. Updates to This Policy</h2>
                <p>We may update this Privacy Policy periodically. Last updated: {new Date().toLocaleDateString()}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}