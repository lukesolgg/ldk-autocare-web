"use client";
import React from 'react';
import Image from 'next/image';
import ServicesBackground from '../assets/ServicesBackground.png';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
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
              Terms of Service
            </h1>
            
            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p>By accessing or using LDK Autocare's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">2. Service Description</h2>
                <p>LDK Autocare provides professional vehicle detailing services. We reserve the right to refuse service to anyone for any reason at any time.</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Services are provided by appointment only</li>
                  <li>Service times are estimates and may vary</li>
                  <li>We may use third-party products or services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Full payment is required upon service completion</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Deposits may be required for certain services</li>
                  <li>Additional charges may apply for excessive dirt or special treatments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">4. Cancellation Policy</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>24-hour notice required for cancellations</li>
                  <li>Late cancellations may incur a fee</li>
                  <li>No-shows will be charged a cancellation fee</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">5. Customer Responsibilities</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide accurate vehicle information</li>
                  <li>Remove personal belongings before service</li>
                  <li>Inform us of any existing damage</li>
                  <li>Ensure vehicle is accessible for service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">6. Liability</h2>
                <p>While we take utmost care, we are not liable for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Pre-existing damage or wear</li>
                  <li>Paint imperfections revealed after cleaning</li>
                  <li>Items left in vehicle</li>
                  <li>Damage caused by third-party products</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">7. Insurance</h2>
                <p>We maintain comprehensive business insurance. However, customers are advised to maintain their own vehicle insurance.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">8. Dispute Resolution</h2>
                <p>Any disputes will be resolved under UK law through:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Direct negotiation</li>
                  <li>Mediation if necessary</li>
                  <li>UK courts as final resort</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p>For questions about these terms, contact us at:</p>
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