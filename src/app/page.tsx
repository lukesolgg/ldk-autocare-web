import React from "react";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import BookNow from "./components/BookNow";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Hero />
      <BookNow />

      <Services />

      <Reviews />
      <Footer />
    </div>
  );
}
