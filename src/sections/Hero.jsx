import React from "react";
import { motion } from "framer-motion";
import HeroVedio from "../assets/videos/Alphknot Theme.mp4";

const line1 = "U.S.-Based Support Partner for".split(" ");
const line2 = "Ambitious CEOs and Scaling Businesses".split(" ");

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-28 overflow-hidden">
      {/* 🎬 BACKGROUND VIDEO */}
      <video
        src={HeroVedio}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 CONTENT */}
      <div className="relative w-full px-2">
        <div className="max-w-xl">
          {/* ✅ HEADING (ANIMATED WORD BY WORD) */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1F2E4F] leading-tight">
            {/* LINE 1 */}
            <div>
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* LINE 2 */}
            <div className="mt-1">
              {line2.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3 + i * 0.05 }}
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

          {/* ✅ PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-[#927946] text-lg leading-relaxed"
          >
            Infinite Opportunities via Unbreakable Knots.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-[#1F2E4F]/70 text-lg leading-relaxed"
          >
            We help ambitious companies scale faster by providing global talent,
            AI operations, and strategic business support — without the
            complexity of hiring.
          </motion.p>

          {/* ✅ TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-[#1F2E4F]/80"
          >
            <span className="text-[#C9A45C] font-semibold">
              No long-term contracts.
            </span>{" "}
            No delays. Just execution.
          </motion.p>

          {/* ✅ BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C9A45C] text-white px-7 py-3 rounded-full font-semibold"
            >
              Book a Call
            </motion.button>

            <motion.button
              whileHover={{ x: 5 }}
              className="border border-[#1F2E4F]/20 text-[#1F2E4F] px-7 py-3 rounded-full hover:border-[#3FA7B3] hover:text-[#3FA7B3] transition"
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
