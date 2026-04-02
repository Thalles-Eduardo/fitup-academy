"use client";

import Image from "next/image";
import "./hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, Flip } from "gsap/all";
import { useState } from "react";

import WeeklyOverview from "@/components/ui/WeeklyOverview";
import { Separator } from "@/components/ui/Separator";


gsap.registerPlugin(SplitText, Flip);

export default function Hero() {

    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {

        SplitText.create(".left-hero h2", {
            type: "chars",
            onSplit(self) {
                gsap.from(self.chars, {
                    y: 80,
                    opacity: 0,
                    autoAlpha: 0,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: "power3.out",
                })
            },
        });

        SplitText.create(".paragraph", {
            type: "words",
            onSplit(self) {
                gsap.from(self.words, {
                    y: 20,
                    opacity: 0,
                    autoAlpha: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power2.out",
                })
            },
        });


        SplitText.create(".actions-hero > *", {
            type: "words",
            onSplit(self) {
                gsap.from(self.words, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.2,
                    delay: 1,
                    duration: 0.6,
                    ease: "power2.out"
                })
            },
        });

        SplitText.create(".stat-item span", {
            type: "words",
            onSplit(self) {
                gsap.from(self.words, {
                    innerText: 0,
                    duration: 2,
                    snap: { innerText: 1 },
                    stagger: 0.3,
                    ease: "power1.out"
                })
            },
        });


        gsap.from(".star", {
            y: -20,
            yoyo: true,
            repeat: -1,
            duration: 1.5,
            ease: "sine.inOut",

        })


        // time line 
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".right-hero .persona", {
            y: 60,
            opacity: 0,
            autoAlpha: 0,
            duration: 1,
            delay: 1,
        })
            .from(".right-hero .container-members", {
                x: 30,
                opacity: 0,
                autoAlpha: 0,
                duration: 0.7,

            }, "<0.3")

            .from(".right-hero .star-right", {
                rotation: -45,
                opacity: 0,
                autoAlpha: 0,
                duration: 0.6,
                ease: "back.out(1.4)",
            }, "<0.3");



    }, []);

    return (
        <section>
            <nav>
                <button
                    className={`menu ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg viewBox="0 0 64 48">
                        <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                        <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                        <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
                    </svg>
                </button>
                <div className="left-container">
                    <Image
                        src="/images/Logo.png"
                        alt="FitUp Academy Logo"
                        width={70}
                        height={56}
                    />
                    <h1>FitUp</h1>
                </div>


                <div className="mid-container">
                    <ul>
                        <li><a href="#about">HOW IT WORKS</a></li>
                        <li><a href="#courses">ABOUT</a></li>
                        <li><a href="#contact">START</a></li>
                        <li><a href="#contact">FAQ</a></li>
                        <li><a href="#contact">EVENTS</a></li>
                    </ul>
                </div>

                <div className="right-container">
                    <button className="contact-btn">
                        <Image
                            src="/images/Contact.png"
                            alt="Contact Icon"
                            width={32}
                            height={32}
                        />
                        CONTACT US
                    </button>
                </div>
            </nav>


            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <a href="#about">HOW IT WORKS</a>
                <a href="#courses">ABOUT</a>
                <a href="#contact">START</a>
                <a href="#contact">FAQ</a>
                <a href="#contact">EVENTS</a>

                <button className="contact-btn mobile">
                    CONTACT US
                </button>
            </div>


            <div className="container-hero">
                <div className="left-hero">
                    <h2> Prefect Fitness Path With <span>fitup</span></h2>
                    <p className="paragraph">Unlock your full potential with tailored training programs, all crafted to help you achieve your fitness goals</p>

                    <div className="actions-hero">
                        <button className="get-started-btn">Get Started</button>
                        <Separator orientation="vertical" />
                        <div className="community">
                            <p>Join Our Community</p>
                            <div className="social-community">
                                <Image
                                    src="/images/Discord.png"
                                    alt="Community Icon"
                                    width={18}
                                    height={18}
                                />
                                <Image
                                    src="/images/Facebook.png"
                                    alt="Community Icon"
                                    width={18}
                                    height={18}
                                />
                                <Image
                                    src="/images/Telegram.png"
                                    alt="Community Icon"
                                    width={18}
                                    height={18}
                                />
                                <Image
                                    src="/images/Twitter.png"
                                    alt="Community Icon"
                                    width={18}
                                    height={18}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="stats">
                        <div className="stat-item">
                            <span>500k+</span>
                            <p>Personalized training programs delivered</p>
                        </div>

                        <div className="stat-item">
                            <span>10k+</span>
                            <p>Active members achieving results</p>
                        </div>
                    </div>
                </div>



                <div className="right-hero">
                    <div className="container-members">
                        <div className="members-info">
                            <p>Members Joined</p>
                            <div className="members">
                                <div className="member">
                                    <Image
                                        className="image-member"
                                        src="/images/Client-1.png"
                                        alt="Client"
                                        width={51}
                                        height={34}
                                    />
                                    <Image
                                        className="image-member"
                                        src="/images/Client-2.png"
                                        alt="Client"
                                        width={51}
                                        height={34}
                                    />
                                    <Image
                                        className="image-member"
                                        src="/images/Client-3.png"
                                        alt="Client"
                                        width={51}
                                        height={34}
                                    />
                                    <Image
                                        className="image-member"
                                        src="/images/Client-4.png"
                                        alt="Client"
                                        width={51}
                                        height={34}
                                    />
                                </div>
                                <p>12k more</p>
                            </div>
                        </div>
                    </div>

                    <Image
                        className="persona"
                        src="/images/Person.png"
                        alt="Hero Image"
                        width={600}
                        height={600}
                    />

                    <WeeklyOverview />

                    <Image
                        className="star-right"
                        src="/images/Star.png"
                        alt="Background Image"
                        width={96}
                        height={96}
                    />

                </div>


            </div>


            <Image
                className="star"
                src="/images/Star.png"
                alt="Background Image"
                width={96}
                height={96}
            />


        </section>
    )
}