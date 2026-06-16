import { motion, useScroll, useTransform, useInView, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { caseStudies } from "../data/caseStudies";
import { CaseStudyArtwork } from "./CaseStudyArtwork";
import "../../styles/tools-carousel.css";

const TOOLS = ["Adobe Illustrator", "Photoshop", "After Effects", "Premiere Pro", "Figma", "Claude", "Grok", "ChatGPT", "Nanobanana Pro", "Higgsfield"];

type Props = {
  onOpen: (id: string) => void;
  introComplete?: boolean;
};

export function HeroCarousel({ introComplete = false }: Omit<Props, "onOpen">) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const introOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const hintOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);
  const rippleTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const rippleTextX = useTransform(scrollYProgress, [0, 0.2], [0, -300]);
  const rippleTextRightX = useTransform(scrollYProgress, [0, 0.2], [0, 400]);

  return (
    <section ref={ref} className="h-[160vh]" id="top" style={{ position: "relative", zIndex: 1 }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* Hero text */}
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={introComplete ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="mb-8"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.2em", color: "#666", textTransform: "uppercase" }}
          >
            UI/UX · Team Lead · Graphic Designer · Video Editor
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={introComplete ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.18 }}
            className="max-w-5xl"
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "clamp(44px, 8.5vw, 148px)",
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: "-0.04em",
              color: "#111",
              textAlign: "center",
            }}
          >
            Designing the <em style={{ fontStyle: "italic", fontWeight: 300, color: "#666" }}>quiet</em>
            <br />
            details that move <em style={{ fontStyle: "italic", fontWeight: 300, color: "#666" }}>millions.</em>
          </motion.h1>

          <motion.a
            href="/Hercules_Carpentero_Resume_v1.pdf"
            download="Hercules_Carpentero_Resume_v1.pdf"
            initial={{ opacity: 0, y: 16 }}
            animate={introComplete ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.38 }}
            className="pointer-events-auto group relative mt-10 overflow-hidden rounded-full border px-7 py-3.5"
            style={{ borderColor: "#EAEAEA", fontFamily: "Inter, sans-serif", fontSize: 13 }}
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Download CV</span>
            <span className="absolute inset-0 -z-0 translate-y-full bg-[#111] transition-transform duration-500 group-hover:translate-y-0" />
          </motion.a>
        </motion.div>

        {/* Left ripple text — slides left and fades on scroll */}
        <motion.div
          style={{ opacity: rippleTextOpacity, x: rippleTextX }}
          className="pointer-events-none absolute left-32 top-1/2 z-40 -translate-y-1/2 hidden md:block"
        >
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.28em", color: "#999", textTransform: "uppercase", marginBottom: 8 }}>
            Hi, my name is
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.03em", color: "#111", fontWeight: 400, lineHeight: 1, fontStyle: "italic" }}>
            Hercules
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.2em", color: "#AAA", marginTop: 10, textTransform: "uppercase" }}>
            UI / UX Designer · Graphic Designer · Video Editor
          </div>
        </motion.div>

        {/* Right ripple text — slides right and fades on scroll */}
        <motion.div
          style={{ opacity: rippleTextOpacity, x: rippleTextRightX }}
          className="pointer-events-none absolute right-32 top-1/2 z-40 -translate-y-1/2 text-right hidden md:block"
        >
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.28em", color: "#999", textTransform: "uppercase", marginBottom: 8 }}>
            Welcome
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(18px, 2vw, 28px)", letterSpacing: "-0.02em", color: "#111", fontWeight: 400, lineHeight: 1.3, fontStyle: "italic" }}>
            Thank you for viewing
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(18px, 2vw, 28px)", letterSpacing: "-0.02em", color: "#111", fontWeight: 400, lineHeight: 1.3, fontStyle: "italic" }}>
            my portfolio.
          </div>
        </motion.div>

        <RippleMask scrollYProgress={scrollYProgress} />

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-24 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <div
            className="relative flex items-start justify-center"
            style={{ width: 28, height: 44, border: "2px solid rgba(17,17,17,0.35)", borderRadius: 14 }}
          >
            <motion.div
              className="rounded-full"
              style={{ width: 4, height: 8, background: "rgba(17,17,17,0.5)", marginTop: 7 }}
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="flex flex-col items-center" style={{ gap: 2 }}>
            {[0, 1].map((i) => (
              <motion.svg
                key={i}
                width={14}
                height={8}
                viewBox="0 0 14 8"
                fill="none"
                animate={{ opacity: [0.2, 1, 0.2], y: [0, 3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.18 }}
              >
                <path d="M1 1l6 6 6-6" stroke="rgba(17,17,17,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            ))}
          </div>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, letterSpacing: "0.38em", color: "rgba(17,17,17,0.4)", textTransform: "uppercase" }}>
            Scroll
          </span>
        </motion.div>

        {/* Tools ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ opacity: introOpacity }}
          className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden py-4"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16" style={{ background: "linear-gradient(to right, #fff, transparent)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16" style={{ background: "linear-gradient(to left, #fff, transparent)" }} />
          <div className="tools-track flex items-center gap-8">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <span key={i} className="flex shrink-0 items-center gap-2">
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.22em", color: "#999", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  {t}
                </span>
                <span style={{ color: "#DDD", fontSize: 12 }}>·</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CaseStudiesSection({ onOpen }: { onOpen: (id: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  const [slots, setSlots] = useState<[number, number, number]>([0, 1, 2]);

  const swap = (slotIdx: 0 | 2) => {
    setSlots((s) => {
      const next: [number, number, number] = [...s] as [number, number, number];
      [next[1], next[slotIdx]] = [next[slotIdx], next[1]];
      return next;
    });
  };

  const [paused, setPaused] = useState(false);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseFor = (ms: number) => {
    setPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), ms);
  };

  useEffect(() => {
    if (paused) return;
    const dir = { current: 2 as 0 | 2 };
    const id = setInterval(() => {
      swap(dir.current);
      dir.current = dir.current === 2 ? 0 : 2;
    }, 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section ref={ref} className="relative w-full bg-white py-24" id="work">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="mb-10 flex flex-col items-center text-center"
      >
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#111", fontWeight: 400 }}>
          Case <em style={{ fontStyle: "italic", fontWeight: 300, color: "#666" }}>Studies</em>
        </h2>
        <p className="mt-4 max-w-md" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.6, color: "#666" }}>
          Three flagship projects across product, brand, and direction — each one quietly built to move numbers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 64 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 64 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
        className="relative flex h-[70vh] max-h-[640px] w-full items-center justify-center px-4"
      >
        {caseStudies.map((cs, i) => {
          const slot = slots.indexOf(i) as 0 | 1 | 2;
          const offset = slot - 1;
          const isActive = slot === 1;
          return (
            <Card
              key={cs.id}
              cs={cs}
              offset={offset}
              isActive={isActive}
              onClick={() => {
                if (slot === 0) swap(0);
                else if (slot === 2) swap(2);
                pauseFor(5000);
              }}
              onEnter={() => onOpen(cs.id)}
            />
          );
        })}
      </motion.div>
    </section>
  );
}

function RippleMask({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rippleRef = useRef<SVGPathElement>(null);
  const overlayRef = useRef<SVGPathElement>(null);
  const phaseRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let running = true;

    const buildPath = () => {
      const svg = svgRef.current;
      const ripplePath = rippleRef.current;
      const overlayPath = overlayRef.current;
      if (!svg || !ripplePath || !overlayPath) return;

      const w = svg.clientWidth || window.innerWidth;
      const h = svg.clientHeight || window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;

      const rawT = scrollYProgress.get();
      const t = Math.min(rawT / 0.5, 1);

      const minR = Math.min(w, h) * 0.12;
      const maxR = Math.sqrt(w * w + h * h) * 0.72;
      const r = minR + (maxR - minR) * easeInOutCubic(t);

      const peakAt = 0.18;
      const ampCurve = t < peakAt ? t / peakAt : 1 - (t - peakAt) / (1 - peakAt);
      const amplitude = ampCurve * r * 0.14;
      const amplitude2 = ampCurve * r * 0.055;

      const FREQ = 7;
      const FREQ2 = 13;
      const PTS = 480;
      let d = "";
      for (let i = 0; i <= PTS; i++) {
        const angle = (i / PTS) * Math.PI * 2;
        const wave =
          amplitude * Math.sin(FREQ * angle + phaseRef.current) +
          amplitude2 * Math.sin(FREQ2 * angle - phaseRef.current * 1.6);
        const rr = r + wave;
        const x = cx + rr * Math.cos(angle - Math.PI / 2);
        const y = cy + rr * Math.sin(angle - Math.PI / 2);
        d += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
      }
      d += "Z";

      ripplePath.setAttribute("d", d);
      overlayPath.setAttribute("d", `M0,0 H${w} V${h} H0 Z ${d}`);
    };

    const tick = () => {
      phaseRef.current += 0.038;
      buildPath();
      if (running) rafRef.current = requestAnimationFrame(tick);
    };

    const unsub = scrollYProgress.on("change", buildPath);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      unsub();
    };
  }, [scrollYProgress]);

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 z-30 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="ripple-clip">
          <path ref={rippleRef} />
        </clipPath>
      </defs>
      <path ref={overlayRef} fill="#fdf8f0" fillRule="evenodd" />
    </svg>
  );
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function Card({
  cs,
  offset,
  isActive,
  onClick,
  onEnter,
}: {
  cs: (typeof caseStudies)[number];
  offset: number;
  isActive: boolean;
  onClick: () => void;
  onEnter: () => void;
}) {
  const x = `calc(-50% + ${offset * 105}%)`;
  const scale = isActive ? 1 : 0.86;
  const y = `calc(-50% + 0px)`;
  const z = isActive ? 10 : 5;

  return (
    <motion.button
      onClick={onClick}
      animate={{ x, y, scale }}
      transition={{ type: "spring", stiffness: 140, damping: 22, mass: 0.55 }}
      style={{ zIndex: z, transformOrigin: "center center" }}
      className="absolute left-1/2 top-1/2 aspect-[4/5] h-[88%] max-h-[560px] w-[clamp(200px,52vw,260px)] cursor-pointer overflow-hidden rounded-[14px] border text-left shadow-[0_50px_100px_-40px_rgba(17,17,17,0.35)]"
    >
      <div className="relative h-full w-full" style={{ borderColor: "rgba(17,17,17,0.06)" }}>
        <CaseStudyArtwork cs={cs} animated={false} />

        {!isActive && (
          <div className="pointer-events-none absolute inset-0" style={{ background: "rgba(255,255,255,0.15)" }} />
        )}

        <div className="relative z-10 flex h-full flex-col justify-between p-4 md:p-8">
          <div className="flex items-start justify-between">
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.3em", color: cs.fg, opacity: 0.7, textTransform: "uppercase" }}>
              Case · {cs.index} / 03
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.3em", color: cs.fg, opacity: 0.7, textTransform: "uppercase" }}>
              {cs.year}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.3em", color: cs.fg, opacity: 0.75, textTransform: "uppercase" }}>
              {cs.discipline}
            </div>
            <h3
              className="mt-3"
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(28px, 2.4vw, 38px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: cs.fg,
                fontWeight: 400,
              }}
            >
              {cs.client}
            </h3>
            {isActive && (
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => { e.stopPropagation(); onEnter(); }}
                onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); onEnter(); } }}
                className="group/cta mt-4 flex cursor-pointer items-center justify-between gap-2 rounded-full px-3 py-2 transition-transform duration-300 hover:-translate-y-0.5 md:mt-6 md:gap-3 md:px-5 md:py-3"
                style={{
                  background: cs.fg === "#FFFFFF" || cs.fg === "#F5F1EA" ? "#FFFFFF" : "#111111",
                  color: cs.fg === "#FFFFFF" || cs.fg === "#F5F1EA" ? "#111111" : "#FFFFFF",
                  boxShadow: "0 12px 30px -12px rgba(0,0,0,0.4)",
                }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>
                  View case study
                </span>
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-500 group-hover/cta:translate-x-1"
                  style={{
                    background: cs.fg === "#FFFFFF" || cs.fg === "#F5F1EA" ? "#111111" : "#FFFFFF",
                    color: cs.fg === "#FFFFFF" || cs.fg === "#F5F1EA" ? "#FFFFFF" : "#111111",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                  }}
                >
                  ↗
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.button>
  );
}
