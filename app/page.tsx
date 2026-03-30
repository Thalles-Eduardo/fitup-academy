"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Advantage from "./advantage/Advantage";
import Hero from "./hero/Hero";
import Yoga from "./yoga/Yoga";
import Footer from "./footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const advantageRef  = useRef<HTMLDivElement>(null);
  const yogaRef       = useRef<HTMLDivElement>(null);
  const footerRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Advantage — entra da esquerda
      gsap.set(advantageRef.current, { xPercent: -100, zIndex: 2 });
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "25% top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(advantageRef.current, { xPercent: -100 + self.progress * 100 });
        },
      });

      // Yoga — entra da direita
      gsap.set(yogaRef.current, { xPercent: 100, zIndex: 3 });
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "25% top",
        end: "50% top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(yogaRef.current, { xPercent: 100 - self.progress * 100 });
        },
      });

      // Footer — entra de baixo
      gsap.set(footerRef.current, { yPercent: 100, zIndex: 4 });
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "50% top",
        end: "75% top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(footerRef.current, { yPercent: 100 - self.progress * 100 });
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="scroll-container">
      <div className="sticky-viewport">

        <div className="panel panel-hero">
          <Hero />
        </div>

        <div ref={advantageRef} className="panel panel-advantage">
          <Advantage />
        </div>

        <div ref={yogaRef} className="panel panel-yoga">
          <Yoga />
        </div>

        <div ref={footerRef} className="panel panel-footer">
          <Footer />
        </div>

      </div>
    </main>
  );
}