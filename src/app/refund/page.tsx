"use client";
import React from 'react';
import Image from 'next/image';
import ServicesBackground from '../assets/ServicesBackground.png';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RefundPage() {
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
              Refund Policy
            </h1>
            
            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">1. Service Satisfaction Guarantee</h2>
                <p>At LDK Autocare, we strive for excellence in every service. If you're not completely satisfied with our work, please inform us immediately so we can address your concerns.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">2. Refund Conditions</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Services must be inspected immediately upon completion</li>
                  <li>Any issues must be reported within 24 hours of service completion</li>
                  <li>Refunds are assessed on a case-by-case basis</li>
                  <li>Partial refunds may be offered for specific service components</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">3. Cancellation Policy</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Full refund for cancellations with 24+ hours notice</li>
                  <li>50% refund for cancellations with 12-24 hours notice</li>
                  <li>No refund for cancellations with less than 12 hours notice</li>
                  <li>Deposits are non-refundable for specialist services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">4. Refund Process</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Submit refund request in writing</li>
                  <li>Include service details and reason for refund</li>
                  <li>Provide photo evidence if applicable</li>
                  <li>Allow up to 14 days for refund processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">5. Exceptions</h2>
                <p>Refunds are not available for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Pre-existing damage not reported before service</li>
                  <li>Environmental factors beyond our control</li>
                  <li>Customer-supplied products or materials</li>
                  <li>Services completed to agreed specifications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">6. Statutory Rights</h2>
                <p>This policy does not affect your statutory rights under UK consumer law. You are entitled to services carried out with reasonable care and skill.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">7. Contact Information</h2>
                <p>For refund requests or queries, contact us at:</p>
                <p className="mt-2">Email: enquiries@ldkautocare.com</p>
                <p>Phone: +44 7752 038819</p>
              </section>

              <p className="mt-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}