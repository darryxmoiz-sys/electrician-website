"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Lightning bolt logo animation */}
            <motion.svg
              width="80"
              height="120"
              viewBox="0 0 80 120"
              fill="none"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
            >
              <motion.path
                d="M50 5 L15 65 L38 65 L28 115 L68 45 L44 45 L50 5Z"
                fill="#FFD700"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, transition: { duration: 0.8, delay: 0.3 } }}
                stroke="#FFD700"
                strokeWidth="2"
              />
              <motion.ellipse
                cx="40" cy="118" rx="28" ry="4"
                fill="#FFD700"
                opacity={0.3}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1, transition: { delay: 0.8, duration: 0.3 } }}
              />
            </motion.svg>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
              className="text-center"
            >
              <p className="font-display font-900 text-2xl tracking-widest text-white">
                POWER<span className="text-[#FFD700]">PRO</span>
              </p>
              <p className="text-xs tracking-[0.3em] text-gray-400 mt-1">ELECTRICAL</p>
            </motion.div>

            {/* Loading bar */}
            <div className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#FFD700] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%", transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 } }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
