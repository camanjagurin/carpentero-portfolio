import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react";
import { useRef } from "react";

type SV = MotionValue<number>;

// Scroll map — each panel dwells, then transitions to the next
// [0–0.15] WHO dwell · [0.15–0.25] slide → WHAT
// [0.25–0.40] WHAT dwell · [0.40–0.50] slide → WHY
// [0.50–0.65] WHY dwell · [0.65–0.75] slide → HOW
// [0.75–1.00] HOW dwell
const X_IN  = [0,      0.15,    0.25,      0.40,    0.50,      0.65,    0.75,    1.0];
const X_OUT = ["0vw","0vw","-100vw","-100vw","-200vw","-200vw","-300vw","-300vw"];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const rawX = useTransform(scrollYProgress, X_IN, X_OUT);
  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.6 });

  return (
    <section id="about" ref={sectionRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full will-change-transform">
          <WhoPanel sv={scrollYProgress} />
          <WhatPanel sv={scrollYProgress} />
          <WhyPanel sv={scrollYProgress} />
          <HowPanel sv={scrollYProgress} />
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#EAEAEA]">
          <motion.div className="h-full bg-[#111]" style={{ scaleX: scrollYProgress, transformOrigin: "left" }} />
        </div>
      </div>
    </section>
  );
}

/* ─── WHO  (dwell 0–0.15) ────────────────────────────── */
function WhoPanel({ sv }: { sv: SV }) {
  const op = useTransform(sv, [0, 0.06], [0, 1]);
  const y  = useTransform(sv, [0, 0.06], [40, 0]);
  const s0 = useTransform(sv, [0.02, 0.08], [0, 1]);
  const s1 = useTransform(sv, [0.04, 0.10], [0, 1]);
  const s2 = useTransform(sv, [0.06, 0.12], [0, 1]);
  const s3 = useTransform(sv, [0.08, 0.14], [0, 1]);
  const statOps = [s0, s1, s2, s3];
  const stats = [{ v: "4+", l: "Years" }, { v: "10+", l: "Projects Led" }, { v: "1", l: "Team Led" }, { v: "7", l: "Designers" }];

  return (
    <div className="relative flex w-screen flex-shrink-0 overflow-hidden bg-[#111]">
      <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 select-none leading-none"
        style={{ fontFamily: "Fraunces, serif", fontSize: "55vw", fontStyle: "italic", fontWeight: 300, color: "#fff", opacity: 0.03, letterSpacing: "-0.06em" }}>
        H
      </div>
      <div className="relative flex h-full w-full flex-col justify-between px-5 py-8 md:px-16 md:py-16">
        <motion.div style={{ opacity: op }} className="flex flex-wrap items-start justify-between gap-y-1">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.35em", color: "#555", textTransform: "uppercase" }}>
            ( 001 ) — Who
          </span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#444", textTransform: "uppercase" }}>
            Est. 2018 · Manila, PH
          </span>
        </motion.div>

        <motion.div style={{ opacity: op, y }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.3em", color: "#555", textTransform: "uppercase", marginBottom: 16 }}>
            My name is
          </div>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(38px, 9vw, 130px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.045em", color: "#fff" }}>
            Hercules<br />
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#555" }}>Carpentero.</em>
          </h2>
          <p className="mt-5 max-w-lg md:mt-8" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.75, color: "#666" }}>
            A UI/UX designer, graphic designer, and video editor — a visual
            storyteller who leads a team of seven and believes great design
            is invisible: it just works, feels right, and moves people
            without them knowing why.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#222] md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.l} style={{ opacity: statOps[i] }} className="bg-[#161616] px-4 py-4 md:px-6 md:py-5">
              <div style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 3vw, 44px)", letterSpacing: "-0.04em", color: "#fff", fontWeight: 400, fontStyle: "italic" }}>{s.v}</div>
              <div className="mt-1" style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.2em", color: "#444", textTransform: "uppercase" }}>{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── WHAT  (arrives 0.25, dwell 0.25–0.40) ─────────── */
function WhatPanel({ sv }: { sv: SV }) {
  const op = useTransform(sv, [0.25, 0.31], [0, 1]);
  const y  = useTransform(sv, [0.25, 0.31], [40, 0]);
  const d0 = useTransform(sv, [0.28, 0.34], [0, 1]);
  const d1 = useTransform(sv, [0.30, 0.36], [0, 1]);
  const d2 = useTransform(sv, [0.32, 0.38], [0, 1]);
  const d3 = useTransform(sv, [0.34, 0.40], [0, 1]);
  const discOps = [d0, d1, d2, d3];

  const disciplines = [
    { icon: "◈", title: "UI / UX Design",   desc: "End-to-end product design — from wireframes to polished, dev-ready components that feel inevitable." },
    { icon: "◉", title: "Graphic Design",   desc: "Visual systems that communicate before a word is read. Logos, layouts, typography, print, and digital brand assets." },
    { icon: "◐", title: "Team Leadership",  desc: "Building design teams that ship calmly, argue productively, and grow with every critique." },
    { icon: "◑", title: "Video Editing",     desc: "After Effects, Premiere Pro — crafting polished video content, motion graphics, and brand reels that captivate." },
  ];

  return (
    <div className="relative flex w-screen flex-shrink-0 overflow-hidden bg-white">
      <div className="relative flex h-full w-full flex-col justify-between px-5 py-8 md:px-16 md:py-16">
        <motion.div style={{ opacity: op }} className="flex flex-wrap items-start justify-between gap-y-1">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.35em", color: "#999", textTransform: "uppercase" }}>
            ( 002 ) — What I do
          </span>
          <span style={{ fontFamily: "Fraunces, serif", fontSize: 13, fontStyle: "italic", color: "#bbb" }}>The work</span>
        </motion.div>

        <motion.div style={{ opacity: op, y }}>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 6vw, 88px)", lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.04em", color: "#111" }}>
            I design products<br />
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#aaa" }}>that move people</em><br />
            silently.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#EAEAEA] bg-[#EAEAEA] sm:grid-cols-2">
          {disciplines.map((d, i) => (
            <motion.div key={d.title} style={{ opacity: discOps[i] }} className="bg-white px-4 py-5 transition-colors duration-200 hover:bg-[#fafafa] md:px-7 md:py-6">
              <div className="mb-3 flex items-center gap-3">
                <span style={{ fontSize: 18, color: "#111" }}>{d.icon}</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 16, letterSpacing: "-0.01em", color: "#111" }}>{d.title}</span>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.7, color: "#777" }}>{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── WHY  (arrives 0.50, dwell 0.50–0.65) ──────────── */
function WhyPanel({ sv }: { sv: SV }) {
  const op = useTransform(sv, [0.50, 0.56], [0, 1]);
  const y  = useTransform(sv, [0.50, 0.56], [40, 0]);
  const p0 = useTransform(sv, [0.53, 0.59], [0, 1]);
  const p1 = useTransform(sv, [0.56, 0.62], [0, 1]);
  const p2 = useTransform(sv, [0.59, 0.65], [0, 1]);
  const prinOps = [p0, p1, p2];

  const principles = [
    { n: "01", t: "Restraint", b: "Remove until it breaks. Then add one thing back. That's the final design." },
    { n: "02", t: "Intention", b: "Every pixel placed with a reason. If you can't explain it, cut it." },
    { n: "03", t: "Empathy",   b: "Design for the person at 2am, exhausted, one try left. Not for the demo." },
  ];

  return (
    <div className="relative flex w-screen flex-shrink-0 overflow-hidden bg-[#fdf8f0]">
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 select-none leading-none"
        style={{ fontFamily: "Fraunces, serif", fontSize: "40vw", fontStyle: "italic", fontWeight: 300, color: "#111", opacity: 0.03, letterSpacing: "-0.06em" }}>
        WHY
      </div>
      <div className="relative flex h-full w-full flex-col justify-between px-5 py-8 md:px-16 md:py-16">
        <motion.div style={{ opacity: op }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.35em", color: "#b0a898", textTransform: "uppercase" }}>
            ( 003 ) — Why I design
          </span>
        </motion.div>

        <motion.div style={{ opacity: op, y }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.3em", color: "#b0a898", textTransform: "uppercase", marginBottom: 14 }}>
            A design manifesto
          </div>
          <blockquote style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 4.5vw, 66px)", lineHeight: 1.05, fontWeight: 400, letterSpacing: "-0.03em", color: "#111" }}>
            "The best design<br />
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#b0a898" }}>is the one</em><br />
            nobody questions."
          </blockquote>
          <p className="mt-5 max-w-md" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.8, color: "#7a7060" }}>
            I design because clarity is kindness. Every confusing button, every broken
            flow, every ignored error state costs someone something. Good design gives that back.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {principles.map((p, i) => (
            <motion.div key={p.n} style={{ opacity: prinOps[i] }} className="flex-1 border-t border-[#e0d9cf] pt-4">
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, letterSpacing: "0.3em", color: "#c0b8ae", textTransform: "uppercase", marginBottom: 8 }}>{p.n}</div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 17, letterSpacing: "-0.01em", color: "#111", marginBottom: 6 }}>{p.t}</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.65, color: "#7a7060" }}>{p.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── HOW  (arrives 0.75, dwell 0.75–1.00) ──────────── */
function HowPanel({ sv }: { sv: SV }) {
  const op = useTransform(sv, [0.75, 0.81], [0, 1]);
  const y  = useTransform(sv, [0.75, 0.81], [40, 0]);
  const s0 = useTransform(sv, [0.78, 0.84], [0, 1]);
  const s1 = useTransform(sv, [0.81, 0.87], [0, 1]);
  const s2 = useTransform(sv, [0.84, 0.90], [0, 1]);
  const s3 = useTransform(sv, [0.87, 0.93], [0, 1]);
  const stepOps = [s0, s1, s2, s3];

  const steps = [
    { n: "01", t: "Discover", icon: "→", b: "Deep research. Stakeholder interviews. Competitive audits. I don't open Figma until I truly understand the problem." },
    { n: "02", t: "Define",   icon: "◎", b: "Synthesise findings into a clear brief. What are we solving, for whom, and what does success actually look like?" },
    { n: "03", t: "Design",   icon: "◈", b: "Fast sketches. Low-fi wireframes. Iteration in the open. Critique before polish. Prototype before you defend." },
    { n: "04", t: "Deliver",  icon: "✦", b: "Pixel-perfect handoff. Design tokens. Component libraries. I stay through QA until it ships the way it was designed." },
  ];

  const tools = ["Figma", "After Effects", "Premiere", "Photoshop", "Illustrator", "Claude", "Grok"];

  return (
    <div className="relative flex w-screen flex-shrink-0 overflow-hidden bg-[#111]">
      <div className="relative flex h-full w-full flex-col justify-between px-5 py-8 md:px-16 md:py-16">
        <motion.div style={{ opacity: op }} className="flex flex-wrap items-start justify-between gap-y-1">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.35em", color: "#555", textTransform: "uppercase" }}>
            ( 004 ) — How I work
          </span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#444", textTransform: "uppercase" }}>Process</span>
        </motion.div>

        <motion.div style={{ opacity: op, y }}>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(26px, 5vw, 72px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.04em", color: "#fff" }}>
            Research first.<br />
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#555" }}>Prototype fast.</em><br />
            Edit forever.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#222] bg-[#222] md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.n} style={{ opacity: stepOps[i] }} className="bg-[#111] px-4 py-4 transition-colors duration-200 hover:bg-[#161616] md:px-6 md:py-6">
              <div className="mb-3 flex items-center justify-between">
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, letterSpacing: "0.3em", color: "#444", textTransform: "uppercase" }}>{s.n}</span>
                <span style={{ fontSize: 14, color: "#333" }}>{s.icon}</span>
              </div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 17, letterSpacing: "-0.01em", color: "#fff", marginBottom: 8 }}>{s.t}</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, lineHeight: 1.65, color: "#555" }}>{s.b}</p>
            </motion.div>
          ))}
        </div>

        <motion.div style={{ opacity: op }} className="flex flex-wrap items-center gap-2">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, letterSpacing: "0.3em", color: "#444", textTransform: "uppercase", marginRight: 8 }}>Tools —</span>
          {tools.map((t) => (
            <span key={t} className="rounded-full border border-[#2a2a2a] px-3 py-1" style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#555" }}>{t}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
