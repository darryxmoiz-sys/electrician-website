"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiFileText, FiZap } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#12122A] relative overflow-hidden">
      {/* Electric background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/8 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD700]/15 border border-[#FFD700]/30 rounded-full mb-6">
            <FiZap className="text-[#FFD700] text-3xl" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to Get Started?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#00D4FF]">
              Call Manchester's Best.
            </span>
          </h2>

          <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Whether you need an emergency electrician tonight or you're planning a major electrical
            project — PowerPro Electrical is the name Manchester trusts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:01611234567"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-[#FFD700] hover:bg-[#FFC200] text-[#0D0D1A] font-black text-lg px-10 py-5 rounded-2xl transition-colors duration-200 glow-yellow"
            >
              <FiPhone className="text-xl" />
              Call 0161 123 4567
            </motion.a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 glass border-2 border-white/20 hover:border-[#FFD700]/50 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200"
            >
              <FiFileText className="text-xl" />
              Free Quote Online
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            No call-out fee* · No obligation quote · Response within 2 hours guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
