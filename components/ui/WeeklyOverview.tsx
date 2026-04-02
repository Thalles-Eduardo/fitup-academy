"use client";

import { gsap } from "gsap";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";

const data = [
  { day: "M", value: 45, active: false },
  { day: "T", value: 30, active: false },
  { day: "W", value: 55, active: false },
  { day: "T", value: 40, active: false },
  { day: "F", value: 90, active: true, label: "TOP" },
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

    // ENTRADA DO CARD
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // BARRAS SUBINDO (ESCOPADO)
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
      className="weekly-overview"
      style={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "28px",
        padding: "32px 36px 24px",
        boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
        minWidth: 200,
        minHeight: 100,
        background: "rgba(255, 255, 255, 0.26)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24, }}>
        <div className="title-week" style={{ fontSize: 18, fontWeight: 700 }}>
          Weekly Overview
        </div>
        <div className="sub-week" style={{ fontSize: 12, color: "#999" }}>
          All week
        </div>
      </div>

      {/* Chart */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 8,
          height: 120,
        }}
      >
        {data.map((item, i) => {
          const barHeight = (item.value / maxValue) * 96;
          const isHovered = hovered === i;
          const isActive = item.active;

          return (
            <div
              className="days-week"
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {isActive && (
                <div className="top" style={{ position: "absolute", top: -22, fontSize: 9 }}>
                  TOP
                </div>
              )}

              <div
                className="bar"
                style={{
                  width: 22,
                  height: barHeight,
                  borderRadius: 10,
                  background: isActive
                    ? "#2e2e2e"
                    : isHovered
                      ? "#b5b0a8"
                      : "#cdc9c2",
                  transition: "background 0.2s ease, transform 0.15s ease",
                  transform: isHovered ? "scaleY(1.04)" : "scaleY(1)",
                  transformOrigin: "bottom",
                  marginTop: "auto",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Labels */}
      <div className="letter-week" style={{ display: "flex", gap: 8, marginTop: 10 }}>
        {data.map((item, i) => (
          <div key={i} style={{ width: 22, textAlign: "center", fontSize: 11 }}>
            {item.day}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="perfomace" style={{ marginTop: 20, fontSize: 10 }}>
        Your Performance *
      </div>
    </div>
  );
}

