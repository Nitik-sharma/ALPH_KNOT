import React from "react";
import { motion } from "framer-motion";
import FinalHero from "../assets/videos/4 HD.mp4";
import mobileHero from "../assets/images/Home/Alph.png";
import { NavLink } from "react-router-dom";

const line1 = ["U.S.-Based", "Support", "Partner"];
const line2 = ["for", "Ambitious", "CEO's", "and"];
const line3 = ["Scaling", "Businesses"];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden py-16 sm:py-20 md:pt-24 md:pb-16 lg:pt-28 xl:pt-32">
      {/* BACKGROUND VIDEO - desktop only */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-top z-0 hidden lg:block"
      >
        <source src={FinalHero} type="video/mp4" />
      </video>

      {/* BACKGROUND IMAGE - mobile/tablet */}
      <img
        src={mobileHero}
        alt="AlphknotHero"
        className="absolute inset-0 w-full h-full object-cover object-top z-0 block lg:hidden"
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full flex justify-center lg:justify-start  px-6 sm:px-8 md:px-12 lg:px-10 xl:px-20 2xl:px-24 lg:ml-[-50px]">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-lg 2xl:max-w-xl text-center lg:text-left">
          {/* HEADING */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl leading-tight">
            {/* LINE 1 */}
            <div className="whitespace-nowrap flex justify-center lg:justify-start flex-wrap">
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
            <div className="mt-1 flex justify-center lg:justify-start flex-wrap">
              {line2.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className={
                    ["CEO's"].includes(word)
                      ? "text-[#bb7f14] inline-block mr-2"
                      : "text-[#04388b] inline-block mr-2"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* LINE 3 */}
            <div className="mt-1 flex justify-center lg:justify-start flex-wrap">
              {line3.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className={
                    word === "Businesses"
                      ? "text-[#bb7f14] inline-block mr-2"
                      : "text-[#04388b] inline-block mr-2"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 sm:mt-6 text-[#bb7f14] text-base sm:text-lg font-medium"
          >
            Infinite Opportunities via Unbreakable Knots
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-3 sm:mt-4 text-[#04388b] text-sm sm:text-base md:text-lg leading-relaxed"
          >
            We help ambitious companies scale faster by providing global talent,
            AI operations, and strategic business support without the complexity
            of hiring.
          </motion.p>

          {/* TRUST LINE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base"
          >
            <span className="text-[#bb7f14] font-medium">
              No long-term contracts.
            </span>{" "}
            <span className="text-[#bb7f14] font-medium">
              No delays. Just execution.
            </span>
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#bb7f14] text-white px-6 sm:px-8 py-3 rounded-full font-medium tracking-wide text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#bb7f14]"
            >
              <NavLink to="/book-call">Book a Call</NavLink>
            </motion.button>

            <motion.button
              whileHover={{ x: 5 }}
              className="w-full sm:w-auto border border-[#04388b] text-[#04388b] px-6 sm:px-8 py-3 rounded-full font-medium hover:border-[#04388b] hover:text-[#04388b] transition text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#04388b]"
            >
              <NavLink to="/services">Explore Services</NavLink>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
