import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Lifts children up over the preceding section with a slow, scroll-tied
 * parallax + fade-in. Sits at a higher stacking layer so it overlaps cleanly.
 */
export function AboutReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["18vh", "0vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);

  return (
    <div ref={ref} className="relative" style={{ zIndex: 2 }}>
      <motion.div style={{ y, scale, opacity, transformOrigin: "center top" }}>
        {children}
      </motion.div>
    </div>
  );
}
