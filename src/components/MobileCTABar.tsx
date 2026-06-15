"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar">
      <a
        href="tel:01611234567"
        className="flex-1 flex items-center justify-center gap-2 bg-[#FFD700] text-[#0D0D1A] font-black text-base py-4"
      >
        <FiPhone className="text-lg" />
        Call Now
      </a>
      <a
        href="https://wa.me/441611234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold text-base py-4"
      >
        <FaWhatsapp className="text-lg" />
        WhatsApp
      </a>
    </div>
  );
}
