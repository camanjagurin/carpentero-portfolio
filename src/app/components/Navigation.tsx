import { motion } from "motion/react";

type Props = { introComplete: boolean };

export function Navigation({ introComplete }: Props) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={introComplete ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
      className="fixed top-6 right-8 z-50 flex items-center gap-1 rounded-full bg-[#111] px-2 py-2 shadow-[0_4px_24px_-8px_rgba(17,17,17,0.35)]"
    >
      {[
        { label: "Case Study", href: "#work" },
        { label: "About Me", href: "#about" },
        { label: "Contact", href: "#contact" },
      ].map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className="rounded-full px-4 py-1.5 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 13, letterSpacing: "0.01em" }}
        >
          {label}
        </a>
      ))}
      <a
        href="#"
        className="ml-1 rounded-full bg-white px-4 py-1.5 text-[#111] transition-opacity duration-200 hover:opacity-80"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 13 }}
      >
        Download CV
      </a>
    </motion.nav>
  );
}
