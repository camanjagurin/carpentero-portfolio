import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "motion/react";

import imgAddabet from "@/images/realtime/addabet.png";
import imgHeyvip  from "@/images/realtime/heyvip.png";
import imgJeetway from "@/images/realtime/jeetway.png";
import imgTunepay from "@/images/realtime/tunepay.png";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
interface Project {
  id:        string;
  name:      string;
  url:       string;
  tagline:   string;
  category:  string;
  thumbnail: string;
  accent:    string;
  year:      string;
}

const PROJECTS: Project[] = [
  {
    id:        "addabet",
    name:      "Addabet",
    url:       "https://addabet.com",
    tagline:   "Your winning edge, delivered online.",
    category:  "Sports Betting Platform",
    thumbnail: imgAddabet,
    accent:    "#f59e0b",
    year:      "2024",
  },
  {
    id:        "heyvip",
    name:      "HeyVIP",
    url:       "https://heyvip.com",
    tagline:   "Exclusive access. Elevated experience.",
    category:  "Premium VIP Services",
    thumbnail: imgHeyvip,
    accent:    "#a855f7",
    year:      "2024",
  },
  {
    id:        "jeetway",
    name:      "Jeetway",
    url:       "https://jeetway.net",
    tagline:   "The fastest route to victory.",
    category:  "Online Gaming & Entertainment",
    thumbnail: imgJeetway,
    accent:    "#22c55e",
    year:      "2024",
  },
  {
    id:        "tunepay",
    name:      "TunePay",
    url:       "https://tunepay.com",
    tagline:   "Where music meets seamless payments.",
    category:  "Music & Fintech Platform",
    thumbnail: imgTunepay,
    accent:    "#ec4899",
    year:      "2024",
  },
];

// ─── Modal ─────────────────────────────────────────────────────────────────────
type PreviewStatus = "loading" | "loaded" | "blocked";

function LivePreviewModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<PreviewStatus>("loading");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // When the iframe fires `load`, check whether the site actually loaded or was
  // blocked by X-Frame-Options / CSP frame-ancestors.
  //
  // How this works: blocked frames stay at about:blank so
  // contentWindow.location.href is readable and equals "about:blank".
  // Successfully loaded cross-origin frames throw a SecurityError when you try
  // to read location.href — that error IS the signal that the page loaded fine.
  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const href = iframe.contentWindow?.location.href ?? "";
      // about:blank == browser left the frame empty after blocking it
      setStatus(href === "about:blank" || href === "" ? "blocked" : "loaded");
    } catch {
      // SecurityError = cross-origin page loaded successfully
      setStatus("loaded");
    }
  };

  return (
    <motion.div
      key="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(12px, 3vw, 32px)",
      }}
      onClick={onClose}
    >
      <motion.div
        key="modal-content"
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "min(1280px, 94vw)",
          height: "min(860px, 92vh)",
          background: "#0e0e0e",
          borderRadius: 16,
          border: `1px solid ${project.accent}30`,
          boxShadow: `0 0 80px ${project.accent}15, 0 40px 120px rgba(0,0,0,0.85)`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Title bar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 20px",
            borderBottom: "1px solid #1a1a1a",
            flexShrink: 0,
            background: "#0a0a0a",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: status === "blocked" ? "#555" : project.accent,
                boxShadow: status === "blocked" ? "none" : `0 0 8px ${project.accent}`,
                flexShrink: 0,
                transition: "background 0.4s, box-shadow 0.4s",
              }}
            />
            <span style={{ fontFamily: "Fraunces, serif", fontSize: 18, fontWeight: 400, color: "#fff", letterSpacing: "-0.02em" }}>
              {project.name}
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#3a3a3a", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              · {project.category}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                color: project.accent,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "5px 12px",
                border: `1px solid ${project.accent}40`,
                borderRadius: 6,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = `${project.accent}18`)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
            >
              ↗ Open Live
            </a>
            <button
              onClick={onClose}
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                border: "1px solid #222",
                background: "transparent",
                color: "#555",
                cursor: "pointer",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#444"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#555"; e.currentTarget.style.borderColor = "#222"; }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        {/* ── Browser chrome / URL bar ── */}
        <div
          style={{
            padding: "9px 18px",
            borderBottom: "1px solid #131313",
            background: "#0c0c0c",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.65 }} />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              background: "#141414",
              borderRadius: 6,
              padding: "5px 12px",
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              color: "#444",
              letterSpacing: "0.01em",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {/* Lock icon changes on block */}
            <span style={{ fontSize: 10, color: status === "blocked" ? "#c0392b" : "#2a2a2a" }}>
              {status === "blocked" ? "⚠" : "🔒"}
            </span>
            <span style={{ color: status === "blocked" ? "#c0392b" : "#444" }}>
              {project.url.replace("https://", "")}
            </span>
            {status === "loading" && (
              <span
                style={{
                  marginLeft: "auto",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  border: `1.5px solid ${project.accent}30`,
                  borderTopColor: project.accent,
                  animation: "spin 0.7s linear infinite",
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        </div>

        {/* ── Main content area ── */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "#fff" }}>

          {/* Loading overlay */}
          {status === "loading" && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 10,
                background: "#0d0d0d",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: `2px solid ${project.accent}25`,
                  borderTopColor: project.accent,
                  animation: "spin 0.75s linear infinite",
                }}
              />
              <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>
                  Connecting to {project.url.replace("https://", "")}
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#333", letterSpacing: "0.08em" }}>
                  Loading live site…
                </span>
              </div>
            </div>
          )}

          {/* Blocked / refused notice */}
          {status === "blocked" && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 10,
                background: "#0a0a0a",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                padding: 40,
              }}
            >
              {/* Error icon */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  border: "1.5px solid #2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#111",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
              </div>

              <div style={{ textAlign: "center", maxWidth: 400 }}>
                <p style={{ fontFamily: "Fraunces, serif", fontSize: 22, color: "#fff", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 10 }}>
                  Site refused to connect
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 4 }}>
                  <strong style={{ color: "#777" }}>{project.url.replace("https://", "")}</strong> has security
                  policies (X-Frame-Options) that prevent it from being
                  embedded in external sites.
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#3a3a3a", lineHeight: 1.6 }}>
                  This is a security measure by the site owner, not a bug.
                </p>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#000",
                  background: project.accent,
                  borderRadius: 10,
                  padding: "12px 28px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.opacity = "1"; el.style.transform = ""; }}
              >
                Open {project.name} in New Tab
                <span style={{ fontSize: 15 }}>↗</span>
              </a>
            </div>
          )}

          {/* Iframe — always rendered; visibility controlled by status */}
          <iframe
            ref={iframeRef}
            src={project.url}
            title={`${project.name} live preview`}
            onLoad={handleLoad}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
              opacity: status === "loaded" ? 1 : 0,
              transition: "opacity 0.5s ease",
              pointerEvents: status === "loaded" ? "auto" : "none",
            }}
          />
        </div>

        {/* ── Footer ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "13px 22px",
            borderTop: "1px solid #141414",
            background: "#0a0a0a",
            flexShrink: 0,
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#2e2e2e", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {project.category} · {project.year}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={onClose}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                color: "#555",
                background: "transparent",
                border: "1px solid #222",
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                letterSpacing: "0.05em",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#444"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#555"; e.currentTarget.style.borderColor = "#222"; }}
            >
              Close
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                fontWeight: 500,
                color: "#000",
                background: project.accent,
                border: `1px solid ${project.accent}`,
                borderRadius: 8,
                padding: "8px 18px",
                letterSpacing: "0.05em",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              Visit Live Site ↗
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Project Row ───────────────────────────────────────────────────────────────
function ProjectRow({
  project,
  index,
  onOpen,
  rowRef,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
  rowRef: (el: HTMLDivElement | null) => void;
}) {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imgWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transition = "none";
    el.style.transform = `perspective(1200px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.025)`;
  };

  const handleMouseLeave = () => {
    const el = imgWrapRef.current;
    if (!el) return;
    el.style.transition = "transform 0.7s cubic-bezier(0.23,1,0.32,1), box-shadow 0.7s ease";
    el.style.transform = "";
    el.style.boxShadow = "";
  };

  const handleMouseEnter = () => {
    const el = imgWrapRef.current;
    if (!el) return;
    el.style.transition = "box-shadow 0.4s ease";
    el.style.boxShadow = `0 0 0 1px ${project.accent}40, 0 20px 60px ${project.accent}20, 0 40px 100px rgba(0,0,0,0.6)`;
  };

  return (
    <div
      ref={rowRef}
      style={{
        borderTop: "1px solid #141414",
        padding: "clamp(40px, 5vw, 70px) 0",
      }}
    >
      <div
        className={`flex flex-col gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} md:gap-16 md:items-center`}
      >
        {/* ── Text side ── */}
        <div
          className="project-text flex flex-col justify-center md:flex-1"
          style={{ minWidth: 0 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(60px, 8vw, 110px)",
                fontWeight: 400,
                color: "#151515",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                userSelect: "none",
                fontStyle: "italic",
              }}
            >
              0{index + 1}
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.28em",
                  color: "#444",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.28em",
                  color: "#2a2a2a",
                  textTransform: "uppercase",
                }}
              >
                {project.year}
              </span>
            </div>
          </div>

          <h3
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "clamp(42px, 5.5vw, 78px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              margin: 0,
              marginBottom: 20,
            }}
          >
            {project.name}
          </h3>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              lineHeight: 1.65,
              color: "#555",
              margin: 0,
              marginBottom: 36,
              maxWidth: 380,
            }}
          >
            {project.tagline}
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => onOpen(project)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#000",
                background: project.accent,
                border: "none",
                borderRadius: 8,
                padding: "12px 28px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.opacity = "0.88";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.opacity = "1";
                el.style.transform = "";
              }}
            >
              <span>Live Preview</span>
              <span style={{ fontSize: 14 }}>↗</span>
            </button>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#444",
                background: "transparent",
                border: "1px solid #222",
                borderRadius: 8,
                padding: "12px 24px",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#fff";
                el.style.borderColor = "#444";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#444";
                el.style.borderColor = "#222";
              }}
            >
              {project.url.replace("https://", "")}
            </a>
          </div>
        </div>

        {/* ── Image side ── */}
        <div
          className="project-img-outer md:flex-[1.5]"
          style={{ position: "relative", minWidth: 0 }}
        >
          {/* Accent line */}
          <div
            style={{
              position: "absolute",
              top: -1,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(to right, ${project.accent}, transparent)`,
              borderRadius: "2px 0 0 0",
              zIndex: 2,
              opacity: 0.7,
            }}
          />

          <div
            ref={imgWrapRef}
            className="group"
            style={{
              borderRadius: 14,
              overflow: "hidden",
              cursor: "pointer",
              willChange: "transform",
              position: "relative",
              aspectRatio: "16/10",
              background: "#111",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={() => onOpen(project)}
          >
            <img
              src={project.thumbnail}
              alt={`${project.name} website screenshot`}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1), filter 0.4s ease",
              }}
              className="group-hover:scale-[1.05] group-hover:brightness-90"
            />

            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)",
                backdropFilter: "blur(2px)",
                transition: "opacity 0.35s ease",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  border: `1.5px solid ${project.accent}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${project.accent}18`,
                  boxShadow: `0 0 24px ${project.accent}40`,
                }}
              >
                <span style={{ fontSize: 22, color: project.accent }}>↗</span>
              </div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                }}
              >
                View Live Preview
              </span>
            </div>

            {/* Corner tag */}
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 6,
                padding: "5px 10px",
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function LiveWebsites() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const sectionRef  = useRef<HTMLElement>(null);
  const headerRef   = useRef<HTMLDivElement>(null);
  const rowRefs     = useRef<(HTMLDivElement | null)[]>([]);

  // ── Scroll animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        }
      );

      rowRefs.current.forEach((row) => {
        if (!row) return;
        const textEl = row.querySelector(".project-text");
        const imgEl  = row.querySelector(".project-img-outer");

        gsap.fromTo(
          textEl,
          { opacity: 0, x: -50, y: 20 },
          {
            opacity: 1, x: 0, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 80%" },
          }
        );

        gsap.fromTo(
          imgEl,
          { opacity: 0, x: 50, y: 20 },
          {
            opacity: 1, x: 0, y: 0, duration: 1, ease: "power3.out", delay: 0.15,
            scrollTrigger: { trigger: row, start: "top 80%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Modal controls ──
  const openModal = useCallback((p: Project) => {
    setActiveProject(p);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setActiveProject(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  return (
    <>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <section
        ref={sectionRef}
        style={{
          background: "#0a0a0a",
          paddingTop: "clamp(80px, 10vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top border */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #1f1f1f, transparent)" }} />

        {/* ── Header ── */}
        <div
          ref={headerRef}
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 80px)",
            marginBottom: "clamp(40px, 5vw, 60px)",
            opacity: 0,
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              letterSpacing: "0.32em",
              color: "#555",
              textTransform: "uppercase",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span>03</span>
            <span style={{ width: 40, height: 1, background: "#2a2a2a", display: "inline-block" }} />
            <span>Web Design</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(52px, 9vw, 130px)",
                lineHeight: 0.88,
                fontWeight: 400,
                letterSpacing: "-0.04em",
                color: "#fff",
                margin: 0,
              }}
            >
              Live
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "#2a2a2a" }}>
                Websites.
              </em>
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                lineHeight: 1.75,
                color: "#555",
                maxWidth: 320,
                marginBottom: 8,
              }}
            >
              Real clients. Real products. Live on the web
              <br />
              — each one built from concept to launch.
            </p>
          </div>
        </div>

        {/* ── Projects ── */}
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 80px)",
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onOpen={openModal}
              rowRef={(el) => { rowRefs.current[i] = el; }}
            />
          ))}

          {/* Bottom line */}
          <div style={{ borderTop: "1px solid #141414" }} />
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeProject && (
          <LivePreviewModal project={activeProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
}
