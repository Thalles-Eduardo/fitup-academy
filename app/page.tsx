"use client"

import Advantage from "./advantage/Advantage";
import Hero from "./hero/Hero";
import Yoga from "./yoga/Yoga";
import Footer from "./footer/Footer";


export default function Home() {

  return (
    <main>
      <div className="hero">
        <Hero />
      </div>
      <div className="advantage">
        <Advantage />
      </div>
      <div className="yoga">
        <Yoga />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
}
