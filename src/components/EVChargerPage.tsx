"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiCheck, FiZap, FiFileText } from "react-icons/fi";

const brands = [
  { name: "Zappi", desc: "Solar-compatible smart charger. Charges from your solar panels first.", price: "From £849 inc." },
  { name: "Ohme", desc: "Smart tariff charger. Automatically charges when electricity is cheapest.", price: "From £749 inc." },
  { name: "Pod Point", desc: "The UK's most popular home charger. Simple, reliable, excellent app.", price: "From £649 inc." },
  { name: "Wallbox", desc: "Feature-rich smart charger with load balancing and solar integration.", price: "From £849 inc." },
  { name: "Andersen A2", desc: "Premium British-designed charger with bespoke cable management.", price: "From £1,199 inc." },
  { name: "Tesla Wall Connector", desc: "Optimal for Tesla vehicles. Compatible with other EVs via adaptor.", price: "From £649 inc." },
];

const process = [
  { step: "1", title: "Free Site Survey", desc: "We visit your property to assess the best location, cable route, and your existing consumer unit capacity. No charge, no obligation." },
  { step: "2", title: "Quote & Charger Selection", desc: "We provide a written fixed-price quote and help you choose the right charger for your vehicle, usage and budget." },
  { step: "3", title: "OZEV Grant Application", desc: "Where eligible, we handle the EV chargepoint grant application on your behalf — saving up to £350 off the total cost." },
  { step: "4", title: "Professional Installation", desc: "Our OZEV-approved electricians install your charger to the highest standard, typically in half a day." },
  { step: "5", title: "Certification & Handover", desc: "You receive a full Electrical Installation Certificate, app setup walkthrough and 3-year warranty on all hardware." },
];

export default function EVChargerPage() {
  return (
    <div className="bg-[#0D0D1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#00D4FF]/8 via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-25" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wider"
          >
            <FiZap />
            OZEV APPROVED INSTALLER · GOVERNMENT GRANT ELIGIBLE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white mb-6"
          >
            EV Charger Installation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FFD700]">
              Manchester
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto"
          >
            OZEV-approved home and commercial EV charge point installation from £599.
            We supply, fit and commission — including OZEV grant paperwork. Fully certificated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:01611234567"
              className="flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-[#0D0D1A] font-black text-lg px-8 py-4 rounded-2xl glow-yellow transition-colors"
            >
              <FiPhone /> Call for Free Survey
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 glass border border-[#00D4FF]/40 hover:border-[#00D4FF] text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200"
            >
              <FiFileText /> Online Enquiry
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-5 mt-8 text-sm text-gray-400"
          >
            {["✅ From £599 inc. installation", "✅ OZEV grant assistance", "✅ 3-year hardware warranty", "✅ Full EIC certificate"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-[#12122A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">
              Chargers We Install
            </h2>
            <p className="text-gray-400 text-lg">
              We're brand-agnostic and supply the best charger for your needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass border border-white/8 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-black text-white text-lg">{brand.name}</h3>
                  <span className="text-[#00D4FF] text-xs font-bold bg-[#00D4FF]/10 px-2.5 py-1 rounded-full">
                    {brand.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#0D0D1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">
              Our Installation Process
            </h2>
            <p className="text-gray-400 text-lg">Simple, transparent, stress-free from survey to sign-off.</p>
          </motion.div>

          <div className="space-y-4">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 glass border border-white/8 rounded-2xl p-6 hover:border-[#FFD700]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FFD700]/15 border border-[#FFD700]/30 rounded-xl flex items-center justify-center shrink-0 font-display font-black text-[#FFD700] text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:01611234567"
              className="inline-flex items-center gap-3 bg-[#FFD700] hover:bg-[#FFC200] text-[#0D0D1A] font-black text-xl px-12 py-5 rounded-2xl transition-colors glow-yellow"
            >
              <FiPhone className="text-2xl" />
              Book Your Free Survey
            </a>
            <p className="text-gray-500 text-sm mt-3">No obligation · Usually available within 3 working days</p>
          </div>
        </div>
      </section>
    </div>
  );
}
