"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Advantage from "./advantage/Advantage";
import Hero from "./hero/Hero";
import Yoga from "./yoga/Yoga";
import Footer from "./footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const advantageRef = useRef<HTMLDivElement>(null);
  const yogaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Estados iniciais (fora da tela)
      gsap.set(advantageRef.current, { xPercent: -100 });
      gsap.set(yogaRef.current, { xPercent: 100 });
      gsap.set(footerRef.current, { yPercent: 100 });

      // 🔥 Timeline principal com scrub (o segredo aqui)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-container",
          start: "top top",
          end: "200% top", // controla o tempo total da animação
          scrub: 1.5, // suavidade absurda aqui
          pin: ".sticky-viewport", // mantém fixo enquanto anima
          anticipatePin: 1,
        }
      });

      
      tl.to(advantageRef.current, {
        xPercent: 0,
        ease: "power3.out",
        duration: 1,
      }, 0)

      .to(yogaRef.current, {
        xPercent: 0,
        ease: "power3.out",
        duration: 1,
      }, 1)

      .to(footerRef.current, {
        yPercent: 0,
        ease: "power3.out",
        duration: 1,
      }, 2); 

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="scroll-container">
      <div className="sticky-viewport">

        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/Background.mp4" type="video/mp4" />
        </video>

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