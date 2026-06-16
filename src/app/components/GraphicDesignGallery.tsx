import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Image imports ────────────────────────────────────────────────────────────
import imgLanding from "@/images/003_Landing_Page 1.png";
import imgSq1 from "@/images/01_1080x1080 1.png";
import imgSq2 from "@/images/01_1080x1080 2.png";
import imgStory1 from "@/images/01_1080x1920 1.png";
import imgStory2 from "@/images/01_1080x1920 2.png";
import imgStory3 from "@/images/01_1080x1920 3.png";
import imgSm1 from "@/images/02-02_300x300 1.png";
import imgSq3 from "@/images/02-03_1080x1080 1.png";
import imgPortrait1 from "@/images/02_1080x1350 1.png";
import imgStory4 from "@/images/02_1080x1920 1.png";
import imgSq4 from "@/images/03_1080x1080_B_230313193655CFM89112 1.png";
import imgPortrait2 from "@/images/03_1080x1350 1.png";
import imgStory5 from "@/images/03_1080x1920 1.png";
import imgStory6 from "@/images/03_1080x1920 2.png";
import imgBanner1 from "@/images/03_1200x628 1.png";
import imgBanner2 from "@/images/04_1200x628 1.png";
import imgSq5 from "@/images/06_1080x1080 1.png";
import imgStory7 from "@/images/06_1080x1920 1.png";
import img142 from "@/images/142.jpg";
import img151 from "@/images/151.jpg";
import img213 from "@/images/213.jpg";
import img214 from "@/images/214.jpg";
import img215 from "@/images/215.png";
import imgFb1 from "@/images/545830866_1533529997634233_4854659301149460423_n.jpg";
import imgFb2 from "@/images/652861549_1368608305072881_1159926416100256068_n.png";
import img82 from "@/images/82.jpg";
import imgBanners from "@/images/BANNERS 1.png";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
interface GalleryItem {
  src: string;
  label: string;
  category: string;
}

const ROW1: GalleryItem[] = [
  { src: imgSq1,      label: "Social Post",     category: "Brand & Social" },
  { src: imgPortrait1,label: "Instagram",        category: "Social Media"   },
  { src: imgSq2,      label: "Social Post",     category: "Brand & Social" },
  { src: imgSq3,      label: "Brand Visual",    category: "Identity"       },
  { src: imgPortrait2,label: "Instagram",        category: "Social Media"   },
  { src: imgSq5,      label: "Social Post",     category: "Brand & Social" },
  { src: img142,      label: "Graphic Design",  category: "Visual"         },
  { src: img151,      label: "Graphic Design",  category: "Visual"         },
  { src: img213,      label: "Visual Design",   category: "Visual"         },
];

const ROW2: GalleryItem[] = [
  { src: imgStory1,   label: "Stories",         category: "Social Media"   },
  { src: imgStory2,   label: "Stories",         category: "Social Media"   },
  { src: imgStory3,   label: "Stories",         category: "Social Media"   },
  { src: imgStory4,   label: "Stories",         category: "Social Media"   },
  { src: imgStory5,   label: "Stories",         category: "Social Media"   },
  { src: imgStory6,   label: "Stories",         category: "Social Media"   },
  { src: imgStory7,   label: "Stories",         category: "Social Media"   },
  { src: img214,      label: "Visual Design",   category: "Visual"         },
  { src: img215,      label: "Visual Design",   category: "Visual"         },
];

const ROW3: GalleryItem[] = [
  { src: imgLanding,  label: "Landing Page",    category: "Web Design"     },
  { src: imgBanner1,  label: "Facebook Banner", category: "Digital Ads"    },
  { src: imgBanner2,  label: "Facebook Banner", category: "Digital Ads"    },
  { src: imgBanners,  label: "Banners",         category: "Digital Ads"    },
  { src: imgSq4,      label: "Brand Visual",    category: "Identity"       },
  { src: imgSm1,      label: "Social Post",     category: "Brand & Social" },
  { src: img82,       label: "Graphic Design",  category: "Visual"         },
  { src: imgFb1,      label: "Social Media",    category: "Digital"        },
  { src: imgFb2,      label: "Social Media",    category: "Digital"        },
];

// ─── Card Component ───────────────────────────────────────────────────────────
function GalleryCard({ item, height }: { item: GalleryItem; height: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transition = "box-shadow 0.3s ease";
    card.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.045)`;
    card.style.boxShadow = `${-x * 20}px ${-y * 20}px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.6s cubic-bezier(0.23,1,0.32,1), box-shadow 0.6s ease";
    card.style.transform = "";
    card.style.boxShadow = "";
  };

  return (
    <div
      ref={cardRef}
      className="group relative flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer"
      style={{ willChange: "transform", backgroundColor: "#111" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={item.src}
        alt={item.label}
        loading="lazy"
        style={{ height: height as string, width: "auto", display: "block", maxWidth: 640 }}
        draggable={false}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
          transition: "opacity 0.35s ease",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 4,
          }}
        >
          {item.category}
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: "#fff",
            letterSpacing: "0.01em",
          }}
        >
          {item.label}
        </span>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function GraphicDesignGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const row1Ref    = useRef<HTMLDivElement>(null);
  const row2Ref    = useRef<HTMLDivElement>(null);
  const row3Ref    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const travelMultiplier = isMobile ? 0.18 : 0.28;

      // ── Header reveal ──
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // ── Row 1: travels left ◄ ──
      gsap.fromTo(
        row1Ref.current,
        { x: 0 },
        {
          x: () => -(row1Ref.current!.scrollWidth * travelMultiplier),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        }
      );

      // ── Row 2: travels right ► (offset start for stagger feel) ──
      gsap.fromTo(
        row2Ref.current,
        { x: () => -(row2Ref.current!.scrollWidth * (travelMultiplier * 0.7)) },
        {
          x: () => row2Ref.current!.scrollWidth * (travelMultiplier * 0.3),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2.2,
          },
        }
      );

      // ── Row 3: travels left ◄ (slightly faster) ──
      gsap.fromTo(
        row3Ref.current,
        { x: () => -(row3Ref.current!.scrollWidth * (travelMultiplier * 0.1)) },
        {
          x: () => -(row3Ref.current!.scrollWidth * (travelMultiplier * 1.1)),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        }
      );

      // ── Staggered row fade-in ──
      [row1Ref, row2Ref, row3Ref].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const rowImages1 = [...ROW1, ...ROW1];
  const rowImages2 = [...ROW2, ...ROW2];
  const rowImages3 = [...ROW3, ...ROW3];

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#080808",
        paddingTop: "clamp(80px, 10vw, 140px)",
        paddingBottom: "clamp(80px, 10vw, 140px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle top border */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #222, transparent)" }} />

      {/* ── Header ── */}
      <div
        ref={headerRef}
        style={{
          padding: "0 clamp(24px, 5vw, 80px)",
          marginBottom: "clamp(48px, 6vw, 80px)",
          maxWidth: 1400,
          margin: "0 auto clamp(48px, 6vw, 80px)",
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
          <span>02</span>
          <span style={{ width: 40, height: 1, background: "#333", display: "inline-block" }} />
          <span>Creative Works</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
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
            Graphic
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#3a3a3a" }}>Design.</em>
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
            Visual identities, social media content,<br />
            banners, and brand campaigns — crafted<br />
            with precision and purpose.
          </p>
        </div>
      </div>

      {/* ── Row 1: mixed square & portrait, scrolls ← ── */}
      <div style={{ overflow: "hidden", marginBottom: 14 }}>
        <div
          ref={row1Ref}
          style={{
            display: "flex",
            gap: 14,
            width: "max-content",
            paddingLeft: 14,
            willChange: "transform",
            opacity: 0,
          }}
        >
          {rowImages1.map((item, i) => (
            <GalleryCard key={`r1-${i}`} item={item} height="clamp(160px, 18vw, 260px)" />
          ))}
        </div>
      </div>

      {/* ── Row 2: story format (tall), scrolls ► ── */}
      <div style={{ overflow: "hidden", marginBottom: 14 }}>
        <div
          ref={row2Ref}
          style={{
            display: "flex",
            gap: 14,
            width: "max-content",
            paddingLeft: 14,
            willChange: "transform",
            opacity: 0,
          }}
        >
          {rowImages2.map((item, i) => (
            <GalleryCard key={`r2-${i}`} item={item} height="clamp(190px, 22vw, 320px)" />
          ))}
        </div>
      </div>

      {/* ── Row 3: banners & wide, scrolls ← ── */}
      <div style={{ overflow: "hidden" }}>
        <div
          ref={row3Ref}
          style={{
            display: "flex",
            gap: 14,
            width: "max-content",
            paddingLeft: 14,
            willChange: "transform",
            opacity: 0,
          }}
        >
          {rowImages3.map((item, i) => (
            <GalleryCard key={`r3-${i}`} item={item} height="clamp(140px, 16vw, 240px)" />
          ))}
        </div>
      </div>

      {/* Subtle bottom border */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #222, transparent)" }} />
    </section>
  );
}
