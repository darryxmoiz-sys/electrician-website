"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  { id: 1, title: "Consumer Unit Upgrade", loc: "Didsbury", cat: "Fuse Board", emoji: "⚡", col: "#1A2A3A" },
  { id: 2, title: "Zappi EV Charger", loc: "Sale", cat: "EV Charger", emoji: "🔌", col: "#0A2A1A" },
  { id: 3, title: "Full Rewire — 3-bed Semi", loc: "Chorlton", cat: "Rewire", emoji: "🏠", col: "#2A1A0A" },
  { id: 4, title: "LED Warehouse Lighting", loc: "Trafford Park", cat: "Commercial", emoji: "🏭", col: "#1A0A2A" },
  { id: 5, title: "Smart Hive Heating & Lighting", loc: "Altrincham", cat: "Smart Home", emoji: "🏡", col: "#0A2A2A" },
  { id: 6, title: "8kW Solar + Tesla Powerwall", loc: "Hale", cat: "Solar", emoji: "☀️", col: "#2A2A0A" },
  { id: 7, title: "Garden Lighting Scheme", loc: "Wilmslow", cat: "Lighting", emoji: "🌟", col: "#1A2A1A" },
  { id: 8, title: "3-Phase Commercial Supply", loc: "Salford Quays", cat: "Commercial", emoji: "🔧", col: "#2A0A1A" },
  { id: 9, title: "Bathroom Electrics Upgrade", loc: "Stockport", cat: "Domestic", emoji: "🚿", col: "#0A1A2A" },
  { id: 10, title: "CCTV 16-Camera System", loc: "Manchester City Centre", cat: "Security", emoji: "📷", col: "#1A1A2A" },
  { id: 11, title: "Ohme EV Charger", loc: "Stretford", cat: "EV Charger", emoji: "⚡", col: "#0A2A0A" },
  { id: 12, title: "EICR + Remedial Works", loc: "Bolton", cat: "EICR", emoji: "📋", col: "#2A1A2A" },
];

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const handlePrev = () => setLightbox((l) => l !== null ? (l - 1 + projects.length) % projects.length : null);
  const handleNext = () => setLightbox((l) => l !== null ? (l + 1) % projects.length : null);

  return (
    <section className="section-padding bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <div
                className={`relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-[#FFD700]/40 transition-all duration-300`}
                style={{
                  height: `${180 + (i % 3) * 60}px`,
                  background: `linear-gradient(135deg, ${project.col}, #0D0D1A)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-15">
                  {project.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[#FFD700] text-xs font-semibold">{project.cat}</p>
                  <p className="text-white font-bold text-sm">{project.title}</p>
                  <p className="text-gray-400 text-xs">{project.loc}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-sm">
                    ⤢
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                height: "400px",
                background: `linear-gradient(135deg, ${projects[lightbox].col}, #0D0D1A)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">
                {projects[lightbox].emoji}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80">
                <p className="text-[#FFD700] text-sm font-semibold mb-1">{projects[lightbox].cat}</p>
                <p className="text-white font-display font-black text-2xl">{projects[lightbox].title}</p>
                <p className="text-gray-400">{projects[lightbox].loc}, Manchester</p>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setLightbox(null)}
              >
                <FiX />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={handlePrev}
              >
                <FiChevronLeft />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={handleNext}
              >
                <FiChevronRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
