"use client";

import { gsap } from "gsap";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";

const data = [
  { day: "M", value: 45, active: false },
  { day: "T", value: 30, active: false },
  { day: "W", value: 55, active: false },
  { day: "T", value: 40, active: false },
  { day: "F", value: 90, active: true },
  { day: "S", value: 60, active: false },
  { day: "S", value: 50, active: false },
];

export default function WeeklyOverview() {
  const [hovered, setHovered] = useState<number | null>(null);
  const maxValue = Math.max(...data.map((d) => d.value));

  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(el.querySelectorAll(".bar"), {
      height: 0,
      duration: 1,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.2,
    });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative inline-flex flex-col items-center backdrop-blur-md"
      style={{
        borderRadius: "clamp(16px, 2vw, 28px)",
        padding: "clamp(16px, 3vw, 32px) clamp(18px, 3vw, 36px) clamp(16px, 2vw, 24px)",
        minWidth: "clamp(180px, 20vw, 220px)",
        height: "clamp(220px, 25vw, 320px)",
        background: "rgba(255,255,255,0.26)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
        right: "clamp(12px, 2vw, 32px)",
        top: "clamp(12px, 2vw, 32px)",
      }}
    >
      {/* HEADER */}
      <div
        className="text-center"
        style={{ marginBottom: "clamp(12px, 2vw, 24px)" }}
      >
        <div
          className="font-bold"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
        >
          Weekly Overview
        </div>

        <div
          className="text-gray-400"
          style={{ fontSize: "clamp(10px, 1vw, 12px)" }}
        >
          All week
        </div>
      </div>

      {/* CHART */}
      <div
        className="flex items-end"
        style={{
          marginTop: "clamp(32px, 6vw, 40px)",
          gap: "clamp(4px, 1vw, 8px)",
          height: "clamp(80px, 12vw, 120px)",
        }}
      >
        {data.map((item, i) => {
          const barHeight = (item.value / maxValue) * 96;
          const isHovered = hovered === i;
          const isActive = item.active;

          return (
            <div
              key={i}
              className="flex flex-col items-center relative cursor-pointer"
              style={{ gap: "clamp(6px, 1vw, 10px)" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {isActive && (
                <div
                  className="absolute"
                  style={{
                    top: "clamp(-16px, -2vw, -22px)",
                    fontSize: "clamp(8px, 0.8vw, 9px)",
                  }}
                >
                  TOP
                </div>
              )}

              <div
                className="bar"
                style={{
                  width: "clamp(12px, 2vw, 22px)",
                  height: barHeight,
                  borderRadius: "clamp(6px, 1vw, 10px)",
                  background: isActive
                    ? "#2e2e2e"
                    : isHovered
                      ? "#b5b0a8"
                      : "#cdc9c2",
                  transition: "all 0.2s ease",
                  transform: isHovered ? "scaleY(1.04)" : "scaleY(1)",
                  transformOrigin: "bottom",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* LABELS */}
      <div
        className="flex"
        style={{
          gap: "clamp(8px, 1vw, 8px)",
          marginTop: "clamp(6px, 1vw, 10px)",
        }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              width: "clamp(12px, 2vw, 22px)",
              fontSize: "clamp(9px, 1vw, 11px)",
            }}
          >
            {item.day}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        className="text-gray-500"
        style={{
          marginTop: "clamp(12px, 2vw, 20px)",
          fontSize: "clamp(8px, 0.8vw, 10px)",
        }}
      >
        Your Performance *
      </div>
    </div>
  );
}