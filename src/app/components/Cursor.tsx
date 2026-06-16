import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-magnet]");
      if (ref.current) {
        ref.current.style.transform = interactive ? "scale(2.6)" : "scale(1)";
        ref.current.style.backgroundColor = interactive ? "rgba(17,17,17,0.08)" : "transparent";
        ref.current.style.borderColor = interactive ? "rgba(17,17,17,0)" : "rgba(17,17,17,0.5)";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <div
        ref={ref}
        className="h-6 w-6 rounded-full border transition-[transform,background-color,border-color] duration-300 ease-out"
        style={{ borderColor: "rgba(17,17,17,0.5)" }}
      />
    </motion.div>
  );
}
