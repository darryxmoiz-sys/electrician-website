"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiFileText, FiShield, FiZap } from "react-icons/fi";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    type Particle = {
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; size: number; color: string;
    };

    const particles: Particle[] = [];
    const colors = ["#FFD700", "#00D4FF", "#FFC200", "#ffffff"];

    function spawnParticle() {
      const x = Math.random() * W;
      const y = H + 10;
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(Math.random() * 2 + 1),
        life: 0,
        maxLife: Math.random() * 120 + 60,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let frame = 0;
    function animate() {
      ctx!.clearRect(0, 0, W, H);
      if (frame % 3 === 0) spawnParticle();
      frame++;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const alpha = 1 - p.life / p.maxLife;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = alpha * 0.7;
        ctx!.fill();
        if (p.life >= p.maxLife) particles.splice(i, 1);
      }
      ctx!.globalAlpha = 1;
      requestAnimationFrame(animate);
    }
    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}

function LightningBolt({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 60 100"
      fill="none"
      animate={{ opacity: [1, 0.4, 1, 0.6, 1], scaleY: [1, 0.95, 1.02, 0.97, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M38 2L8 52H30L20 98L54 38H32L38 2Z" fill="#FFD700" opacity="0.9" />
      <path d="M38 2L8 52H30L20 98L54 38H32L38 2Z" fill="url(#bolt-grad)" />
      <defs>
        <linearGradient id="bolt-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D1A]">
      {/* Particles */}
      <ParticleCanvas />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/10 via-transparent to-transparent" />

      {/* Lightning bolts decorative */}
      <LightningBolt className="absolute top-20 left-10 w-12 h-20 opacity-20 hidden lg:block" />
      <LightningBolt className="absolute bottom-32 right-12 w-8 h-14 opacity-15 hidden lg:block" />
      <LightningBolt className="absolute top-1/3 right-1/4 w-6 h-10 opacity-10 hidden xl:block" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
        {/* NICEIC badge pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass border border-[#FFD700]/30 text-[#FFD700] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wider"
        >
          <FiShield className="text-sm" />
          NICEIC APPROVED CONTRACTOR · PART P CERTIFIED
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05] mb-6"
        >
          Fast, Certified{" "}
          <span className="relative inline-block">
            <span className="text-[#FFD700] text-glow-yellow">Electricians</span>
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#00D4FF]">
            in Manchester
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From emergency repairs to full property rewires — Manchester's most trusted electrical
          contractor is available 24/7. Over 2,000 satisfied customers across Greater Manchester.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <a
            href="tel:01611234567"
            className="flex items-center gap-3 bg-[#FFD700] hover:bg-[#FFC200] text-[#0D0D1A] font-bold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all duration-200 glow-yellow w-full sm:w-auto justify-center"
          >
            <FiPhone className="text-xl" />
            Call Now: 0161 123 4567
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-3 glass border border-[#FFD700]/40 hover:border-[#FFD700] text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <FiFileText className="text-xl" />
            Get Free Quote
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          {[
            "✅ Free Estimates",
            "✅ All Work Guaranteed",
            "✅ No Call-Out Fee*",
            "✅ Part P Certified",
            "✅ Fully Insured to £5M",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1">
              {item}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#FFD700] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
