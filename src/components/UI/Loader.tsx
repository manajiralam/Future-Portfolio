import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-[#050507] flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center space-y-8">
        {/* Animated Gold Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-24 h-24 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20 animate-ping" />
          <div className="w-20 h-20 rounded-2xl glass-panel border border-[#D4AF37]/50 flex items-center justify-center rotate-45 gold-glow-shadow">
            <span className="-rotate-45 text-2xl font-bold tracking-widest text-gold-gradient">
              AV
            </span>
          </div>
        </motion.div>

        {/* Counter */}
        <div className="text-center space-y-2">
          <p className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            Initializing Experience
          </p>
          <p className="text-4xl font-mono font-bold text-white">
            {progress}%
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden border border-[#D4AF37]/20">
          <motion.div
            className="h-full bg-gradient-to-r from-[#8A6D1C] via-[#D4AF37] to-[#FFD700]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
