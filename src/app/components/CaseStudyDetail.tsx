import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import type { CaseStudy } from "../data/caseStudies";
import { CaseStudyArtwork, BrewMenuScreen, BrewSubsScreen, BrewJournalScreen, ShopCheckoutScreen, ShopPaymentScreen, ShopConfirmedScreen, WalletSendScreen, WalletBillsScreen, WalletGoalsScreen } from "./CaseStudyArtwork";

export function CaseStudyDetail({ cs, onClose }: { cs: CaseStudy | null; onClose: () => void }) {
  useEffect(() => {
    if (!cs) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [cs, onClose]);

  return (
    <AnimatePresence>
      {cs && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[80] overflow-y-auto bg-white"
        >
          {/* Top bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#EAEAEA] bg-white/85 px-4 py-4 backdrop-blur-xl sm:px-8 sm:py-5">
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.22em", color: "#666", textTransform: "uppercase" }}>
              <span className="hidden sm:inline">Case Study · </span>{cs.index} / 03 — {cs.client}
            </div>
            <button
              onClick={onClose}
              data-magnet
              className="group flex items-center gap-3"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.2em", color: "#111", textTransform: "uppercase" }}
            >
              Close
              <span className="inline-block transition-transform duration-500 group-hover:rotate-90">✕</span>
            </button>
          </div>

          {/* Hero artwork */}
          <div className="relative mx-auto mt-4 h-[52vh] w-[calc(100%-2rem)] overflow-hidden rounded-[12px] sm:mt-8 sm:h-[70vh] sm:max-h-[760px] sm:w-[calc(100%-4rem)] sm:max-w-[1400px] sm:rounded-[14px]">
            <CaseStudyArtwork cs={cs} animated={false} />
            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 md:p-16">
              <div className="flex items-start justify-between">
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.3em", color: cs.fg, opacity: 0.75, textTransform: "uppercase" }}>{cs.theme}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.3em", color: cs.fg, opacity: 0.75, textTransform: "uppercase" }}>{cs.year}</div>
              </div>
              <div>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(36px, 7vw, 132px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: cs.fg, fontWeight: 400 }}>
                  {cs.title}{" "}
                  <em style={{ fontStyle: "italic", fontWeight: 300, opacity: 0.75 }}>{cs.titleItalic}</em>
                </h2>
              </div>
            </div>
          </div>

          <DetailBody cs={cs} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailBody({ cs }: { cs: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[1400px] px-4 pb-32 pt-16 sm:px-8 sm:pt-24"
    >
      {/* ── Meta + Intro ── */}
      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        <div className="col-span-12 md:col-span-3">
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.22em", color: "#666", textTransform: "uppercase", lineHeight: 2 }}>
            <div>Role — {cs.role}</div>
            <div>Year — {cs.year}</div>
            <div>Client — {cs.client}</div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <p style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(20px, 2.2vw, 36px)", lineHeight: 1.3, letterSpacing: "-0.015em", color: "#111", fontWeight: 400 }}>
            {cs.intro}
          </p>
        </div>
      </div>

      {/* ── Challenge ── */}
      <div className="mt-20 sm:mt-28">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-2">
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.22em", color: "#999", textTransform: "uppercase", paddingTop: 4 }}>Challenge</div>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <div className="border-l-2 border-[#111] pl-6 sm:pl-10">
              <p style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(17px, 1.7vw, 26px)", lineHeight: 1.5, letterSpacing: "-0.01em", color: "#333", fontWeight: 400, fontStyle: "italic" }}>
                "{cs.challenge}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Process ── */}
      <div className="mt-20 sm:mt-28">
        <div className="mb-8 flex items-baseline justify-between border-t border-[#111] pt-6">
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(22px, 2.2vw, 36px)", letterSpacing: "-0.025em", color: "#111", fontWeight: 400 }}>
            Design <em style={{ fontStyle: "italic", fontWeight: 300, color: "#666" }}>Process</em>
          </h3>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.22em", color: "#999", textTransform: "uppercase" }}>3 phases</span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8">
          {cs.process.map((p) => (
            <div key={p.step} className="group rounded-[10px] border border-[#EAEAEA] p-6 transition-shadow duration-300 hover:shadow-md">
              <div className="mb-5 flex items-start justify-between">
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 48, letterSpacing: "-0.05em", color: "#EDEAE4", fontWeight: 400, lineHeight: 1 }}>{p.step}</span>
                <div className="mt-1 h-6 w-6 rounded-full border border-[#111] transition-all duration-300 group-hover:bg-[#111]" />
              </div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 20, letterSpacing: "-0.02em", color: "#111", fontWeight: 400, marginBottom: 10 }}>{p.title}</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.7, color: "#666" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Design Direction ── */}
      <div className="mt-20 sm:mt-28">
        <div className="mb-8 flex items-baseline justify-between border-t border-[#111] pt-6">
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(22px, 2.2vw, 36px)", letterSpacing: "-0.025em", color: "#111", fontWeight: 400 }}>
            Design <em style={{ fontStyle: "italic", fontWeight: 300, color: "#666" }}>Direction</em>
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {cs.pillars.map((p) => (
            <div key={p.number} className="border-t border-[#111] pt-6">
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.22em", color: "#999", textTransform: "uppercase", marginBottom: 10 }}>
                {p.number}
              </div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 21, color: "#111", letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 16 }}>
                {p.title}
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.7, color: "#666" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Key Screens ── */}
      <div className="mt-20 sm:mt-28">
        <div className="mb-8 flex items-baseline justify-between border-t border-[#111] pt-6">
          <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(22px, 2.2vw, 36px)", letterSpacing: "-0.025em", color: "#111", fontWeight: 400 }}>
            Key <em style={{ fontStyle: "italic", fontWeight: 300, color: "#666" }}>Screens</em>
          </h3>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.22em", color: "#999", textTransform: "uppercase" }}>3 flows</span>
        </div>
        <ScreenGallery cs={cs} />
      </div>

      {/* ── Outcome + Stats ── */}
      <div className="mt-20 sm:mt-28 grid grid-cols-12 gap-6 sm:gap-8">
        <div className="col-span-12 md:col-span-7">
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.22em", color: "#666", textTransform: "uppercase" }}>Outcome</div>
          <h3 className="mt-6" style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(32px, 4vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111", fontWeight: 400 }}>
            {cs.closing}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8">
            {cs.stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(34px, 4.5vw, 68px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#111", fontWeight: 400 }}>{s.value}</div>
                <div className="mt-3" style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.16em", color: "#666", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Browser frame (Brew web screens) ────────────────────────────────────────
function BrowserGalleryFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 20px 48px -12px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06)" }}>
      {/* Title bar */}
      <div style={{ background: "#EDEBE8", padding: "6px 10px", display: "flex", alignItems: "center", gap: 6 }}>
        {(["#FF5F57", "#FEBC2E", "#28C840"] as const).map((c, i) => (
          <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "block", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.12)" }} />
        ))}
        <div style={{ flex: 1, margin: "0 8px", background: "#DDDBD8", borderRadius: 4, padding: "2px 8px", display: "flex", alignItems: "center", gap: 4 }}>
          <svg width="6" height="7" viewBox="0 0 6 7" fill="none">
            <rect x="1" y="2.5" width="4" height="4" rx="0.8" stroke="#999" strokeWidth="0.8" fill="none"/>
            <path d="M2 2.5V1.5a1 1 0 012 0v1" stroke="#999" strokeWidth="0.8"/>
          </svg>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 6.5, color: "#888" }}>breweasy.coffee</span>
        </div>
      </div>
      {children}
    </div>
  );
}

// ─── Phone frame (Shop / Wallet screens) ─────────────────────────────────────
function PhoneGalleryFrame({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  const shell = dark
    ? "linear-gradient(158deg,#2E3D4E 0%,#1C2A38 35%,#121C28 65%,#1E2E3E 100%)"
    : "linear-gradient(158deg,#2E2E2E 0%,#1C1C1C 35%,#111111 65%,#1E1E1E 100%)";
  const btnBg = dark ? "#233040" : "#1A1A1A";

  return (
    <div style={{ margin: "16px auto", position: "relative", width: 192 }}>
      {/* Side buttons */}
      <div style={{ position: "absolute", left: -2.5, top: 80, width: 3, height: 22, borderRadius: "3px 0 0 3px", background: btnBg }} />
      <div style={{ position: "absolute", left: -2.5, top: 110, width: 3, height: 22, borderRadius: "3px 0 0 3px", background: btnBg }} />
      <div style={{ position: "absolute", right: -2.5, top: 92, width: 3, height: 36, borderRadius: "0 3px 3px 0", background: btnBg }} />
      {/* Outer shell */}
      <div style={{
        width: 192, height: 388, borderRadius: 38,
        background: shell,
        padding: "3.5px",
        boxShadow: dark
          ? "0 40px 80px -16px rgba(0,0,0,0.8),0 0 0 1px rgba(255,255,255,0.08),inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 40px 80px -16px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.1),inset 0 1px 0 rgba(255,255,255,0.14)",
      }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 34.5, background: dark ? "#0B1F3A" : "#FFF", overflow: "hidden", position: "relative" }}>
          {/* Dynamic Island */}
          <div style={{ position: "absolute", top: 9, left: "50%", transform: "translateX(-50%)", width: 52, height: 12, borderRadius: 12, background: "#050505", zIndex: 20, boxShadow: "0 0 0 1px rgba(255,255,255,0.07)" }} />
          {/* Scale wrapper: maps 128×264 screen content up to 185×381 gallery inner screen */}
          <div style={{ position: "absolute", top: 0, left: 0, width: 128, height: 264, transform: "scale(1.4453)", transformOrigin: "top left" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen Gallery ───────────────────────────────────────────────────────────
function ScreenGallery({ cs }: { cs: CaseStudy }) {
  const screens =
    cs.pattern === "brew"
      ? [
          { label: "01 — Menu",          desc: "Full catalogue with filters by origin, roast level, and price. Sticky sidebar on desktop.", node: <BrewMenuScreen /> },
          { label: "02 — Subscriptions", desc: "Three tiers presented cleanly. Toggle between monthly and annual billing. No dark patterns.", node: <BrewSubsScreen /> },
          { label: "03 — Journal",        desc: "Long-form roast notes and origin stories. Typography-forward, no sidebar clutter.", node: <BrewJournalScreen /> },
        ]
      : cs.pattern === "shop"
      ? [
          { label: "01 — Checkout",  desc: "Cart → payment in one uninterrupted scroll. Guest and logged-in paths share the same screen.", node: <ShopCheckoutScreen /> },
          { label: "02 — Payment",   desc: "COD, e-wallet, and BNPL on one surface. Saved methods auto-fill from previous orders.", node: <ShopPaymentScreen /> },
          { label: "03 — Confirmed", desc: "Order confirmed with tracking stub and one-tap share. No upsell clutter post-purchase.", node: <ShopConfirmedScreen /> },
        ]
      : [
          { label: "01 — Send Money", desc: "Contacts, QR, and bank-direct in one sheet. Amount input with live peso keyboard.", node: <WalletSendScreen /> },
          { label: "02 — Pay Bills",  desc: "40 providers, one search. Auto-fill from last payment. Schedule for payday.", node: <WalletBillsScreen /> },
          { label: "03 — Goals",      desc: "Glass-jar savings goals with spare-change round-ups. Portfolio summary in two lines.", node: <WalletGoalsScreen /> },
        ];

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
      {screens.map((s) => (
        <div key={s.label} className="flex flex-col gap-5">
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.22em", color: "#666", textTransform: "uppercase" }}>{s.label}</div>
          <div className={`overflow-hidden rounded-[12px] border border-[#EAEAEA] bg-[#F8F7F5] ${cs.pattern !== "brew" ? "flex justify-center" : ""}`}>
            {cs.pattern === "brew"
              ? <BrowserGalleryFrame>{s.node}</BrowserGalleryFrame>
              : <PhoneGalleryFrame dark={cs.pattern === "wallet"}>{s.node}</PhoneGalleryFrame>
            }
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.6, color: "#666" }}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
