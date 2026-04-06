"use client";

import "./advantage.css";
import Image from "next/image";
import { useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Advantage() {
    const [index, setIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const sectionRef = useRef(null);

    const photos = [
        {
            className: "liver",
            src: "/images/Liver.png",
            alt: "Liver"
        },
        {
            className: "heart",
            src: "/images/Heart.png",
            alt: "Heart"
        },
        {
            className: "cells",
            src: "/images/Cells.png",
            alt: "Cells"
        }
    ]

    const next = () => {
        setIndex((prev) => (prev + 1) % photos.length)
    }

    const prev = () => {
        setIndex((prev) => (prev - 1 + photos.length) % photos.length)
    }


    useGSAP(() => {

        const tl = gsap.timeline({
            delay: 2.0,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
            }
        });

        // título
        SplitText.create(".info h2, .container-left h1", {
            type: "chars",
            onSplit(self) {
                tl.from(self.chars, {
                    y: 80,
                    opacity: 0,
                    autoAlpha: 0,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: "power3.out",
                });
            },
        });

        // parágrafos
        SplitText.create(".info p, .paragraph-info", {
            type: "words",
            onSplit(self) {
                tl.from(self.words, {
                    y: 20,
                    opacity: 0,
                    autoAlpha: 0,
                    duration: 0.6,
                    stagger: 0.06,
                    ease: "power2.out",
                });
            },
        });

        // imagens da galeria
        tl.from(".container-image", {
            y: 60,
            opacity: 0,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        })

            // cards
            .from(".card-left, .card-right", {
                y: 50,
                opacity: 0,
                autoAlpha: 0,
                duration: 0.7,
                stagger: 0.25,
                ease: "power3.out",
            })

            // card calorias
            .from(".container-calories", {
                y: 60,
                opacity: 0,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power3.out",
            })

            // imagem comida
            .from(".img-calories", {
                x: 80,
                opacity: 0,
                autoAlpha: 0,
                duration: 1,
                ease: "power3.out",
            });

    }, []);

    return (
        <section ref={sectionRef} className="section-advantage">

            <div className="advante-container">

                <Image
                    className="legs"
                    src="/images/Legs.png"
                    width={602}
                    height={622}
                    alt="Legs"
                />

                <div className="info">

                    <h2>WHY FITUP WORKS</h2>

                    <p>
                        we go beyond fitness by empowering you with insights and guidance to
                        boost your blood cell production, enhance circulation, and improve heart
                        health
                    </p>

                    <div className="container-galeria">

                        <a className={`arrow arrow-left ${clicked ? "active" : ""}`}
                            onClick={() => {
                                setClicked(true);
                                prev();

                                setTimeout(() => setClicked(false), 400);
                            }}>
                            <Image className="image-arrow" src="/images/Arrow.png" alt="Left Arrow" width={24} height={24}></Image>
                        </a>

                        <div className={`container-image ${photos[index].className}`}>

                            <div className="stars"></div>
                            <div className="shooting-star"></div>
                            <div className="shooting-star"></div>
                            <div className="shooting-star"></div>
                            <div className="shooting-star"></div>
                            <div className="shooting-star"></div>


                            <Image
                                className="image"
                                src={photos[index].src}
                                alt={photos[index].alt}
                                width={93}
                                height={146}
                            />
                        </div>

                        <a className={`arrow arrow-right ${clicked ? "active" : ""}`}
                            onClick={() => {
                                setClicked(true);
                                next();

                                setTimeout(() => setClicked(false), 400);
                            }}>
                            <Image className="image-arrow" src="/images/Arrow.png" alt="Left Arrow" width={24} height={24}></Image>

                        </a>

                    </div>

                </div>
            </div>


            {/* seção dieta */}

        <div>
            
        </div>
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

                        <p className="sub-title">Stay on track with meal guidance</p>
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

        </section>
    );
}