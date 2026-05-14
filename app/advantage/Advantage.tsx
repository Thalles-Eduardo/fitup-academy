"use client";

import "./advantage.css";
import Image from "next/image";
import { useState, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Advantage() {
    const [index, setIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    const photos = [

        {
            className: "heart",
            src: "/images/Heart.png",
            alt: "Heart",
            scale: 2
        },
        {
            className: "liver",
            src: "/images/Liver.png",
            alt: "Liver",
            scale: 2
        },
        {
            className: "cells",
            src: "/images/Cells.png",
            alt: "Cells",
            scale: 2
        }

    ];

    const next = () => {
        setIndex((prev) => (prev + 1) % photos.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "bottom 20%",
                toggleActions: "reverse play reverse play",

            }
        });


        tl.from(sectionRef.current, {
            opacity: 0,
            filter: "blur(10px)",
            duration: 1,
            ease: "power2.out"
        });


        SplitText.create(".info h2, .container-left h1", {
            type: "chars",
            onSplit(self) {
                gsap.from(self.chars, {
                    y: 100,
                    opacity: 0,
                    rotationX: -90,
                    transformOrigin: "top center",
                    duration: 1,
                    stagger: 0.02,
                    ease: "power4.out"
                });
            }
        });


        SplitText.create(".info p, .paragraph-info", {
            type: "lines",
            onSplit(self) {
                gsap.from(self.lines, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out"
                });
            }
        });

        tl.from(".container-image", {
            y: 100,
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out"
        });


        tl.from(".card-left, .card-right", {
            y: 80,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.6");


        tl.from(".container-calories", {
            y: 80,
            opacity: 0,
            duration: 1
        });

        tl.fromTo(".progress-bar",
            { width: "0%" },
            {
                width: "70%",
                duration: 1.5,
                ease: "power4.out"
            }
        );

        tl.from(".img-calories", {
            x: 120,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power3.out"
        }, "-=1");

    }, []);

    useGSAP(() => {
        if (!imageRef.current) return;

        const tl = gsap.timeline();

        tl.to(imageRef.current, {
            scale: 0.6,
            opacity: 0,
            y: -20,
            duration: 0.25,
            ease: "power2.in",
        }).fromTo(
            imageRef.current,
            {
                scale: 0.8,
                opacity: 0,
                y: 30,
            },
            {
                scale: photos[index].scale,
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            }
        );
    }, [index]);

    return (
        <section ref={sectionRef} className="section-advantage">
            <div className="container">

                <div className="advante-container">
                    <Image
                        className="legs"
                        src="/images/Legs.png"
                        width={602}
                        height={622}
                        alt="Legs"
                    />

                    <div className="info">
                        <div className="info-work">
                            <h2>WHY FITUP WORKS</h2>

                            <p>
                                we go beyond fitness by empowering you with insights and guidance to
                                boost your blood cell production, enhance circulation, and improve heart
                                health
                            </p>
                        </div>


                        <div className="container-galeria">
                            <a
                                className={`arrow arrow-left ${clicked ? "active" : ""}`}
                                onClick={() => {
                                    setClicked(true);
                                    prev();
                                    setTimeout(() => setClicked(false), 400);
                                }}
                            >
                                <span className="arrow-chevron primera"></span>
                                <span className="arrow-chevron segunda"></span>
                            </a>

                            <div className={`container-image ${photos[index].className}`}>
                                <Image
                                    ref={imageRef}
                                    className="image"
                                    src={photos[index].src}
                                    alt={photos[index].alt}
                                    width={93}
                                    height={146}
                                />
                            </div>

                            <a
                                className={`arrow arrow-right ${clicked ? "active" : ""}`}
                                onClick={() => {
                                    setClicked(true);
                                    next();
                                    setTimeout(() => setClicked(false), 400);
                                }}
                            >
                                <span className="arrow-chevron primera"></span>
                                <span className="arrow-chevron segunda"></span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* seção dieta */}
                <div className="dieta">
                    <div className="container-left">
                        <h1>
                            Fit your body with balanced <span>meals</span>
                        </h1>

                        <p className="paragraph-info">
                            With options for every dietary preference - including vegan,
                            non-vegan, and allergy-friendly choices - our recipes are
                            designed to help you enjoy delicious, nutritious meals while
                            staying on track with your goals
                        </p>

                        <div className="card-container">
                            <div className="card-left">
                                <div className="no-vegan">
                                    <div className="icon-image">
                                        <Image
                                            className="ham"
                                            src="/images/Ham.png"
                                            alt="Ham"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p>Non Vegan</p>
                                </div>

                                <button className="btn-meat">
                                    Start Journey
                                    <Image
                                        src="/images/Right-Arrow.png"
                                        alt="Right Arrow"
                                        width={24}
                                        height={22}
                                    />
                                    <span className="meat meat-1"></span>
                                    <span className="meat meat-2"></span>
                                    <span className="meat meat-3"></span>
                                    <span className="meat meat-4"></span>
                                </button>
                            </div>

                            <div className="card-right">
                                <div className="vegan">
                                    <div className="icon-image">
                                        <Image
                                            src="/images/Vegan.png"
                                            alt="Vegan"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <p>Vegan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-right">
                        <div className="container-calories">
                            <div className="title-calories">
                                <h4>Calories</h4>
                                <p>2091/<span>kcal</span></p>
                            </div>

                            <div className="progress-calories">
                                <div className="progress-bar"></div>
                            </div>

                            <p className="sub-title">
                                Stay on track with meal guidance
                            </p>
                        </div>

                        <Image
                            className="img-calories"
                            src="/images/Food.png"
                            width={333}
                            height={499}
                            alt="Food"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}