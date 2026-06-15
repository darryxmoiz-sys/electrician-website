"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiZap, FiHome, FiAlertTriangle, FiTruck, FiSettings, FiSun,
  FiCheckSquare, FiWifi, FiShield, FiTool, FiBattery, FiMonitor,
} from "react-icons/fi";

const services = [
  {
    icon: FiAlertTriangle,
    title: "Emergency Electrical",
    desc: "24/7 emergency call-out across Greater Manchester. We aim to be with you within 60 minutes for urgent faults.",
    color: "#FF4444",
    href: "/emergency",
  },
  {
    icon: FiTruck,
    title: "EV Charger Installation",
    desc: "OZEV-approved home and commercial EV charge point installation from leading brands like Zappi, Pod Point and Ohme.",
    color: "#00D4FF",
    href: "/ev-charger-installation",
  },
  {
    icon: FiSettings,
    title: "Fuse Board Upgrade",
    desc: "Upgrade your old fuse box to a modern consumer unit. Essential safety work carried out to 18th Edition wiring regulations.",
    color: "#FFD700",
    href: "/services",
  },
  {
    icon: FiHome,
    title: "Full Property Rewire",
    desc: "Complete rewiring for homes and commercial premises. Minimal disruption with our dedicated in-house team.",
    color: "#FFD700",
    href: "/services",
  },
  {
    icon: FiCheckSquare,
    title: "EICR Testing",
    desc: "Electrical Installation Condition Reports for landlords, homebuyers and businesses. Certificated same day.",
    color: "#00D4FF",
    href: "/services",
  },
  {
    icon: FiSun,
    title: "Solar & Battery Storage",
    desc: "MCS-certified solar panel installation and battery storage systems. Reduce your bills and your carbon footprint.",
    color: "#FFD700",
    href: "/services",
  },
  {
    icon: FiWifi,
    title: "Smart Home Automation",
    desc: "Hive, Nest, Ring, and full KNX smart home systems installed by our dedicated smart-home specialists.",
    color: "#00D4FF",
    href: "/services",
  },
  {
    icon: FiTool,
    title: "Lighting Design & Install",
    desc: "LED retrofits, downlight installation, garden lighting, commercial lighting schemes. Full design and supply.",
    color: "#FFD700",
    href: "/services",
  },
  {
    icon: FiBattery,
    title: "PAT Testing",
    desc: "Portable Appliance Testing for businesses and landlords. Fully certified reports issued on site for your records.",
    color: "#00D4FF",
    href: "/services",
  },
  {
    icon: FiShield,
    title: "Landlord Certificates",
    desc: "Electrical safety certificates, EICRs and compliance reports. We work with landlords and letting agents across Manchester.",
    color: "#FFD700",
    href: "/services",
  },
  {
    icon: FiMonitor,
    title: "CCTV & Security",
    desc: "IP CCTV installation, alarm systems and access control. Protect your home or business with professional security.",
    color: "#00D4FF",
    href: "/services",
  },
  {
    icon: FiZap,
    title: "Commercial Electrical",
    desc: "3-phase power, office fit-outs, industrial electrical work and maintenance contracts for businesses of all sizes.",
    color: "#FFD700",
    href: "/services",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-[#0D0D1A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#FFD700] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Electrical Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#00D4FF]">
              You Can Trust
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fully qualified and insured electricians covering all domestic, commercial and industrial
            electrical needs across Greater Manchester.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              >
                <Link
                  href={service.href}
                  className="service-card glass block p-6 rounded-2xl border border-white/5 transition-all duration-300 h-full group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                  >
                    <Icon style={{ color: service.color }} className="text-xl" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                  <div
                    className="mt-4 text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                    style={{ color: service.color }}
                  >
                    Learn more <span>→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
