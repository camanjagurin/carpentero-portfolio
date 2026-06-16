import { useRef, useState } from "react";
import { motion } from "motion/react";
import { RevealLines } from "./RevealText";

function MagneticLink({ href, label, sub }: { href: string; label: string; sub: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setT({ x: x * 0.12, y: y * 0.2 });
  };

  return (
    <a
      ref={ref}
      href={href}
      data-magnet
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      className="group relative block border-t border-[#EAEAEA] py-6 md:py-8"
    >
      <motion.div
        animate={{ x: t.x, y: t.y }}
        transition={{ type: "spring", stiffness: 140, damping: 14, mass: 0.4 }}
        className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2"
      >
        <span
          className="flex items-baseline gap-2 md:gap-3"
          style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(20px, 3.2vw, 44px)", letterSpacing: "-0.025em", color: "#111", fontWeight: 400, lineHeight: 1.1, wordBreak: "break-all" }}
        >
          {label}
          <span className="inline-block flex-shrink-0 transition-transform duration-500 group-hover:translate-x-2" style={{ color: "#666" }}>↗</span>
        </span>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", flexShrink: 0 }}>
          {sub}
        </span>
      </motion.div>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-[#EAEAEA] bg-[#FAFAFA] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          {/* left: eyebrow + meta */}
          <div className="col-span-12 md:col-span-4">
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.3em", color: "#666", textTransform: "uppercase" }}>
              ( 004 ) — Contact
            </div>
            <p
              className="mt-6 max-w-sm"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.7, color: "#444" }}
            >
              I take on a small number of engagements each year — product design leadership, brand direction, and long-form creative partnerships.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-1 md:gap-y-5">
              <div>
                <dt style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.28em", color: "#999", textTransform: "uppercase" }}>
                  Availability
                </dt>
                <dd className="mt-2" style={{ fontFamily: "Fraunces, serif", fontSize: 18, color: "#111", letterSpacing: "-0.01em" }}>
                  Q3 / Q4 2026
                </dd>
              </div>
              <div>
                <dt style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.28em", color: "#999", textTransform: "uppercase" }}>
                  Based in
                </dt>
                <dd className="mt-2" style={{ fontFamily: "Fraunces, serif", fontSize: 18, color: "#111", letterSpacing: "-0.01em" }}>
                  Cebu City · Remote
                </dd>
              </div>
              <div>
                <dt style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.28em", color: "#999", textTransform: "uppercase" }}>
                  Response time
                </dt>
                <dd className="mt-2" style={{ fontFamily: "Fraunces, serif", fontSize: 18, color: "#111", letterSpacing: "-0.01em" }}>
                  Within 48h
                </dd>
              </div>
            </dl>
          </div>

          {/* right: headline + links */}
          <div className="col-span-12 md:col-span-8">
            <RevealLines
              lines={["Let’s build", "something exceptional."]}
              style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(44px, 7vw, 124px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: "#111", fontWeight: 400 }}
            />

            <div className="mt-12 md:mt-16">
              <MagneticLink href="mailto:selucreh187@gmail.com" label="selucreh187@gmail.com" sub="Email" />
              <MagneticLink href="https://www.linkedin.com/in/hercules-carpentero-b1a773221" label="LinkedIn" sub="/in/hercules-carpentero" />
              <MagneticLink href="https://www.instagram.com/carpentero_sol/" label="Instagram" sub="@carpentero_sol" />
              <div className="border-t border-[#EAEAEA]" />
            </div>
          </div>
        </div>

        <footer
          className="mt-20 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-[#EAEAEA] pt-8 md:mt-24"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#666", textTransform: "uppercase" }}
        >
          <div>© 2026 Hercules Carpentero</div>
          <div className="hidden md:block">Designed &amp; directed in-house</div>
          <div>Vol. 07 — Spring Edition</div>
        </footer>
      </div>
    </section>
  );
}
