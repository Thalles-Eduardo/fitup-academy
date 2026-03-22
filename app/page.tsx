"use client"

import Advantage from "./advantage/Advantage";
import Hero from "./hero/Hero";


export default function Home() {

  return (
    <main>
      <div className="hero">
        <Hero />
      </div>
      <div className="advantage">
        <Advantage />
      </div>
    </main>
  );
}
