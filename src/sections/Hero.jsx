import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bgVideo from "../assets/videos/Hero_background.mp4";

const line1 = "U.S.-Based Support Partner for".split(" ");
const line2 = "Ambitious CEOs and Scaling Businesses".split(" ");

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-black">
      {/* 🎥 VIDEO BACKGROUND */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </motion.video>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      {/* ✨ GLOW EFFECT */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C9A45C]/10 blur-[140px] rounded-full"
      />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-[#C9A45C] font-semibold tracking-widest"
          >
            ALPH KNOT
          </motion.div>
          {/* 🔥 WORD-BY-WORD HEADING */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {/* 🔥 LINE 1 */}
            <div className="overflow-hidden">
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1], // smoother premium easing
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* 🔥 LINE 2 */}
            <div className="overflow-hidden mt-2">
              {line2.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.08, // starts after line 1
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block mr-2 ${
                    ["Ambitious", "CEOs", "Scaling", "Businesses"].includes(
                      word,
                    )
                      ? "text-[#C9A45C]"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>
         
          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/70 text-lg leading-relaxed mb-6"
          >
            Ditch the hiring headaches. At Alph Knot LLC, we help
            high-performing executives and businesses by connecting them with
            talented professionals who function as strategic partners — offering
            flexible digital support.
          </motion.p>
          {/* HIGHLIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-white/80 mb-8"
          >
            <span className="text-[#C9A45C] font-semibold">
              No long-term contracts.
            </span>{" "}
            No unnecessary delays.
          </motion.p>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 p-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C9A45C] text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              Book a Call
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ x: 5 }}
              className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg border border-white/20 hover:border-[#C9A45C] hover:text-[#C9A45C] transition"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
