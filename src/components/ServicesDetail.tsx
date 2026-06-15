"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiZap, FiArrowRight } from "react-icons/fi";

const detailedServices = [
  {
    id: "emergency",
    title: "24/7 Emergency Electrical",
    price: "From £75 call-out",
    duration: "60-min response",
    description:
      "A complete power failure, sparking sockets or burning smells from your electrics are serious. Our emergency electricians are available around the clock and aim to reach you anywhere in Greater Manchester within 60 minutes.",
    includes: [
      "Full diagnostic inspection on arrival",
      "Immediate fault repair where possible",
      "Temporary safe-off if repair can't be completed same visit",
      "Follow-up visit within 24 hours at no extra call-out charge",
      "Full written report and certification",
    ],
    link: "/emergency",
  },
  {
    id: "ev",
    title: "EV Charger Installation",
    price: "From £599 installed",
    duration: "Half day install",
    description:
      "As an OZEV-approved installer, we can supply and fit home and commercial EV charge points from brands including Zappi, Ohme, Pod Point, Wallbox and Tesla Wall Connector. We also handle the OZEV grant application on your behalf.",
    includes: [
      "Pre-install site survey (free of charge)",
      "Supply and installation of your chosen charger",
      "OZEV grant application assistance",
      "All wiring and consumer unit work included",
      "Electrical Installation Certificate on completion",
    ],
    link: "/ev-charger-installation",
  },
  {
    id: "fuseboard",
    title: "Consumer Unit Upgrade",
    price: "From £450 + parts",
    duration: "1 day",
    description:
      "An old fuse board with rewireable fuses or a wooden-backed consumer unit is a fire risk and may prevent you selling or renting your property. We upgrade to a modern dual RCD or RCBO consumer unit, which complies with current 18th Edition wiring regulations.",
    includes: [
      "Old fuse board removal and disposal",
      "New dual RCD or full RCBO board installation",
      "All circuits individually protected and labelled",
      "Full test of all circuits on completion",
      "Minor Works Electrical Installation Certificate",
    ],
    link: "/services",
  },
  {
    id: "rewire",
    title: "Full Property Rewire",
    price: "From £2,800 (3-bed semi)",
    duration: "2–4 days",
    description:
      "If your property has old rubber-insulated wiring, aluminium wiring, or was last wired more than 25 years ago, a full rewire may be required. Our dedicated rewire team causes minimal disruption and we redecorate any plasterwork we disturb.",
    includes: [
      "Complete stripping of old wiring throughout the property",
      "New 6mm and 2.5mm twin-and-earth throughout",
      "New sockets, switches and light fittings (allowance included)",
      "New consumer unit as standard",
      "Full EICR and EIC on completion",
    ],
    link: "/services",
  },
  {
    id: "eicr",
    title: "EICR – Electrical Safety Certificate",
    price: "From £99 (1-bed flat)",
    duration: "2–4 hours",
    description:
      "Electrical Installation Condition Reports are required by law for all rented properties in England and Scotland. We carry out thorough inspections and provide your EICR certificate on the same day in most cases.",
    includes: [
      "Full visual and tested inspection of all circuits",
      "Detailed report of any C1, C2 or C3 observations",
      "Code C1 hazards made safe on the day at no extra cost",
      "EICR certificate valid for up to 5 years (or next tenancy)",
      "Emailed same day — also available in hard copy",
    ],
    link: "/services",
  },
  {
    id: "solar",
    title: "Solar Panel & Battery Storage",
    price: "From £4,500 installed",
    duration: "1–2 days",
    description:
      "We are MCS-certified solar installers. Our solar packages include panels, inverter, optional battery storage and all the grid connection paperwork. Most Manchester homes can generate 60–80% of their electricity from solar.",
    includes: [
      "Free roof survey and energy generation estimate",
      "Supply and installation of panels, inverter and battery (optional)",
      "DNO (distribution network operator) notification",
      "Smart export guarantee (SEG) application",
      "System monitoring setup via app",
    ],
    link: "/services",
  },
];

export default function ServicesDetail() {
  return (
    <section className="section-padding bg-[#0D0D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {detailedServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="glass border border-white/8 rounded-3xl p-8 lg:p-10 hover:border-[#FFD700]/20 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#FFD700]/15 border border-[#FFD700]/30 rounded-xl flex items-center justify-center">
                    <FiZap className="text-[#FFD700] text-lg" />
                  </div>
                  <div>
                    <h2 className="font-display font-black text-xl text-white">{service.title}</h2>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-[#FFD700] text-xs font-semibold">{service.price}</span>
                      <span className="text-gray-500 text-xs">·</span>
                      <span className="text-gray-400 text-xs">{service.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#FFD700] font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Get a Quote <FiArrowRight />
                </Link>
              </div>

              <div className="lg:w-80 shrink-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  What's Included
                </p>
                <ul className="space-y-2.5">
                  {service.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="text-[#FFD700] text-xs mt-1 shrink-0">✓</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
