"use client";

import "./footer.css";

import InfiniteScroll from "@/components/ui/InfiniteScroll/InfiniteScroll";
import Date from "@/components/ui/Date/Date";

import Image from "next/image";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Footer() {

    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const section = sectionRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
            }
        });

        tl.from(".container-date > *", {
            delay: 0.5,
            y: 100,
            opacity: 0,
            rotateX: 20,
            transformPerspective: 800,
            transformOrigin: "top center",
            duration: 1,
            stagger: 0.15,
            ease: "power4.out"
        }, "-=0.6");


        tl.from("footer img", {
            scale: 0.7,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.2,
        }, "-=0.6");

        SplitText.create("footer h1", {
            type: "chars",
            onSplit(self) {
                tl.from(self.chars, {
                    y: 180,
                    opacity: 0,
                    stagger: 0.04,
                    duration: 1,
                    ease: "power4.out"
                }, "-=1");
            }
        });

        
        const move = (e: MouseEvent) => {
            const rect = section!.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            
            gsap.to("footer h1", {
                x: deltaX * 40,
                y: deltaY * 40,
                rotateX: deltaY * 10,
                rotateY: deltaX * 10,
                transformPerspective: 1000,
                transformOrigin: "center",
                ease: "power3.out",
                duration: 0.6
            });

            
            gsap.to("footer img", {
                x: deltaX * 25,
                y: deltaY * 25,
                rotateX: deltaY * 6,
                rotateY: deltaX * 6,
                ease: "power3.out",
                duration: 0.6
            });

            
           
        };

        const leave = () => {
            gsap.to(["footer h1", "footer img"], {
                x: 0,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        };

        section?.addEventListener("mousemove", move);
        section?.addEventListener("mouseleave", leave);

        return () => {
            section?.removeEventListener("mousemove", move);
            section?.removeEventListener("mouseleave", leave);
        };

    }, []);

    return (
        <section ref={sectionRef} className="section-footer">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/Background-footer.mp4" type="video/mp4" />
            </video>

            <InfiniteScroll />

            <div className="container-date">
                <Date number="01" title="fitup wellness expo" time="full-day event 01.05.2026 (hamida stadium)" />
                <Date number="02" title="mind balance retreat" time="full-day event 01.05.2026 (hamida stadium)" />
                <Date number="03" title="training workshop" time="full-day event 01.05.2026 (hamida stadium)" />
                <Date number="04" title="meal planning seminar" time="full-day event 01.05.2026 (hamida stadium)" />
            </div>

            <footer>
                <Image
                    src="/images/Logo-End.png"
                    alt="FitUp Academy Logo"
                    width={632}
                    height={482}
                />
                <h1>FitUp</h1>
            </footer>

        </section>
    );
}