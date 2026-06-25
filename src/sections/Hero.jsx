import React from "react";
import { motion } from "framer-motion";
import FinalHero from "../assets/videos/4 HD.mp4";
import mobileHero from "../assets/images/Home/Mobile.png"
import { NavLink } from "react-router-dom";

const line1 = "U.S.-Based Support Partner ".split(" ");
const line2 = `for Ambitious CEO's and ${" "} Scaling Businesses`.split(" ");

const Hero = () => {
  return (
    <section className="relative   min-h-screen flex items-start pt-20 sm:pt-24 md:pt-28 overflow-hidden">
      {/* 🎬 BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-top overflow-hidden z-0 hidden md:block"
      >
        <source src={FinalHero} type="video/mp4" />
      </video>

      <img
        src={mobileHero}
        alt="AlphknotHero"
        srcset=""
       className="absolute inset-0 w-full h-full object-cover object-top z-0 block md:hidden"
      />

      {/* 🔥 CONTENT */}
      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-4">
        <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
          {/* ✅ HEADING (Poppins auto from global CSS) */}
          <h1
            className={
              "text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
            }
          >
            {/* LINE 1 */}
            <div>
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.05 }}
                  className={
                    word === "U.S.-Based"
                      ? "text-[#bb7f14] inline-block mr-2"
                      : "text-[#04388b] inline-block mr-2"
                  }
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
                  // className="inline-block mr-2 text-[#04388b]  "
                  className={
                    ["CEO's", "Businesses"].includes(word)
                      ? "text-[#bb7f14] inline-block mr-2"
                      : "text-[#04388b] inline-block mr-2"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* ✅ TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 sm:mt-6 text-[#bb7f14] text-base sm:text-lg font-medium"
          >
            Infinite Opportunities via Unbreakable Knots
          </motion.p>

          {/* ✅ DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-3 sm:mt-4 mr-0 sm:mr-10 md:mr-20 lg:mr-40 text-[#04388b] text-sm sm:text-base md:text-lg leading-relaxed"
          >
            We help ambitious companies scale faster by providing global talent,
            AI operations, and strategic business support without the complexity
            of hiring.
          </motion.p>

          {/* ✅ TRUST LINE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-3 sm:mt-4 text-[#1F2E4F]/80 text-sm sm:text-base"
          >
            <span className="text-[#bb7f14] font-medium">
              No long-term contracts.
            </span>{" "}
            <span className="text-[#bb7f14] font-medium">
              {" "}
              No delays. Just execution.
            </span>
          </motion.p>

          {/* ✅ BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#bb7f14] text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium tracking-wide text-center"
            >
              <NavLink to={"/book-call"}> Book a Call</NavLink>
            </motion.button>

            <motion.button
              whileHover={{ x: 5 }}
              className="border border-[#04388b] text-[#04388b] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium hover:border-[#04388b] hover:text-[#04388b] transition text-center"
            >
              <NavLink to={"/services"}>Explore Services</NavLink>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
