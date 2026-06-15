"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiZap } from "react-icons/fi";

export default function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden py-0">
      <div className="bg-gradient-to-r from-red-900/80 via-red-800/90 to-red-900/80 border-y border-red-500/30 py-8 sm:py-10">
        {/* Pulsing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-[#FFD700]/5 to-red-600/10 animate-pulse-slow" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="shrink-0"
              >
                <FiZap className="text-[#FFD700] text-4xl" />
              </motion.div>
              <div>
                <p className="text-red-300 text-xs font-semibold tracking-[0.2em] uppercase mb-1">
                  Available Right Now
                </p>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Electrical Emergency?{" "}
                  <span className="text-[#FFD700]">We're On Our Way.</span>
                </h2>
                <p className="text-red-200 text-sm mt-1">
                  60-minute response across Greater Manchester · 24 hours · 7 days a week · 365 days a year
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <motion.a
                href="tel:01611234567"
                className="emergency-pulse flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-[#0D0D1A] font-black text-lg px-8 py-4 rounded-2xl transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiPhone className="text-xl" />
                0161 123 4567
              </motion.a>
              <Link
                href="/emergency"
                className="flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold text-base px-6 py-4 rounded-2xl transition-all duration-200 justify-center"
              >
                Emergency Info →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
