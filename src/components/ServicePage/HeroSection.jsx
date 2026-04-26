import React from "react";
import { NavLink } from "react-router-dom";

function HeroSection({ eyebrow, image, heading, body, stats }) {
  return (
    <section
      className="relative w-full min-h-screen md:min-h-[600px] flex flex-col overflow-hidden bg-[#0b1c35]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(11,28,53,0.98) 0%, rgba(11,28,53,0.55) 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 m-7">
            <span className="w-6 h-px bg-[#C9A45C]" />
            <span
              className="text-[16px] font-semibold text-[#C9A45C] tracking-[3px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {eyebrow}
            </span>
            <span className="w-6 h-px bg-[#C9A45C]" />
          </div>

          {/* Heading */}
          <h1
            className="text-[30px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.15] text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {heading.line1}
            <br />
            <span className="text-[#C9A45C]">{heading.line2}</span>
            <br />
            {heading.line3}
          </h1>

          {/* Gold divider */}
          <div className="w-10 h-[2px] bg-[#C9A45C] rounded-full mb-7" />

          {/* Body */}
          <p
            className="text-[13px] sm:text-[14px] leading-[1.85] text-white/55 mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {body}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              className="text-[12.5px] font-semibold bg-[#C9A45C] text-white rounded-full px-7 py-3 hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <NavLink to={"/book-call"}> Book a Free Call</NavLink>
            </button>
            <button
              className="text-[12.5px] font-medium text-white/65 border border-white/20 rounded-full px-7 py-3 hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors duration-200"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <NavLink to={"/services"}> Explore Services →</NavLink>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 lg:mt-16 flex items-stretch gap-0 border-t border-white/10 pt-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex-1 ${i > 0 ? "border-l border-white/10 pl-6 ml-6" : ""}`}
            >
              <p
                className="text-[26px] sm:text-[30px] font-bold text-white leading-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.num}
                <span className="text-[#C9A45C]">{s.suffix}</span>
              </p>
              <p
                className="text-[11px] text-white/35 mt-2 tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
