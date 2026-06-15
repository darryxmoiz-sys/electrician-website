"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/441611234567?text=Hi%20PowerPro,%20I%27d%20like%20to%20enquire%20about%20your%20electrical%20services."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors duration-200"
            title="WhatsApp Us"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </motion.a>

          {/* Call */}
          <motion.a
            href="tel:01611234567"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-[#FFD700] hover:bg-[#FFC200] rounded-full flex items-center justify-center shadow-lg shadow-[#FFD700]/30 transition-colors duration-200"
            title="Call Us"
          >
            <FiPhone className="text-[#0D0D1A] text-xl font-bold" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
