import { motion } from "motion/react";
import type { ReactNode, CSSProperties } from "react";

export function RevealLines({ lines, className, style }: { lines: string[]; className?: string; style?: CSSProperties }) {
  return (
    <span className={className} style={style}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-15%" }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function FadeUp({ children, delay = 0, className, style }: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-10%" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
