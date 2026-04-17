import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });

  return <motion.div className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-indigo-400" style={{ scaleX }} />;
}
