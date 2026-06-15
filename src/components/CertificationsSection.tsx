"use client";
import { motion } from "framer-motion";
import { FiShield, FiAward, FiCheckCircle } from "react-icons/fi";

const certs = [
  {
    name: "NICEIC",
    subtitle: "Approved Contractor",
    desc: "The National Inspection Council for Electrical Installation Contracting. UK's leading electrical safety certification.",
    color: "#FFD700",
    icon: FiShield,
  },
  {
    name: "NAPIT",
    subtitle: "Registered Member",
    desc: "National Association of Professional Inspectors and Testers. Government-authorised to self-certify electrical work.",
    color: "#00D4FF",
    icon: FiAward,
  },
  {
    name: "Part P",
    subtitle: "Competent Person",
    desc: "Fully competent to self-certify domestic electrical work under Part P of the Building Regulations in England and Wales.",
    color: "#FFD700",
    icon: FiCheckCircle,
  },
  {
    name: "18th Edition",
    subtitle: "BS 7671:2018+A2:2022",
    desc: "All our electricians are trained and certified to the latest 18th Edition IET Wiring Regulations including Amendment 2.",
    color: "#00D4FF",
    icon: FiShield,
  },
  {
    name: "OZEV",
    subtitle: "Approved Installer",
    desc: "Office for Zero Emission Vehicles approved — we can register customers for EV charger grant funding on your behalf.",
    color: "#FFD700",
    icon: FiAward,
  },
  {
    name: "Checkatrade",
    subtitle: "Vetted & Verified",
    desc: "Independently vetted, insured and approved by Checkatrade. Our qualifications, insurance and ID have all been verified.",
    color: "#00D4FF",
    icon: FiCheckCircle,
  },
];

export default function CertificationsSection() {
  return (
    <section className="section-padding bg-[#0D0D1A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#00D4FF] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
            Certified, Insured &{" "}
            <span className="text-[#FFD700] text-glow-yellow">Government Approved</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every one of our electricians holds the relevant qualifications. We maintain all industry
            certifications and memberships so you can be confident in our compliance and quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass border border-white/8 rounded-2xl p-6 flex gap-4 group hover:border-[#FFD700]/30 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  <Icon style={{ color: cert.color }} className="text-2xl" />
                </div>
                <div>
                  <p className="font-display font-black text-white text-lg leading-none">{cert.name}</p>
                  <p style={{ color: cert.color }} className="text-xs font-semibold mt-0.5 mb-2">
                    {cert.subtitle}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
