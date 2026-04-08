import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const line1 = "U.S.-Based Support Partner for".split(" ");
const line2 = "Ambitious CEOs and Scaling Businesses".split(" ");

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 bg-white p-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* 2 COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 🔥 LEFT CONTENT */}
          <div>
            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-[#C9A45C] font-semibold tracking-widest"
            >
              ALPH KNOT
            </motion.div>

            {/* 🔥 HEADING */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2E4F] leading-tight mb-6 max-w-2xl">
              {/* LINE 1 */}
              <div>
                {line1.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
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
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
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

            {/* 🔥 SUBHEADING (UPDATED) */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#1F2E4F]/70 text-xl leading-relaxed mb-6 max-w-xl"
            >
              We help ambitious companies scale faster by providing global
              talent, AI operations, and strategic business support - without
              the complexity of hiring.
            </motion.p>

            {/* 🔥 HIGHLIGHT LINE */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-[#1F2E4F]/80 mb-8 text-lg"
            >
              <span className="text-[#C9A45C] font-semibold">
                No long-term contracts.
              </span>{" "}
              No delays. Just execution.
            </motion.p>

            {/* 🔥 CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C9A45C] text-white px-7 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                Book a Call
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ x: 5 }}
                className="border border-[#1F2E4F]/20 text-[#1F2E4F] px-7 py-3 rounded-lg hover:border-[#3FA7B3] hover:text-[#3FA7B3] transition"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </div>

          {/* 🔥 RIGHT SIDE (EMPTY FOR GRAPHICS) */}
          <div className="hidden lg:flex items-center justify-center">
            {/* Future Graphics Here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
