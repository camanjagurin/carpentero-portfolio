import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  onComplete: () => void;
};

export function IntroOverlay({ onComplete }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Start exit after elements have played in
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  // Signal parent slightly after exit animation starts
  useEffect(() => {
    if (!visible) {
      const t = setTimeout(onComplete, 700);
      return () => clearTimeout(t);
    }
  }, [visible, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-[#0E0E0E]"
        >
          {/* Scan line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            style={{ transformOrigin: "left center" }}
            className="absolute top-1/2 left-0 h-px w-full bg-white opacity-10"
          />

          {/* HC monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "clamp(72px, 12vw, 160px)",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "-0.06em",
              color: "#fff",
              lineHeight: 1,
            }}
          >
            HC
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.72 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              letterSpacing: "0.38em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              marginTop: 20,
            }}
          >
            Hercules Carpentero
          </motion.div>

          {/* Discipline tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.15 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.22)",
              textTransform: "uppercase",
              marginTop: 14,
            }}
          >
            UI/UX Designer · Team Lead · Graphic Designer · Video Editor
          </motion.div>

          {/* Corner counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
            className="absolute bottom-8 right-8"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase" }}
          >
            Portfolio · 2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
            className="absolute bottom-8 left-8"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase" }}
          >
            Cebu City, PH
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
