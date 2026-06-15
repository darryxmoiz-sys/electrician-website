"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-[#0D0D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-[#FFD700] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Contact Details
              </p>
              <h2 className="font-display font-black text-3xl text-white mb-2">
                Let's Talk
              </h2>
              <p className="text-gray-400 text-base">
                Call us, WhatsApp us, email us or fill in the form. We respond to all enquiries within 2 hours during business hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: FiPhone, label: "Phone", value: "0161 123 4567", href: "tel:01611234567" },
                { icon: FaWhatsapp, label: "WhatsApp", value: "Message us now", href: "https://wa.me/441611234567" },
                { icon: FiMail, label: "Email", value: "info@powerpro-electrical.co.uk", href: "mailto:info@powerpro-electrical.co.uk" },
                { icon: FiMapPin, label: "Address", value: "Unit 4, Riverside Business Park, Manchester, M1 1AB", href: null },
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-white text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="glass border border-white/8 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <FiClock className="text-[#FFD700]" />
                <p className="text-white font-bold text-sm">Opening Hours</p>
              </div>
              <div className="space-y-1.5 text-sm">
                {[
                  ["Monday – Friday", "7:00am – 6:00pm"],
                  ["Saturday", "8:00am – 2:00pm"],
                  ["Sunday", "Emergency only"],
                  ["Bank Holidays", "Emergency only"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-400">{day}</span>
                    <span className="text-white font-medium">{hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#FFD700] text-xs mt-3 font-semibold">
                ⚡ Emergency line: 24/7/365 — 0161 123 4567
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/8 rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="text-green-400 text-2xl" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white mb-2">Enquiry Received!</h3>
                  <p className="text-gray-400">
                    Thanks for getting in touch. We'll be back to you within 2 hours during business hours, or by 9am next morning for evening enquiries.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-black text-xl text-white mb-6">Get a Free Quote</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-2">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-white/5 border border-white/10 focus:border-[#FFD700]/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-2">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="07XXX XXX XXX"
                        className="w-full bg-white/5 border border-white/10 focus:border-[#FFD700]/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#FFD700]/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-2">Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#0D0D1A] border border-white/10 focus:border-[#FFD700]/50 rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm"
                    >
                      <option value="">Select a service...</option>
                      <option>Emergency Electrical</option>
                      <option>EV Charger Installation</option>
                      <option>Consumer Unit / Fuse Board</option>
                      <option>Full Property Rewire</option>
                      <option>EICR / Electrical Safety Certificate</option>
                      <option>Solar Panels</option>
                      <option>Smart Home / Automation</option>
                      <option>Lighting Installation</option>
                      <option>PAT Testing</option>
                      <option>Commercial Electrical</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-2">Tell Us More *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please describe the work you need or the issue you're experiencing. Include your property address and postcode if possible."
                      className="w-full bg-white/5 border border-white/10 focus:border-[#FFD700]/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-[#0D0D1A] font-black text-base py-4 rounded-xl transition-colors duration-200 glow-yellow"
                  >
                    <FiSend />
                    Send Enquiry — Get Free Quote
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    We'll respond within 2 hours. No spam. No hard sell. Promise.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
