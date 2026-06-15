"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaBolt } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/ev-charger-installation", label: "EV Chargers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D0D1A]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <FaBolt className="text-[#FFD700] text-2xl group-hover:text-[#00D4FF] transition-colors duration-300" />
                <div className="absolute inset-0 blur-sm bg-[#FFD700] opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div>
                <span className="font-display font-900 text-white text-lg leading-none tracking-wide">
                  POWER<span className="text-[#FFD700]">PRO</span>
                </span>
                <p className="text-[9px] tracking-[0.25em] text-gray-400 font-light leading-none mt-0.5">
                  ELECTRICAL
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors duration-200 pb-1 ${
                    pathname === link.href ? "text-[#FFD700] active" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/emergency"
                className="text-xs font-semibold text-red-400 border border-red-500/40 px-3 py-1.5 rounded-full hover:bg-red-500/10 transition-all duration-200 flex items-center gap-1.5"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full emergency-pulse inline-block" />
                24/7 Emergency
              </Link>
              <a
                href="tel:01611234567"
                className="flex items-center gap-2 bg-[#FFD700] text-[#0D0D1A] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#FFC200] transition-all duration-200 glow-yellow"
              >
                <FiPhone className="text-base" />
                0161 123 4567
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0D0D1A]/98 backdrop-blur-lg flex flex-col pt-20 px-6 pb-10"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-2xl font-display font-bold py-3 border-b border-white/5 transition-colors duration-200 ${
                      pathname === link.href ? "text-[#FFD700]" : "text-white hover:text-[#FFD700]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:01611234567"
                className="flex items-center justify-center gap-2 bg-[#FFD700] text-[#0D0D1A] font-bold text-lg px-6 py-4 rounded-2xl"
              >
                <FiPhone /> 0161 123 4567
              </a>
              <Link
                href="/emergency"
                className="flex items-center justify-center gap-2 bg-red-600 text-white font-bold text-lg px-6 py-4 rounded-2xl"
              >
                ⚡ Emergency Call-Out
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
