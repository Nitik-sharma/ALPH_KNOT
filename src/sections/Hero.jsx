import React, { useState } from "react";
import { motion } from "framer-motion";
import FinalHero from "../assets/videos/Laptop.mp4";
import mobileHero from "../assets/images/Home/Alph.png";
import { NavLink } from "react-router-dom";

const line1 = ["U.S.-Based", "Support", "Partner"];
const line2 = ["for", "Ambitious", "CEO's", "and"];
const line3 = ["Scaling", "Businesses"];

const Hero = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden py-16 sm:py-20 md:pt-24 md:pb-16 lg:pt-28 xl:pt-32">
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white">
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-16 h-16 rounded-full border-4 border-[#04388b]/20"></div>

            {/* Spinning Ring */}
            <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-[#04388b] animate-spin"></div>

            {/* Center Dot */}
            <div className="absolute inset-3 rounded-full bg-[#04388b]/10"></div>
          </div>
        </div>
      )}

      {/* BACKGROUND VIDEO - desktop only */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setLoading(false)}
        className="absolute inset-0 w-full h-full object-cover object-top z-0 hidden lg:block"
      >
        <source src={FinalHero} type="video/mp4" />
      </video>

      {/* BACKGROUND IMAGE - mobile/tablet */}
      <img
        src={mobileHero}
        alt="AlphknotHero"
        onLoad={() => setLoading(false)}
        className="absolute inset-0 w-full h-full object-cover object-top z-0 block lg:hidden"
      />

      {/* CONTENT */}
    </section>
  );
};

export default Hero;
