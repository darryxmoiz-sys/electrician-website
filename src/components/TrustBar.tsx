"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Years Experience", end: 16, suffix: "+", prefix: "" },
  { label: "Jobs Completed", end: 2847, suffix: "+", prefix: "" },
  { label: "5-Star Reviews", end: 347, suffix: "+", prefix: "" },
  { label: "Certifications Held", end: 12, suffix: "", prefix: "" },
];

function CountUp({ end, duration = 2000, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="gradient-text font-display font-black text-4xl sm:text-5xl lg:text-6xl">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="py-16 bg-[#12122A] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-gray-400 text-sm mt-2 font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
