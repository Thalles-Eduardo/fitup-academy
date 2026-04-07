"use client";

import YogaModel from "@/components/ui/YogaModel/YogaModel";
import "./yoga.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Yoga() {

    const sectionRef = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            delay: 2.0,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
            }
        });


        SplitText.create(".title-yoga h2", {
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


        SplitText.create(".title-yoga p", {
            type: "words",
            onSplit(self) {
                tl.from(self.words, {
                    y: 20,
                    opacity: 0,
                    autoAlpha: 0,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "power2.out",
                });
            },
        });


        tl.from(".container-yoga > *", {
            y: 80,
            opacity: 0,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
        })


            .from(".button-yoga", {
                y: 60,
                opacity: 0,
                autoAlpha: 0,
                duration: 0.7,
                ease: "power3.out",
            });

    }, []);

    return (
        <section ref={sectionRef} className="yoga-section">

            <div className="title-yoga">
                <h2>Find Your Perfect Yoga <span>style</span></h2>
                <p>
                    Explore different yoga styles tailored to your
                    needs, from flexibility and balance to relaxation
                    and strength
                </p>
            </div>

            <div className="container-yoga">

                <YogaModel
                    image="/images/Yoga-1.png"
                    width={510}
                    height={499}
                    textButton="Muscle Stretch"
                    bottom="-2.5rem"
                    scale={0.55}
                    scaleMobile={0.8}
                    bottomMobile="1rem"
                />

                <YogaModel
                    image="/images/Yoga-2.png"
                    width={448}
                    height={513}
                    textButton="Relaxation Stretch"
                    bottom="-4.5rem"
                    scale={0.52}
                    scaleMobile={0.8}
                    bottomMobile="0rem"
                />

                <YogaModel
                    image="/images/Yoga-3.png"
                    width={428}
                    height={513}
                    textButton="Balance Booster"
                    bottom="-4.5rem"
                    scale={0.5}
                    scaleMobile={0.8}
                    bottomMobile="0rem"
                />

                <YogaModel
                    image="/images/Yoga-4.png"
                    width={510}
                    height={408}
                    textButton="Flexibility Enhancer"
                    bottom="1.2rem"
                    scale={0.55}
                    scaleMobile={1}
                />

                <YogaModel
                    image="/images/Yoga-5.png"
                    width={510}
                    height={513}
                    textButton="Full-Body Stretch"
                    bottom="-2.3rem"
                    scale={0.5}
                    scaleMobile={1}
                />

                <YogaModel
                    image="/images/Yoga-6.png"
                    width={435}
                    height={513}
                    textButton="Strength Flow"
                    bottom="-4.5rem"
                    scale={0.5}
                    scaleMobile={0.8}
                    bottomMobile="-0.5rem"
                />

            </div>
            <button className="btn-yoga">Check All</button>


        </section>
    );
}