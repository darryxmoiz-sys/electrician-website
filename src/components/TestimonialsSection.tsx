"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaGoogle, FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Didsbury, Manchester",
    rating: 5,
    text: "Absolutely fantastic service from PowerPro. Called at 9pm with a complete power cut and they had someone with me within 45 minutes. The electrician was professional, tidy and sorted the fault quickly. Will 100% use again.",
    job: "Emergency Repair",
    date: "March 2024",
  },
  {
    name: "James Thornton",
    location: "Sale, Trafford",
    rating: 5,
    text: "Had my EV charger installed last month — brilliant from start to finish. Quick survey, fair price, clean installation. The Zappi charger is working perfectly and they sorted all the OZEV grant paperwork for me. Highly recommended.",
    job: "EV Charger Installation",
    date: "February 2024",
  },
  {
    name: "Linda and Graham Davies",
    location: "Altrincham",
    rating: 5,
    text: "PowerPro rewired our 1930s semi and replaced the consumer unit. A big job but they handled everything professionally. Three lads worked for four days, kept the place tidy and were always happy to answer questions. Great communication throughout.",
    job: "Full House Rewire",
    date: "January 2024",
  },
  {
    name: "Tom Richards",
    location: "Salford",
    rating: 5,
    text: "Needed an EICR for my rental property quickly and PowerPro sorted it the next morning. Thorough inspection, clear report and very fair pricing. As a landlord this is exactly the sort of reliable contractor I need on my books.",
    job: "EICR Inspection",
    date: "April 2024",
  },
  {
    name: "Emma Clarke",
    location: "Chorlton",
    rating: 5,
    text: "Got three quotes for a fuse board upgrade. PowerPro weren't the cheapest but they were clearly the most professional and explained everything in plain English. So glad I went with them — perfect job and a competitive price in the end.",
    job: "Consumer Unit Upgrade",
    date: "March 2024",
  },
  {
    name: "Raj Patel",
    location: "Stockport",
    rating: 5,
    text: "Brilliant company. Fixed a persistent tripping issue that two other electricians couldn't find. The engineer spent time tracking it down properly. No shortcuts. This is how electrical work should be done. Five stars without hesitation.",
    job: "Fault Finding",
    date: "May 2024",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-[#FFD700] text-sm" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const prev = () => { setAutoplay(false); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setAutoplay(false); setCurrent((c) => (c + 1) % testimonials.length); };

  return (
    <section className="section-padding bg-[#12122A] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaGoogle className="text-[#00D4FF] text-xl" />
            <span className="text-[#00D4FF] text-sm font-semibold tracking-wider uppercase">
              Google Reviews
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            What Manchester Says{" "}
            <span className="text-[#FFD700] text-glow-yellow">About Us</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-gray-400 text-sm">from 347 reviews</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass border border-white/8 rounded-3xl p-8 sm:p-10 text-center"
            >
              <FaQuoteLeft className="text-[#FFD700]/30 text-5xl mx-auto mb-6" />
              <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                "{testimonials[current].text}"
              </p>
              <div className="flex flex-col items-center gap-2">
                <Stars count={testimonials[current].rating} />
                <p className="text-white font-bold text-base mt-1">{testimonials[current].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[current].location}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[#FFD700] text-xs font-medium px-3 py-1 bg-[#FFD700]/10 rounded-full">
                    {testimonials[current].job}
                  </span>
                  <span className="text-gray-500 text-xs">{testimonials[current].date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 glass border border-white/10 rounded-full flex items-center justify-center text-white hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all duration-200"
            >
              <FiChevronLeft />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-[#FFD700]" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 glass border border-white/10 rounded-full flex items-center justify-center text-white hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all duration-200"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
