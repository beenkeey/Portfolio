import { motion } from "framer-motion";

export function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-140px] bottom-[-200px] h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -36, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,89,255,0.08),transparent_44%)]" />
    </div>
  );
}
