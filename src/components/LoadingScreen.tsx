import { AnimatePresence, motion } from "framer-motion";

type LoadingScreenProps = {
  isLoading: boolean;
};

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="h-12 w-12 rounded-full border-2 border-indigo-400/30 border-t-indigo-300"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <p className="text-xs tracking-[0.22em] text-slate-300 uppercase">Loading Experience</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
