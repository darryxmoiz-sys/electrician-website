"use client";
import { motion } from "framer-motion";
import { FiAward, FiClock, FiThumbsUp, FiDollarSign } from "react-icons/fi";
import { FaShieldAlt, FaStar, FaTools, FaFileAlt } from "react-icons/fa";

const reasons = [
  {
    icon: FaShieldAlt,
    title: "NICEIC Approved",
    desc: "We're NICEIC Approved Contractors — the UK's most trusted electrical certification body. Every job is fully certificated.",
  },
  {
    icon: FiClock,
    title: "Available 24/7",
    desc: "Electrical emergencies don't wait for business hours. Our emergency response team is available every hour of every day.",
  },
  {
    icon: FaStar,
    title: "4.9-Star Rated",
    desc: "Rated 4.9 stars across Google, Checkatrade and Trustpilot with over 347 verified reviews from real Manchester customers.",
  },
  {
    icon: FiDollarSign,
    title: "Fair, Transparent Pricing",
    desc: "No hidden fees. No surprises. We provide detailed written quotes before starting any work, so you know exactly what to expect.",
  },
  {
    icon: FaTools,
    title: "16 Years Experience",
    desc: "Since 2008, we've built an unrivalled reputation for quality electrical work across homes and businesses in Greater Manchester.",
  },
  {
    icon: FaFileAlt,
    title: "Full Documentation",
    desc: "Every job comes with the appropriate certificates — EICR, Minor Works, Installation Certificates — all uploaded to your portal.",
  },
  {
    icon: FiThumbsUp,
    title: "Workmanship Guarantee",
    desc: "All our electrical work is backed by a minimum 12-month workmanship guarantee. We stand behind everything we do.",
  },
  {
    icon: FiAward,
    title: "£5M Public Liability",
    desc: "Fully insured to £5 million public liability. You're protected at every stage of every job we carry out.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#12122A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00D4FF] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Why PowerPro?
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Manchester's{" "}
            <span className="text-[#FFD700] text-glow-yellow">First Choice</span>
            <br />
            Electricians
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We've spent 16 years earning our reputation. Here's what sets PowerPro Electrical apart
            from every other electrician in Manchester.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
                className="glass-yellow p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-11 h-11 bg-[#FFD700]/15 border border-[#FFD700]/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFD700]/25 transition-colors duration-300">
                  <Icon className="text-[#FFD700] text-xl" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
