"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBolt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const serviceAreas = [
  "Manchester City Centre", "Salford", "Stockport", "Trafford",
  "Bury", "Bolton", "Oldham", "Rochdale", "Wigan", "Tameside",
  "Didsbury", "Chorlton", "Altrincham", "Sale",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Emergency Callout", href: "/emergency" },
  { label: "EV Charger Install", href: "/ev-charger-installation" },
];

const services = [
  "Emergency Electrician",
  "EV Charger Installation",
  "Fuse Board Upgrade",
  "House Rewire",
  "EICR Testing",
  "Smart Home Install",
  "Solar Panels",
  "PAT Testing",
  "Commercial Electrical",
  "Lighting Design",
];

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <FaBolt className="text-[#FFD700] text-2xl" />
              <div>
                <span className="font-display font-900 text-white text-lg">
                  POWER<span className="text-[#FFD700]">PRO</span>
                </span>
                <p className="text-[9px] tracking-[0.25em] text-gray-500 leading-none">ELECTRICAL</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              NICEIC Approved Electrical Contractors serving Greater Manchester since 2008. Available
              24/7 for emergency and planned electrical work.
            </p>
            <div className="space-y-3">
              <a href="tel:01611234567" className="flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors text-sm">
                <FiPhone className="text-[#FFD700]" />
                0161 123 4567
              </a>
              <a href="mailto:info@powerpro-electrical.co.uk" className="flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors text-sm">
                <FiMail className="text-[#FFD700]" />
                info@powerpro-electrical.co.uk
              </a>
              <p className="flex items-start gap-2 text-gray-400 text-sm">
                <FiMapPin className="text-[#FFD700] mt-0.5 shrink-0" />
                Unit 4, Riverside Business Park, Manchester, M1 1AB
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/30 transition-all duration-200"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="text-[#FFD700]/50 group-hover:text-[#FFD700] transition-colors">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="text-[#FFD700]/50 group-hover:text-[#FFD700] transition-colors">›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
              Areas We Cover
            </h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs text-gray-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-red-400 font-bold text-sm">24/7 Emergency Line</p>
              <a href="tel:01611234567" className="text-white font-black text-lg hover:text-[#FFD700] transition-colors">
                0161 123 4567
              </a>
              <p className="text-gray-500 text-xs mt-1">60-min response guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PowerPro Electrical Ltd. All rights reserved. Company No. 07654321. VAT No. GB 987 654 321.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
