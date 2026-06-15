"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryItems = [
  { id: 1, title: "Consumer Unit Upgrade", location: "Didsbury, Manchester", category: "Fuse Board", color: "#1A2A3A", emoji: "⚡" },
  { id: 2, title: "EV Charger Install", location: "Sale, Trafford", category: "EV Charger", color: "#0A2A1A", emoji: "🔌" },
  { id: 3, title: "Full House Rewire", location: "Chorlton, Manchester", category: "Rewire", color: "#2A1A0A", emoji: "🏠" },
  { id: 4, title: "Commercial LED Upgrade", location: "Salford Quays", category: "Lighting", color: "#1A0A2A", emoji: "💡" },
  { id: 5, title: "Smart Home Automation", location: "Altrincham, Trafford", category: "Smart Home", color: "#0A2A2A", emoji: "🏡" },
  { id: 6, title: "Solar Panel Installation", location: "Stockport, GM", category: "Solar", color: "#2A2A0A", emoji: "☀️" },
  { id: 7, title: "Garden Lighting Scheme", location: "Hale, Cheshire", category: "Lighting", color: "#1A2A1A", emoji: "🌟" },
  { id: 8, title: "3-Phase Industrial Supply", location: "Trafford Park", category: "Commercial", color: "#2A0A1A", emoji: "🏭" },
];

const categories = ["All", "Fuse Board", "EV Charger", "Rewire", "Lighting", "Smart Home", "Solar", "Commercial"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <section className="section-padding bg-[#0D0D1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#FFD700] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Recent Projects
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Our Work Speaks{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#00D4FF]">
              For Itself
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Browse recent electrical installations and projects completed across Greater Manchester.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#FFD700] text-[#0D0D1A] font-bold"
                  : "glass border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              style={{ minHeight: i === 0 || i === 5 ? "320px" : "200px" }}
            >
              {/* Placeholder colored bg */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}88)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Emoji placeholder for photo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 text-8xl">
                {item.emoji}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs text-[#FFD700] font-semibold tracking-wider uppercase">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-base mt-1">{item.title}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{item.location}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 border-2 border-[#FFD700]/0 group-hover:border-[#FFD700]/50 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 glass border border-[#FFD700]/40 hover:border-[#FFD700] text-[#FFD700] font-semibold px-8 py-3 rounded-full transition-all duration-200"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
