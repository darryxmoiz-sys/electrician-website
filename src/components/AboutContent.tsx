"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiUsers, FiAward, FiHeart } from "react-icons/fi";

const team = [
  { name: "James Hartley", role: "Founder & Master Electrician", exp: "22 years experience", quals: "City & Guilds 2382, 2391, 2396" },
  { name: "Mike Patel", role: "Senior Electrician", exp: "14 years experience", quals: "City & Guilds 2382, 2391, EV Charger Specialist" },
  { name: "Ryan O'Brien", role: "Electrician & EV Specialist", exp: "9 years experience", quals: "City & Guilds 2382, OZEV Approved Installer" },
  { name: "Dean Whittaker", role: "Electrician", exp: "6 years experience", quals: "City & Guilds 2382, 2391, Smart Home Certified" },
];

export default function AboutContent() {
  return (
    <section className="section-padding bg-[#0D0D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#FFD700] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6">
              Built on Trust,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#00D4FF]">
                Powered by Expertise
              </span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                PowerPro Electrical was founded in 2008 by James Hartley, a Manchester-born
                electrician with a simple belief: every customer deserves honest advice, quality
                workmanship and a fair price. What started as a one-man operation has grown into a
                team of four dedicated electricians serving thousands of homes and businesses across
                Greater Manchester.
              </p>
              <p>
                We've never chased size for its own sake. Instead, we've focused on building a
                reputation for doing things properly — turning up when we say we will, explaining
                what we're doing in plain English, leaving the place as we found it, and standing
                behind every job we complete.
              </p>
              <p>
                That approach has earned us over 347 five-star reviews, NICEIC Approved Contractor
                status and a client list that includes private homeowners, landlords, letting agents,
                architects and commercial businesses right across Greater Manchester.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: FiBriefcase, label: "Founded", value: "2008" },
              { icon: FiUsers, label: "Team Members", value: "8" },
              { icon: FiAward, label: "Jobs Completed", value: "2,847+" },
              { icon: FiHeart, label: "Satisfaction Rate", value: "99.2%" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass border border-white/8 rounded-2xl p-6 text-center">
                  <Icon className="text-[#FFD700] text-2xl mx-auto mb-3" />
                  <p className="font-display font-black text-3xl text-white">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#00D4FF] text-sm font-semibold tracking-[0.2em] uppercase mb-3">The Team</p>
          <h2 className="font-display font-black text-3xl text-white">Meet the Electricians</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass border border-white/8 rounded-2xl p-6 hover:border-[#FFD700]/30 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700]/20 to-[#00D4FF]/20 border border-white/10 rounded-full flex items-center justify-center mb-4 text-2xl">
                👷
              </div>
              <h3 className="font-display font-bold text-white text-base">{member.name}</h3>
              <p className="text-[#FFD700] text-xs font-semibold mt-1 mb-2">{member.role}</p>
              <p className="text-gray-400 text-xs mb-2">{member.exp}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{member.quals}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
