"use client"

import Advantage from "./advantage/Advantage";
import Hero from "./hero/Hero";
import Yoga from "./yoga/Yoga";


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
    </main>
  );
}
