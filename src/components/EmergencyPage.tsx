"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiAlertTriangle, FiClock, FiShield, FiZap, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const emergencyTypes = [
  { emoji: "⚡", title: "Complete Power Failure", desc: "Loss of all power to your property — possible main fuse or supply issue." },
  { emoji: "💥", title: "Sparking Sockets or Switches", desc: "Sparks from electrical outlets are dangerous. Do not use the socket and call immediately." },
  { emoji: "🔥", title: "Burning Smell from Electrics", desc: "A burning or acrid smell from electrical fittings is a fire risk. Switch off at the mains and call now." },
  { emoji: "💡", title: "Repeatedly Tripping Circuits", desc: "Circuit breakers tripping constantly indicate a fault that needs professional diagnosis." },
  { emoji: "🌊", title: "Water & Electrical Contact", desc: "Water ingress near electrics — flooding, leaks or condensation near fittings. Never switch on; call us." },
  { emoji: "🚨", title: "Exposed or Damaged Wiring", desc: "Damaged or exposed live conductors require immediate safe isolation by a qualified electrician." },
];

const serviceAreas = [
  "Manchester City Centre", "Salford", "Stockport", "Trafford", "Didsbury",
  "Chorlton", "Altrincham", "Sale", "Bury", "Bolton", "Oldham", "Wigan",
];

export default function EmergencyPage() {
  return (
    <div className="bg-[#0D0D1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <FiAlertTriangle className="text-red-400 text-6xl mx-auto" />
          </motion.div>

          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-semibold px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full emergency-pulse" />
            EMERGENCY LINE — ACTIVE 24/7
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white mb-6">
            Emergency Electrician
            <br />
            <span className="text-[#FFD700] text-glow-yellow">Manchester</span>
          </h1>

          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Don't wait. If you have an electrical emergency, call now. We aim to reach you anywhere
            in Greater Manchester within 60 minutes, 24 hours a day, 365 days a year.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.a
              href="tel:01611234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="emergency-pulse flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-black text-2xl px-10 py-6 rounded-2xl transition-colors duration-200 shadow-lg shadow-red-600/30"
            >
              <FiPhone className="text-2xl" />
              0161 123 4567
            </motion.a>
            <a
              href="https://wa.me/441611234567?text=EMERGENCY%3A%20I%20need%20an%20emergency%20electrician%20immediately."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-xl px-8 py-6 rounded-2xl transition-colors duration-200"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp Now
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><FiClock className="text-[#FFD700]" /> 60-min response</span>
            <span className="flex items-center gap-1.5"><FiShield className="text-[#FFD700]" /> NICEIC Certified</span>
            <span className="flex items-center gap-1.5"><FiZap className="text-[#FFD700]" /> No extra night/weekend surcharge*</span>
          </div>
        </div>
      </section>

      {/* What constitutes an emergency */}
      <section className="section-padding bg-[#12122A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">
              Is It an Emergency?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              If you're experiencing any of the following, do not delay — call us immediately.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencyTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass border border-red-500/15 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{type.emoji}</div>
                <h3 className="font-display font-bold text-white text-base mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center">
            <p className="text-amber-300 font-bold text-base mb-1">⚠️ If in doubt — call us.</p>
            <p className="text-gray-400 text-sm">
              Electrical problems rarely resolve themselves. If something seems wrong, it's always better to
              have a qualified electrician take a look. We can advise over the phone and will tell you honestly
              whether you need us out immediately or can wait.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="section-padding bg-[#0D0D1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-3xl text-white mb-4">
              Emergency Cover Across{" "}
              <span className="text-[#FFD700]">Greater Manchester</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Our emergency electricians are based across Greater Manchester to ensure rapid response to every area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="flex items-center gap-1.5 text-sm text-gray-300 glass border border-white/8 px-3 py-1.5 rounded-full">
                  <FiMapPin className="text-[#FFD700] text-xs" />
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-12">
              <a
                href="tel:01611234567"
                className="inline-flex items-center gap-3 bg-[#FFD700] hover:bg-[#FFC200] text-[#0D0D1A] font-black text-xl px-12 py-5 rounded-2xl transition-colors glow-yellow"
              >
                <FiPhone className="text-2xl" />
                Call Emergency Line Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
